import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Coir Products",
    description: "Natural coir rope, mats, and natural fibres",
    link: "/products",
    image: "/coir/all.png",
  },
  {
    title: "Areca Leaf Products",
    description: "Eco-friendly plates, bowls, and containers",
    link: "/products",
    image: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
  },
  {
    title: "Cashew",
    description:
      "High-quality raw and processed cashew nuts straight from the farm.",
    link: "/products",
    image: "/casu/bowl-with-cashew-wooden-table_92534-382.jpeg",
  },
];

const ServiceBenefits = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Our Product Categories
        </h2>
        <p className="text-xl text-foreground/70">
          Handcrafted, natural, and 100% biodegradable solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col space-y-4 group">
            {/* Image Container */}
            <Link
              href={service.link}
              className="block overflow-hidden rounded-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            {/* Text Content */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-block text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-0.5"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>

      
    </section>

    
  );
};

export default ServiceBenefits;
