import { useState, useEffect } from 'react';
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import { FiCode, FiSend, FiLoader, FiCheckCircle, FiAlertCircle, FiCopy } from 'react-icons/fi';
import './App.css';

function App() {
  const [code, setCode] = useState(`// Welcome to Review Bot
function calculateSum(a, b) {
  /**
   * Calculates the sum of two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  return a + b;
}`);
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, [code, review]);

  async function reviewCode() {
    if (!code.trim()) {
      setError('Please enter some code to review');
      return;
    }
    
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (err) {
      setError('Failed to get review. Please check your connection and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  function copyCode() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <FiCode size={28} />
            <h1>Review Bot</h1>
          </div>
          <p className="tagline">Professional Code Review Assistant</p>
        </div>
      </header>
      
      <main className="app-main">
        <div className="editor-panel">
          <div className="panel-header">
            <h2>Code Editor</h2>
            <div className="panel-actions">
              <button 
                onClick={copyCode}
                className="icon-button"
                title="Copy code"
                disabled={!code.trim()}
              >
                <FiCopy />
                {copied && <span className="tooltip">Copied!</span>}
              </button>
              <div className="status-indicator">
                {isLoading && (
                  <span className="loading">
                    <FiLoader className="spin" /> Analyzing
                  </span>
                )}
                {error && (
                  <span className="error">
                    <FiAlertCircle /> {error}
                  </span>
                )}
                {review && !isLoading && !error && (
                  <span className="success">
                    <FiCheckCircle /> Review Ready
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="code-editor-container">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={16}
              textareaId="code-editor"
              className="code-editor"
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 14,
                lineHeight: 1.6,
              }}
            />
          </div>
          
          <div className="editor-footer">
            <button 
              onClick={reviewCode}
              disabled={isLoading || !code.trim()}
              className="primary-button"
            >
              <FiSend className="button-icon" />
              {isLoading ? 'Analyzing Code...' : 'Get Professional Review'}
              <span className="button-shine"></span>
            </button>
          </div>
        </div>
        
        <div className="review-panel">
          <div className="panel-header">
            <h2>Code Analysis</h2>
            <div className="documentation-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Documentation
              </a>
            </div>
          </div>
          
          <div className="review-content">
            {review ? (
              <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <FiCode size={48} />
                </div>
                <h3>No Review Yet</h3>
                <p>Write or paste your code and click "Get Professional Review"</p>
                <div className="tips">
                  <p><strong>Tips:</strong></p>
                  <ul>
                    <li>Keep functions small and focused</li>
                    <li>Add clear comments where needed</li>
                    <li>Include example inputs/outputs</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="app-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Review Bot | Professional Code Review Tool</p>
          <div className="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="https://www.linkedin.com/in/shivam-juyal-034273219/">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;