

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="convocard-logo-white.svg" alt="Convo Card Logo" className="h-10 mb-4" />
            <p className="mb-4">Transforming workplace communication through engagement, rewards, and action.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-300">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.68 0H1.32C0.6 0 0 0.6 0 1.32v21.36C0 23.4 0.6 24 1.32 24h11.52v-9.28H9.68v-3.68h3.16V8.36c0-3.12 1.92-4.8 4.68-4.8 1.32 0 2.46 0.1 2.8 0.14v3.24h-1.92c-1.5 0-1.8 0.72-1.8 1.76v2.32h3.6l-0.48 3.68h-3.12V24h6.08c0.72 0 1.32-0.6 1.32-1.32V1.32C24 0.6 23.4 0 22.68 0z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-orange-300">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.56 8.34c.18.41.26.85.26 1.3 0 4.48-3.41 8.14-7.62 8.14a7.6 7.6 0 01-4.1-1.2c.21.02.42.03.64.03a5.4 5.4 0 003.37-1.16 2.7 2.7 0 01-2.52-1.87c.17.03.34.05.51.05.24 0 .48-.03.7-.1a2.7 2.7 0 01-2.16-2.64v-.03c.36.2.78.32 1.22.33a2.7 2.7 0 01-.83-3.6 7.67 7.67 0 005.57 2.82c-.04-.2-.06-.4-.06-.61a2.7 2.7 0 014.67-1.84c.53-.1 1.03-.3 1.48-.56a2.7 2.7 0 01-1.18 1.49c.47-.06.92-.19 1.34-.38-.32.47-.72.88-1.19 1.21z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-orange-300">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.67 0H1.33A1.33 1.33 0 000 1.33v21.34C0 23.4.6 24 1.33 24h21.34c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0zM7.12 20.45H3.5V9.01h3.62v11.44zm-1.8-13.01a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm15.5 13H17.2v-5.56c0-1.33-.02-3.07-1.86-3.07-1.87 0-2.15 1.47-2.15 2.97v5.66H9.57V9.01h3.48v1.6h.05a3.8 3.8 0 013.4-1.87c3.66 0 4.32 2.4 4.32 5.53v6.18z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-orange-300">Features</a></li>
              <li><a href="#use-cases" className="hover:text-orange-300">Use Cases</a></li>
              <li><a href="#pricing" className="hover:text-orange-300">Pricing</a></li>
              <li><a href="#about" className="hover:text-orange-300">About</a></li>
              <li><a href="#blog" className="hover:text-orange-300">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#help-center" className="hover:text-orange-300">Help Center</a></li>
              <li><a href="#documentation" className="hover:text-orange-300">Documentation</a></li>
              <li><a href="#integrations" className="hover:text-orange-300">Integrations</a></li>
              <li><a href="#api" className="hover:text-orange-300">API</a></li>
              <li><a href="#support" className="hover:text-orange-300">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Sydney, Australia</span>
              </li>
              <li className="flex items-start">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 mt-1">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                <span>+61 2 123 4567</span>
              </li>
              <li className="flex items-start">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 mt-1">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>hello@convocard.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p>© 2025 Convo Card. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-orange-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-orange-300">Terms of Service</a>
            <a href="#cookies" className="hover:text-orange-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;