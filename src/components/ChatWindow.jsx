import React, { useState } from 'react';
import axios from 'axios';
export default function ChatWindow({ messages, setMessages }) {

// export default function ChatWindow() {
  // const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://chatbot1-z1sx.onrender.com/generate',
        
        { prompt: input },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Your backend returns: { "response": "The reply here" }
      const botReply = response?.data?.response || 'No response received';
      const botMsg = { sender: 'bot', text: botReply };
      setMessages((prev) => [...prev, botMsg]);

    } catch (error) {
      console.error("API error:", error);
      const errorMsg = { sender: 'bot', text: '⚠️ Error: Unable to fetch response.' };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '1250px', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div style={{ height: '550px', overflowY: 'auto', marginBottom: '1rem', backgroundColor: '#f9f9f9', padding: '1rem' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              marginBottom: '0.5rem',
            }}
          >
            <span
              style={{
                background: msg.sender === 'user' ? '#d1e7ff' : '#e4e4e4',
                padding: '0.5rem 1rem',
                borderRadius: '1rem',
                display: 'inline-block',
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {loading && (
          <div style={{ textAlign: 'left', marginBottom: '0.5rem', color: '#888' }}>
            <em>Bot is typing...</em>
          </div>
        )}
      </div>

      <div style={{ display: 'flex' }}>
        <input
          style={{ flex: 1, padding: '0.5rem', borderRadius: '4px 0 0 4px', border: '1px solid #ccc' }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          style={{ padding: '0.5rem 1rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '0 4px 4px 0' }}
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
