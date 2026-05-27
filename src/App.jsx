import { Routes, Route } from 'react-router-dom';
import { ToastProvider } from './components/Toast.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';
import Home from './pages/Home/index.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

export default function App() {
  return (
    <ToastProvider>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </ToastProvider>
  );
}
