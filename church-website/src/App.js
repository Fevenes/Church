import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Events from './pages/Events';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/theme.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/events" element={<Events />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;