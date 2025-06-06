

const Integrations = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Seamless Integration</h2>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">Convo Card works with your existing safety and management platforms, making implementation effortless.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <img src="src/assets/logos/hammertech-logo.png" alt="Hammertech" className="max-h-12" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <img src="src/assets/logos/safetyculture-logo.png" alt="SafetyCulture" className="max-h-12" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <img src="src/assets/logos/procore-logo.png" alt="Procore" className="max-h-24" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <img src="src/assets/logos/oracle-aconex-logo.png" alt="Oracle Aconex" className="max-h-12" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <img src="src/assets/logos/hsi-donesafe-logo.png" alt="Donesafe" className="max-h-12" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <a href="mailto:hello@scratchie.com?subject=Let's talk Scratchie Integration" className="text-orange-500 font-bold flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Request Integration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;