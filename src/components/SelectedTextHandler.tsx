import React, { useState, useEffect } from 'react';

interface SelectedTextHandlerProps {
  onTextSelection: (selectedText: string) => void;
}

const SelectedTextHandler: React.FC<SelectedTextHandlerProps> = ({ onTextSelection }) => {
  useEffect(() => {
    const handleSelection = () => {
      const selectedText = window.getSelection()?.toString().trim();
      if (selectedText) {
        onTextSelection(selectedText);
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, [onTextSelection]);

  return null;
};

export default SelectedTextHandler;