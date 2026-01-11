import React from 'react';

const benefits = [
  {
    title: "Packaging Made From Plants",
    description: "Designed for the circular economy where resources are reused and not wasted.",
    icon: "https://www.biopak.com/media/icons/benefits-plant-made.svg"
  },
  {
    title: "Certified Compostable",
    description: "We champion composting as the best recycling solution for food packaging.",
    icon: "https://www.biopak.com/media/icons/benefits-compostable.svg"
  },
  {
    title: "Eco Certified",
    description: "We give back to people and planet, so your purchases directly affect positive change.",
    icon: "https://www.biopak.com/media/icons/benefits-bcorp.svg"
  },
  {
    title: "Emissions Reduction",
    description: "We have a roadmap in place to reduce our carbon emissions in our supply chain.",
    icon: "https://www.biopak.com/media/wysiwyg/carbon-reduction.png"
  }
];

const Benefits = () => {
  return (
    <section className="bg-gray-50 py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Icon Container */}
              <div className="mb-6 h-20 w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;