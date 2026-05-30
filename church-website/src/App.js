// App.js — Final version with ALL pages
import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Events from './pages/Events';
import Locations from './pages/Locations';
import Contact from './pages/Contact';


// High Priority (new)
import Sermons from './pages/Sermons';
import Donate from './pages/Donate';


// Medium Priority (new)
import Gallery from './pages/Gallery';

import Testimonies from './pages/Testimonies';

import ThemeController from './components/ThemeController';
import LanguageSwitcher from './components/LanguageSwitcher';
import './styles/theme.css';
import './i18n';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/events"      element={<Events />} />
        <Route path="/locations"   element={<Locations />} />
        <Route path="/contact"     element={<Contact />} />

        {/* High Priority */}
        <Route path="/sermons"     element={<Sermons />} />
        <Route path="/donate"      element={<Donate />} />

        {/* Medium Priority */}
        <Route path="/gallery"     element={<Gallery />} />
        <Route path="/testimonies" element={<Testimonies />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeController />
      <div className="App">
        <Header />
        <LanguageSwitcher />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;