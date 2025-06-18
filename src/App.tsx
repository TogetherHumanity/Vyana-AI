import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([{ sender: 'system', text: 'Hi! I am Vyana, your emotional AI assistant.' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: input }]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I couldn’t understand that.';
    setMessages([...newMessages, { sender: 'vyana', text: reply }]);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Vyana AI</h1>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '1rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx}><strong>{msg.sender}:</strong> {msg.text}</div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." style={{ width: '80%' }} />
      <button onClick={sendMessage} style={{ marginLeft: '1rem' }}>Send</button>
    </div>
  );
}

export default App;