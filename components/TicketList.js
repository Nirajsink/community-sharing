import React, { useState } from 'react';

function TicketList() {
  // Static example ticket data
  const [tickets, setTickets] = useState([
    { id: 1, title: 'Need help with CSS layout', description: 'Struggling to make a div responsive, any CSS gurus available?', accepted: false },
    { id: 2, title: 'Looking for a stapler', description: 'Anyone have a stapler I could borrow quickly?', accepted: false },
    { id: 3, title: 'Question about Slack integration', description: 'Trying to integrate a new tool with Slack, need some guidance.', accepted: false },
  ]);

  const handleAccept = (id) => {
    setTickets(tickets.map(ticket =>
      ticket.id === id ? { ...ticket, accepted: true } : ticket
    ));
  };

  return (
    <div className="ticket-list-container">
      <h2 className="section-heading">Open Tickets</h2>
      <ul className="ticket-list">
        {tickets.map(ticket => (
          <li key={ticket.id} className={`ticket-item ${ticket.accepted ? 'accepted' : ''}`}>
            <div className="ticket-content">
              <h3 className="ticket-title">{ticket.title}</h3>
              <p className="ticket-description">{ticket.description}</p>
            </div>
            {!ticket.accepted && (
              <button className="accept-button" onClick={() => handleAccept(ticket.id)}>
                Accept
              </button>
            )}
            {ticket.accepted && (
              <span className="accepted-message">Accepted!</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;