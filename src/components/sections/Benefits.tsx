import React from 'react';

const Benefits = () => {
  return (
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Convo Card Changes Everything</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-500 mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Every Worker is a Safety Observer</h3>
            <p>Instead of relying solely on supervisors, every team member becomes an active participant in identifying potential issues.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-500 mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"></path>
                <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Engaging, Not Bureaucratic</h3>
            <p>Workers actually enjoy contributing when the process is simple, rewarding, and their input leads to visible improvements.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-500 mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4M12 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Immediate Notification</h3>
            <p>Critical issues reach the right people instantly, allowing for rapid response when it matters most.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-500 mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Recognition & Rewards</h3>
            <p>Built on Scratchie's proven platform, Convo Card rewards contributions and reinforces positive safety behavior.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-500 mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
            <p>Connects directly with your existing safety platforms including Hammertech, SafetyCulture, Procore, and more.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-500 mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 16V4m0 0L3 8m4-4l4 4"></path>
                <path d="M17 8v12m0 0l4-4m-4 4l-4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Flexible Usage</h3>
            <p>Whether on personal devices, as a pre-start activity, or through a supervisor's device—Convo Card works with your operational reality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;