import { Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from './pages/ChatPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chat" replace />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}