import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Sidebar messages={messages} />
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <ChatWindow messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}

export default App;

