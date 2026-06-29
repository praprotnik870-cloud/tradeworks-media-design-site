import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackBar from './components/BackBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import type { PageView } from './types';

export default function App() {
  // In-app navigation history so "Back" returns to the exact previous page.
  const [history, setHistory] = useState<PageView[]>(['home']);
  const view = history[history.length - 1];
  const canGoBack = history.length > 1;

  const navigate = useCallback((to: PageView) => {
    setHistory((h) => (h[h.length - 1] === to ? h : [...h, to]));
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
  }, []);

  const goBack = useCallback(() => {
    setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
  }, []);

  // Keep the document title in sync with the active page.
  useEffect(() => {
    const titles: Record<PageView, string> = {
      home: 'TradeWorks Media & Design | Ads, Leads & Booked Appointments',
      about: 'About | TradeWorks Media & Design',
      services: 'Services | TradeWorks Media & Design',
      reviews: 'Reviews | TradeWorks Media & Design',
      contact: 'Contact | TradeWorks Media & Design',
    };
    document.title = titles[view];
  }, [view]);

  const renderPage = () => {
    switch (view) {
      case 'about':
        return <About navigate={navigate} />;
      case 'services':
        return <Services navigate={navigate} />;
      case 'reviews':
        return <Reviews navigate={navigate} />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-mesh">
      <Header currentView={view} navigate={navigate} />
      <main key={view} className="flex-grow animate-fadeup pt-[72px] md:pt-[84px]">
        {view !== 'home' && (
          <BackBar onBack={goBack} canGoBack={canGoBack} navigate={navigate} />
        )}
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <ScrollToTop />
    </div>
  );
}
