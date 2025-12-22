// Environment variable utility for Docusaurus
// This allows us to access environment variables in the browser environment

export const getEnvVar = (name: string, defaultValue?: string): string | undefined => {
  // In Docusaurus, environment variables need to be accessed through the global window object
  // or passed through the config
  const envValue = typeof window !== 'undefined' 
    ? (window as any).__ENV?.[name] 
    : process?.env?.[name];
  
  return envValue || defaultValue;
};

export const getRagChatbotUrl = (): string | undefined => {
  return getEnvVar('REACT_APP_RAG_CHATBOT_URL') || getEnvVar('RAG_CHATBOT_URL');
};