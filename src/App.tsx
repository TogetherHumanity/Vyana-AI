import React from 'react';
import ChatInterface from './components/ChatInterface';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '250px', background: '#1e1e1e', color: 'white', padding: '20px' }}>
        <h2>Vyana</h2>
        <nav>
          <ul>
            <li>Chat</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main style={{ flexGrow: 1, background: '#f3f3f3' }}>
        <ChatInterface />
      </main>
    </div>
  );
};

export default App;
