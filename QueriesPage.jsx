import React, { useState } from 'react';
import './QueriesPage.css';

const QueriesPage = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [submittedQueries, setSubmittedQueries] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (!text && !file) {
      alert('Please add a comment or file to submit.');
      return;
    }

    const newQuery = {
      text,
      file,
    };

    setSubmittedQueries((prevQueries) => [...prevQueries, newQuery]);
    setText('');
    setFile(null);
  };

  return (
    <div>
      <section className="queries-section">
        <h2>Queries</h2>
        <p>Students can ask doubts and interact with seniors here.</p>

        {/* File Upload and Text Input */}
        <div className="upload-container">
          <label htmlFor="file-upload">Choose a file:</label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          
          <label htmlFor="text-input">Enter your text:</label>
          <textarea
            id="text-input"
            value={text}
            onChange={handleTextChange}
            placeholder="Type your comment or question here..."
          />
          
          {file && (
            <div className="preview">
              <strong>Preview:</strong>
              {file.type.startsWith('image') ? (
                <img src={URL.createObjectURL(file)} alt="Preview" />
              ) : file.type.startsWith('video') ? (
                <video controls src={URL.createObjectURL(file)} />
              ) : (
                <p>Unsupported file type.</p>
              )}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <center>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        </center>

        {/* Display Submitted Queries */}
        <div className="submitted-queries">
          <h3>Submitted Queries</h3>
          {submittedQueries.length > 0 ? (
            submittedQueries.map((query, index) => (
              <div key={index} className="query-item">
                {query.text && <p>{query.text}</p>}
                {query.file && (
                  <div className="query-file-preview">
                    {query.file.type.startsWith('image') ? (
                      <img src={URL.createObjectURL(query.file)} alt="Submitted File" />
                    ) : query.file.type.startsWith('video') ? (
                      <video controls src={URL.createObjectURL(query.file)} />
                    ) : (
                      <p>Unsupported file type.</p>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No queries submitted yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default QueriesPage;