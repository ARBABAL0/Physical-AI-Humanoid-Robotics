import { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import AITutor from './AITutor';

const GlobalAITutor: React.FC = () => {
  const [selectedText, setSelectedText] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const location = useLocation();

  // Handle text selection globally
  useEffect(() => {
    const handleSelection = () => {
      const selectedTextObj = window.getSelection();
      const text = selectedTextObj?.toString().trim() || '';
      
      if (text && text.length > 10) { // Only consider meaningful selections
        setSelectedText(text);
        setIsModalOpen(true);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      // If user clicks outside of the AI Tutor modal, close it
      if (isModalOpen && !(e.target as Element).closest('.ai-tutor-modal')) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isModalOpen]);

  // Close the modal when navigating to a different page
  useEffect(() => {
    setIsModalOpen(false);
  }, [location]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div 
      className="ai-tutor-modal"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        width: '400px',
        maxWidth: '90vw'
      }}
    >
      <AITutor selectedText={selectedText} />
    </div>
  );
};

export default GlobalAITutor;