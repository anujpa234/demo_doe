import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Stats from './components/Stats';
import About from './components/About';
import EventOverview from './components/EventOverview';
import Speakers from './components/Speakers';
import News from './components/News';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EBF4F3] font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <Stats />
        <About />
        <EventOverview />
        <Speakers />
        <News />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;