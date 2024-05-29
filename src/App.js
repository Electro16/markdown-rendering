import React, { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

function App() {
  const [markdownContent, setMarkdownContent] = useState(`# Hello World


`);

  return (
    <div className="App">
      <h1>Markdown Renderer</h1>
      <textarea
        value={markdownContent}
        onChange={(e) => setMarkdownContent(e.target.value)}
        rows="10"
        cols="50"
      />
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
}

export default App;
