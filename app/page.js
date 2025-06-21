"use client";
import Header from '../components/Header';
import { useState } from 'react';
import TicketForm from '../components/TicketForm';
import TicketList from '../components/TicketList';

export default function Home() {
  const [tickets, setTickets] = useState([
    { id: 1, title: 'Help with printer issue', description: 'The printer on the second floor is not working. Can someone with technical skills take a look?', accepted: false },
    { id: 2, title: 'Looking for a stapler', description: 'Does anyone have a stapler I could borrow for a few hours?', accepted: false },
  ]);

  const handleAcceptTicket = (id) => {
    setTickets(tickets.map(ticket =>
      ticket.id === id ? { ...ticket, accepted: true } : ticket
    ));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // In a real app, you would send this data to an API.
    // For this static example, we'll just clear the form.
    event.target.reset();
  };

  return (
    <div className="container">
      {/* The existing Tailwind classes are removed to rely on globals.css
          You can choose to use a combination of Tailwind and custom CSS
          if you prefer, but for clarity in this example, we'll rely
          more on the new CSS classes. If you want to keep Tailwind,
          you would integrate the new custom classes alongside or within
          your Tailwind structure. For now, assume Tailwind classes
          are being replaced by the new custom classes for design.
      */}
      <header>
        <h1 className="text-4xl font-bold mb-8">Office Community Board</h1>
      </header>
      <main className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <section className="flex-1 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Share</h2>
          <ul>
            <li className="mb-2">Extra office supplies (pens, paper)</li>
            <li className="mb-2">Homemade cookies (nut-free)</li>
            <li>Need a ride to the conference?</li>
          </ul>
        </section>
        <section className="flex-1 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Require</h2>
          <ul>
            <li className="mb-2">Looking for a charging cable for iPhone</li>
            <li>Seeking recommendations for lunch spots nearby</li>
          </ul>
        </section>
      </main>
      <section className="ticket-form-section">
        <h2 className="section-title">Raise a Ticket</h2>
        <TicketForm onSubmit={handleFormSubmit} />
      </section>

      <section className="ticket-list-section">
        <h2 className="section-title">Existing Tickets</h2>
        <TicketList tickets={tickets} onAccept={handleAcceptTicket} />
      </section>
    </div>
  );
}
