import React, { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const ReadmeRenderer = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'text/markdown' || file.name.endsWith('.md'))) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdownContent(e.target.result);
        setErrorMessage(''); // Clear any previous error messages
      };
      reader.readAsText(file);
    } else {
      setErrorMessage('Please upload a valid Markdown file.');
    }
  };

  return (
    <div className="readme-renderer">
      <h1>README Renderer</h1>
      <input type="file" accept=".md,.markdown,text/markdown" onChange={handleFileUpload} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
};

export default ReadmeRenderer;
