import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center">Welcome to Vyana AI</h1>
      <p className="text-center mt-4 text-gray-600">Your emotionally intelligent AI assistant UI has loaded successfully.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);