import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AnimatedImage from './components/AnimatedImage';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">

        <Header />

        {/* Define routes for the main content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <AnimatedImage />
                <Introduction />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/project/:name" element={<ProjectDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
