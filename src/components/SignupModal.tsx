import React from 'react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Start Your Free Trial</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Work Email</label>
            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
            <input type="text" id="company" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="industry" className="block text-gray-700 mb-2">Industry</label>
            <select id="industry" className="w-full p-3 border border-gray-300 rounded-lg" required>
              <option value="">Select your industry</option>
              <option value="construction">Construction</option>
              <option value="hospitality">Hospitality & QSR</option>
              <option value="logistics">Logistics & Transportation</option>
              <option value="mining">Mining</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="workers" className="block text-gray-700 mb-2">Number of Workers</label>
            <select id="workers" className="w-full p-3 border border-gray-300 rounded-lg" required>
              <option value="">Select team size</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
          </div>
          
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">Start Free Trial</button>
          
          <p className="text-sm text-gray-600 mt-4 text-center">By signing up, you agree to our <a href="#terms" className="text-orange-500">Terms of Service</a> and <a href="#privacy" className="text-orange-500">Privacy Policy</a>.</p>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;