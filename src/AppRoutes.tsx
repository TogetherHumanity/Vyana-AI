import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import DashboardPage from './pages/DashboardPage';
import TipsPage from './pages/TipsPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/chat" replace />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="*" element={<p style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>404: Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}