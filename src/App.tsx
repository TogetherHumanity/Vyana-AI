
import React, { useState } from 'react';

const API_KEY = 'YOUR_OPENAI_API_KEY';

export default function App() {
  const [messages, setMessages] = useState([{ sender: 'system', text: 'Hi! I am Vyana, your emotional AI assistant.' }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: 'You are Vyana, a kind and emotionally aware AI built for mental health.' },
            ...messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })),
            { role: 'user', content: input }
          ]
        })
      });

      const data = await res.json();
      const aiResponse = data.choices?.[0]?.message?.content || "Sorry, I didn't catch that.";
      setMessages(prev => [...prev, { sender: 'vyana', text: aiResponse }]);
    } catch {
      setMessages(prev => [...prev, { sender: 'vyana', text: "Sorry, something went wrong." }]);
    }
  };

  return (
    <div>
      <h1>Vyana AI</h1>
      <div style={{ whiteSpace: 'pre-wrap', padding: '1rem', border: '1px solid #ccc', height: '400px', overflowY: 'scroll' }}>
        {messages.map((msg, idx) => (
          <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." style={{ width: '80%' }} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
