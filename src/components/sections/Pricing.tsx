import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">Start with our 14-day free trial, then choose the plan that works for you.</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:w-1/2">
            <div className="bg-orange-500 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold">$5<span className="text-lg font-normal">/user/month</span></div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Convo Cards</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full Scratchie rewards platform</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Integration with safety platforms</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom branding options</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <a href="#signup" className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">Start Free Trial</a>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg shadow-lg overflow-hidden md:w-1/2">
            <div className="bg-orange-600 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold">Custom<span className="text-lg font-normal"> pricing</span></div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Customized implementation</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom integration development</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Volume discounts</span>
                </li>
                <li className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 mr-2 mt-1">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 premium support</span>
                </li>
              </ul>
              <a href="#contact-sales" className="block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full">Contact Sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;