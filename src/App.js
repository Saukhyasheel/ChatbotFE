import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  const [messages, setMessages] = useState([]);
const handleNewChat = () => {
    setMessages([]); 
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh' }}>
     <Topbar />

    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
     
      <Sidebar messages={messages} onNewChat={handleNewChat} />
      <div style={{ flex: 1, overflow: 'hidden' }}>
        
        <ChatWindow messages={messages} setMessages={setMessages} />
      </div>
    </div>
    </div>
  );
}

export default App;

