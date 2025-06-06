

const Header = () => {
  return (
    <header className="hero-gradient text-white">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="logo">
          <div className="text-2xl font-bold font-national-compressed">
            CONVO CARD
          </div>
        </div>
        <div className="nav-links hidden md:flex space-x-6">
          <a href="#features" className="text-white hover:text-scratchie-yellow font-medium transition-colors">Features</a>
          <a href="#use-cases" className="text-white hover:text-scratchie-yellow font-medium transition-colors">Use Cases</a>
          <a href="#pricing" className="text-white hover:text-scratchie-yellow font-medium transition-colors">Pricing</a>
          <a href="#integrations" className="text-white hover:text-scratchie-yellow font-medium transition-colors">Integrations</a>
          <a href="#contact" className="bg-white text-carrot px-4 py-2 rounded-full font-bold hover:bg-gray-50 transition-colors">Contact Us</a>
        </div>
        <div className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;