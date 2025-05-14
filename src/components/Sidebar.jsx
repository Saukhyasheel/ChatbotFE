import React from 'react';

export default function Sidebar({ messages }) {
  const userMessages = messages.filter(msg => msg.sender === 'user');

  return (
    <div style={{
      width: '250px',
      backgroundColor: '#f1f1f1',
      padding: '1rem',
      borderRight: '1px solid #ccc',
      height: '100vh',
      boxSizing: 'border-box'
    }}>
      <h2>Chat History</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {userMessages.map((msg, idx) => (
          <li key={idx} style={{ padding: '0.5rem 0', borderBottom: '1px solid #ddd' }}>
            {msg.text.length > 30 ? msg.text.slice(0, 30) + '...' : msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
