import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [sessions, setSessions] = useState([
    { id: Date.now(), name: 'New Chat', messages: [] }
  ]);
  const [currentSessionId, setCurrentSessionId] = useState(sessions[0].id);

  const createNewSession = () => {
    const newSession = {
      id: Date.now(),
      name: `Chat ${sessions.length + 1}`,
      messages: []
    };
    setSessions(prev => [...prev, newSession]);
    setCurrentSessionId(newSession.id);
  };

  const addMessage = (sessionId, message) => {
    setSessions(prev =>
      prev.map(session =>
        session.id === sessionId
          ? { ...session, messages: [...session.messages, message] }
          : session
      )
    );
  };

  const getCurrentMessages = () =>
    sessions.find(s => s.id === currentSessionId)?.messages || [];

  return (
    <ChatContext.Provider value={{
      sessions,
      currentSessionId,
      createNewSession,
      setCurrentSessionId,
      addMessage,
      getCurrentMessages
    }}>
      {children}
    </ChatContext.Provider>
  );
};
