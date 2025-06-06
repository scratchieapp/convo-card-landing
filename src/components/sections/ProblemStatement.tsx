import React from 'react';

const ProblemStatement = () => {
  const problems = [
    {
      number: "01",
      title: "The Pre-Start Promise",
      description: "Taking a moment to step back and assess risks before starting work is brilliant in theory. But in practice, it's become a tick-box exercise that's lost its meaning."
    },
    {
      number: "02", 
      title: "The Documentation Dump",
      description: "Pre-printed booklets and forms end up as tick-and-flick paperwork, stuffed in \"the box\" that rarely gets checked—until something goes wrong."
    },
    {
      number: "03",
      title: "The Legal Liability", 
      description: "When incidents occur, lawyers mine these ignored observations, revealing warnings that management knew about but never addressed—creating massive liability."
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 uppercase font-national-compressed">
          GREAT IDEAS, POOR EXECUTION. UNTIL NOW.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-16 h-16 bg-carrot-lighter opacity-20 transform rotate-45 translate-x-8 -translate-y-8"></div>
              <div className="text-carrot text-4xl mb-4 font-bold">{problem.number}</div>
              <h3 className="text-xl font-bold mb-3 font-national-condensed">{problem.title}</h3>
              <p className="text-gray-700">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;