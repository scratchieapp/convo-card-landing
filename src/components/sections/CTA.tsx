

const CTA = () => {
  return (
    <section className="bg-orange-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Workplace Communication?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of workers across Australia who are making their workplaces safer, more efficient, and more engaging with Convo Card.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#signup" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg">Start Your Free Trial</a>
          <a href="#demo" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg">Request Demo</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;