<div id="signup-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
    <div class="bg-white rounded-lg max-w-md w-full p-8">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold">Start Your Free Trial</h3>
            <button id="close-modal" class="text-gray-500 hover:text-gray-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        
        <form>
            <div class="mb-4">
                <label for="name" class="block text-gray-700 mb-2">Full Name</label>
                <input type="text" id="name" class="w-full p-3 border border-gray-300 rounded-lg" required>
            </div>
            
            <div class="mb-4">
                <label for="email" class="block text-gray-700 mb-2">Work Email</label>
                <input type="email" id="email" class="w-full p-3 border border-gray-300 rounded-lg" required>
            </div>
            
            <div class="mb-4">
                <label for="company" class="block text-gray-700 mb-2">Company Name</label>
                <input type="text" id="company" class="w-full p-3 border border-gray-300 rounded-lg" required>
            </div>
            
            <div class="mb-4">
                <label for="industry" class="block text-gray-700 mb-2">Industry</label>
                <select id="industry" class="w-full p-3 border border-gray-300 rounded-lg" required>
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
            
            <div class="mb-6">
                <label for="workers" class="block text-gray-700 mb-2">Number of Workers</label>
                <select id="workers" class="w-full p-3 border border-gray-300 rounded-lg" required>
                    <option value="">Select team size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                </select>
            </div>
            
            <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">Start Free Trial</button>
            
            <p class="text-sm text-gray-600 mt-4 text-center">By signing up, you agree to our <a href="#terms" class="text-orange-500">Terms of Service</a> and <a href="#privacy" class="text-orange-500">Privacy Policy</a>.</p>
        </form>
    </div>
</div>