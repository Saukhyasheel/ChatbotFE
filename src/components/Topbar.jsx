import React from 'react';

export default function Topbar() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#007bff',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.25rem',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="images/pngegg.png" alt="Logo" style={{ height: '30px' }} />
        <span>Saukhya's Assistant</span>
      </div>

      {/* Optional Right section */}
      <div>
        {/* Placeholder for buttons, profile icon, etc. */}
      </div>
    </div>
  );
}
