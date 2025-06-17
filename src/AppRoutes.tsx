import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import DashboardPage from './pages/DashboardPage';
import TipsPage from './pages/TipsPage';
export default function AppRoutes() { return (<BrowserRouter><Routes><Route path='/chat' element={<ChatPage />} /><Route path='/dashboard' element={<DashboardPage />} /><Route path='/tips' element={<TipsPage />} /></Routes></BrowserRouter>); }