import React from 'react';

const Hero = () => {
  return (
    <section className="hero-gradient text-white section-padding">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-6 font-national-compressed leading-tight">
            TURN WORKPLACE CONVERSATIONS INTO ACTIONABLE INSIGHTS
          </h1>
          <p className="text-xl mb-8 font-national-condensed opacity-90">
            Stop letting critical workplace observations fall through the cracks. Convo Card transforms "things we should talk about" into actions that create safer, more effective workplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#signup" 
              className="bg-white text-carrot px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors text-center"
            >
              Start Free Trial
            </a>
            <a 
              href="#demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-carrot transition-colors text-center"
            >
              Watch Demo
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative animate-float">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-scratchie-yellow opacity-30 rounded-full"></div>
            <div className="bg-white rounded-lg shadow-2xl p-8 relative z-10">
              <div className="h-64 bg-gradient-to-br from-carrot to-carrot-light rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Convo Card Demo
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-scratchie-blue opacity-40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;