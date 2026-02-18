import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import PhotoGallery from '@/pages/PhotoGallery';
import VideoGallery from '@/pages/VideoGallery';
import About from '@/pages/About';
import Social from '@/pages/Social';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<PhotoGallery />} />
          <Route path="/videos" element={<VideoGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/social" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
