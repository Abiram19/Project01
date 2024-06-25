import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Main />
      
      <Footer />
    </div>
  );
}

export default App;
