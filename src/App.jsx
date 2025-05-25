import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Services />
        <Projects />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
