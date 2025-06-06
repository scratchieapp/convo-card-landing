

const UseCases = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Works Across Industries</h2>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">See how Convo Card transforms workplace communication in any setting—from construction sites to restaurant kitchens.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img src="/images/industries/construction-worker.jpg" alt="Construction workers reviewing safety plans on site" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <div className="bg-orange-100 text-orange-800 text-sm font-bold uppercase py-1 px-2 rounded-full inline-block mb-2">Construction</div>
              <h3 className="text-xl font-bold mb-2">From Hazard to Fixed: Same-Day Resolution</h3>
              <p className="mb-4">A worker spots an electrical hazard on a construction site and logs it in Convo Card with photos. The supervisor receives an instant notification, dispatches an electrician, and resolves the issue before work begins—all documented in one system.</p>
              <a href="#construction-details" className="text-orange-500 font-bold">Read full case study →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img src="/images/industries/restaurant-qsr-worker.jpg" alt="Professional chefs in commercial kitchen following safety protocols" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <div className="bg-orange-100 text-orange-800 text-sm font-bold uppercase py-1 px-2 rounded-full inline-block mb-2">Quick Service Restaurant</div>
              <h3 className="text-xl font-bold mb-2">Preventing Cross-Contamination</h3>
              <p className="mb-4">A McDonald's crew member notices inconsistent allergen handling procedures and documents it in Convo Card. Management implements immediate training and updated labeling, preventing potential customer health incidents.</p>
              <a href="#qsr-details" className="text-orange-500 font-bold">Read full case study →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img src="/images/industries/logistics-worker-female.jpg" alt="Warehouse worker operating forklift with safety equipment" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <div className="bg-orange-100 text-orange-800 text-sm font-bold uppercase py-1 px-2 rounded-full inline-block mb-2">Logistics</div>
              <h3 className="text-xl font-bold mb-2">Streamlining Loading Procedures</h3>
              <p className="mb-4">Truck drivers use Convo Card to document inefficient loading bay procedures. The operations team implements their suggestions, reducing wait times by 35% and improving fleet utilization.</p>
              <a href="#logistics-details" className="text-orange-500 font-bold">Read full case study →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img src="/images/industries/mining-workers.jpg" alt="Mining workers in safety gear with heavy equipment" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <div className="bg-orange-100 text-orange-800 text-sm font-bold uppercase py-1 px-2 rounded-full inline-block mb-2">Mining</div>
              <h3 className="text-xl font-bold mb-2">Equipment Maintenance Revolution</h3>
              <p className="mb-4">Mining operators use Convo Card to document early warning signs of equipment issues. The maintenance team shifts from reactive to predictive maintenance, reducing downtime by 28% and extending equipment life.</p>
              <a href="#mining-details" className="text-orange-500 font-bold">Read full case study →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;