import React from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ChatWindow />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
