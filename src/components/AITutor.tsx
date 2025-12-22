import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

interface AITutorProps {
  className?: string;
  selectedText?: string;
}

const AITutor: React.FC<AITutorProps> = ({ className, selectedText = '' }) => {
  const [question, setQuestion] = useState<string>(selectedText);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isContextLimited, setIsContextLimited] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Add user message to the conversation
    const userMessage = { role: 'user', content: question };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);
    setError(null);

    try {
      // Note: You need to set the RAG chatbot API URL in your environment variables
      const apiUrl = process.env.REACT_APP_RAG_CHATBOT_URL || process.env.RAG_CHATBOT_URL;
      
      if (!apiUrl) {
        throw new Error('RAG chatbot API URL is not configured. Please set REACT_APP_RAG_CHATBOT_URL environment variable.');
      }

      // Prepare the request payload
      const payload: any = {
        query: question,
        history: messages.filter(msg => msg.role !== 'system'), // Exclude system messages from history
      };

      // If we have selected text, include it as context
      if (selectedText) {
        payload.context = selectedText;
        payload.is_context_limited = true;
        setIsContextLimited(true);
      } else {
        payload.is_context_limited = false;
        setIsContextLimited(false);
      }

      // Call the existing RAG chatbot API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any authentication headers if required by your API
          // 'Authorization': `Bearer ${process.env.RAG_CHATBOT_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse = data.response || data.answer || data.message || 'No response from AI Tutor';

      // Add AI response to the conversation
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      setQuestion(''); // Clear the input field after successful submission
    } catch (err) {
      console.error('Error calling RAG chatbot API:', err);
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while getting the AI response';
      setError(errorMessage);
      // Add error message to conversation
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Error: ${errorMessage}. Please check your API configuration.` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
    setQuestion('');
    setIsContextLimited(false);
  }, []);

  return (
    <div className={clsx('card', className)}>
      <div className="card__header">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h3>AI Tutor</h3>
            <p className="text--secondary text--small">
              Ask questions about Physical AI concepts
              {isContextLimited && (
                <span className="badge badge--secondary margin-left--sm">Context-Limited</span>
              )}
            </p>
          </div>
          {messages.length > 0 && (
            <button 
              className="button button--secondary button--sm"
              onClick={clearChat}
              type="button"
            >
              Clear Chat
            </button>
          )}
        </div>
      </div>
      <div className="card__body">
        <div className="chat-container" style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '1rem' }}>
          {messages.length === 0 ? (
            <div className="text--center padding--md">
              <p className="text--secondary">Ask me anything about Physical AI concepts!</p>
              {selectedText && (
                <div className="alert alert--info margin-top--sm">
                  <p><strong>Selected text:</strong> {selectedText.substring(0, 100)}{selectedText.length > 100 ? '...' : ''}</p>
                  <p className="text--small">I'll answer based on this specific context</p>
                </div>
              )}
            </div>
          ) : (
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={clsx('margin-bottom--sm', {
                    'user-message': msg.role === 'user',
                    'ai-message': msg.role === 'assistant'
                  })}
                >
                  <div className={clsx('padding--sm', 'radius--sm', {
                    'background-color--gray': msg.role === 'user',
                    'background-color--primary--lightest': msg.role === 'assistant'
                  })}>
                    <strong className="margin-right--sm">
                      {msg.role === 'user' ? 'You:' : 'AI Tutor:'}
                    </strong>
                    <p className="margin-bottom--none">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="ai-message margin-bottom--sm">
                  <div className="padding--sm radius--sm background-color--primary--lightest">
                    <strong className="margin-right--sm">AI Tutor:</strong>
                    <div className="d-flex align-items-center">
                      <div className="spinner-border spinner-border-sm margin-right--sm" role="status">
                        <span className="sr-only">Thinking...</span>
                      </div>
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          {selectedText && !messages.length && (
            <div className="alert alert--info margin-bottom--md">
              <p><strong>Context:</strong> {selectedText.substring(0, 150)}{selectedText.length > 150 ? '...' : ''}</p>
              <p className="text--small">Your question will be answered based on this selected text</p>
            </div>
          )}
          
          <div className="form-group margin-bottom--md">
            <textarea
              className="form-control"
              placeholder={selectedText 
                ? "Ask a question about the selected text..." 
                : "Ask a question about Physical AI concepts..."}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={3}
              disabled={isLoading}
            />
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className={clsx('button button--primary', { 'button--loading': isLoading })}
              disabled={isLoading || !question.trim()}
              style={{ flex: 1 }}
            >
              {isLoading ? (
                <div className="button__content">
                  <span className="button__label">Thinking...</span>
                </div>
              ) : (
                'Ask AI Tutor'
              )}
            </button>
            {selectedText && (
              <button
                type="button"
                className="button button--secondary margin-left--sm"
                onClick={() => {
                  setQuestion('');
                  setIsContextLimited(false);
                }}
              >
                Clear Selection
              </button>
            )}
          </div>
        </form>

        {error && (
          <div className="alert alert--danger margin-top--md">
            <p>{error}</p>
            <p className="text--small">
              Note: You need to configure your RAG chatbot API endpoint. 
              Set REACT_APP_RAG_CHATBOT_URL environment variable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AITutor;