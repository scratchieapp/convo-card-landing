import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import ProblemStatement from './components/sections/ProblemStatement';
import Solution from './components/sections/Solution';
import Benefits from './components/sections/Benefits';
import UseCases from './components/sections/UseCases';
import Testimonials from './components/sections/Testimonials';
import Integrations from './components/sections/Integrations';
import FAQ from './components/sections/FAQ';
import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProblemStatement />
      <Solution />
      <Benefits />
      <UseCases />
      <Testimonials />
      <Integrations />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;