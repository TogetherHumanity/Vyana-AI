import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage, { sender: 'ai', text: 'This is a placeholder response from Vyana.' }]);
    setInput('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '10px 0' }}>
            <span style={{ padding: '10px', background: msg.sender === 'user' ? '#cce5ff' : '#e2e3e5', borderRadius: '10px', display: 'inline-block' }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', padding: '10px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} style={{ flexGrow: 1, padding: '10px' }} />
        <button onClick={sendMessage} style={{ marginLeft: '10px', padding: '10px 20px' }}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;
