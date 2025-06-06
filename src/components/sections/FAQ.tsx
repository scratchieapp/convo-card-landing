import React from 'react';

const FAQ = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left font-bold">
              <span>What if workers aren't allowed phones on site?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="px-6 pb-6">
              <p>Convo Card offers two solutions: 1) Workers can complete Convo Cards as a pre-start activity before beginning work, or 2) Supervisors can use their device to record observations with workers added to the conversation. This flexibility ensures Convo Card works in any operational environment.</p>
            </div>
          </div>
          
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left font-bold">
              <span>How does Convo Card integrate with our existing systems?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="px-6 pb-6">
              <p>With a Pro subscription, Convo Card offers direct integration with major platforms including Hammertech, SafetyCulture, Procore, Oracle Aconex, and Donesafe. Our API connections ensure observations are automatically synchronized with your existing safety management system. Don't see your platform listed? Contact us to request additional integrations.</p>
            </div>
          </div>
          
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left font-bold">
              <span>How is this different from our current safety reporting system?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="px-6 pb-6">
              <p>Unlike traditional safety reporting that's often cumbersome and punitive, Convo Card leverages gamification and rewards to make reporting engaging. The system is designed for speed and simplicity—taking seconds rather than minutes—and includes built-in recognition that motivates continued participation. Importantly, Convo Card doesn't replace your existing system; it enhances it by feeding quality observations into it.</p>
            </div>
          </div>
          
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left font-bold">
              <span>What's the pricing structure?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="px-6 pb-6">
              <p>Convo Card offers a straightforward pricing model: $5 per active worker per month with our Pro subscription. This includes full access to all features, integration capabilities, and the Scratchie rewards platform. We offer a 14-day free trial so you can experience the benefits before committing.</p>
            </div>
          </div>
          
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left font-bold">
              <span>How is Convo Card related to Scratchie?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="px-6 pb-6">
              <p>Convo Card is built on the Scratchie platform, bringing Scratchie's proven engagement and reward mechanics to hazard identification and workplace communication. When you subscribe to Convo Card, you automatically gain access to Scratchie's recognition features, allowing you to reward positive behaviors across your workplace.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;