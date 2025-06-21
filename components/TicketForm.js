import React, { useState } from 'react';

function TicketForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., send the data to an API.
    console.log('Ticket Submitted:', { title, description });
    // Clear the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div className="ticket-form-container material-card">
      <h3 className="section-title">Raise a Ticket</h3>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '80px' }}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="material-button primary">
          Raise Ticket
        </button>
      </form>
    </div>
  );
}

export default TicketForm;