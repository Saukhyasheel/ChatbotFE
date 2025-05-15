import React, { useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';

export default function Sidebar() {
  const { sessions, currentSessionId, setCurrentSessionId, createNewSession } = useContext(ChatContext);

  return (
    <div style={{
      width: '250px',
      background: '#f5f5f5',
      borderRight: '1px solid #ddd',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <button onClick={createNewSession} style={{
        marginBottom: '1rem',
        padding: '0.5rem',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px'
      }}>
        + New Chat
      </button>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {sessions.map(session => (
          <div
            key={session.id}
            onClick={() => setCurrentSessionId(session.id)}
            style={{
              padding: '0.5rem',
              marginBottom: '0.5rem',
              background: session.id === currentSessionId ? '#e0e0e0' : 'white',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: session.id === currentSessionId ? 'bold' : 'normal'
            }}
          >
            {session.name}
          </div>
        ))}
      </div>
    </div>
  );
}
