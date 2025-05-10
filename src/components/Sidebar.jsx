import React from 'react';

export default function Sidebar({ messages, onNewChat }) {
  const userMessages = messages.filter(msg => msg.sender === 'user');

  return (
    <div style={{
      width: '250px',
      backgroundColor: '#f1f1f1',
      padding: '1rem',
      borderRight: '1px solid #ccc',
      height: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* New Chat Button */}
      <button
        onClick={onNewChat}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginBottom: '1rem',
          cursor: 'pointer'
        }}
      >
        + New Chat
      </button>

      <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Chat History</h2>

      <ul style={{ listStyle: 'none', padding: 0, overflowY: 'auto', flex: 1 }}>
        {userMessages.map((msg, idx) => (
          <li key={idx} style={{
            padding: '0.5rem 0',
            borderBottom: '1px solid #ddd',
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}>
            {msg.text.length > 30 ? msg.text.slice(0, 30) + '...' : msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
