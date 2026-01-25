"use client";
import React, { useState } from "react";
import { ArrowLeft, CheckCircle2, Leaf, Sprout, Factory, Sun, Package, Truck } from "lucide-react";

type LifecycleStep = {
  step: number;
  name: string;
  img: string;
  desc: string;
  icon?: React.ReactElement;
};

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "coir" | "areca" | "cashew" | null
  >(null);

  const coirLifecycle: LifecycleStep[] = [
    {
      step: 1,
      name: "Harvesting & Collection",
      img: "/coir/1000_F_1287426084_hHyu0vUKH2Sh8EKSPIzvR1KhjEYdHaSI.jpeg",
      desc: "Collecting coconut husks from sustainable farms, ensuring only mature coconuts are used for the best fiber quality.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      step: 2,
      name: "Retting",
      img: "/coir/1000_F_974668704_XsnaCzt12eiTVn1xBtFJRpx23TLXaFOX.jpeg",
      desc: "Soaking husks in freshwater for up to 6 months to naturally soften the fibers and remove impurities.",
      icon: <Sprout className="w-6 h-6" />,
    },
    {
      step: 3,
      name: "Decortication",
      img: "/coir/1000_F_1851449195_XNHs0C2AqdgUU7eHQxnMpiXxZ3A52kjA.jpeg",
      desc: "Mechanically extracting the golden fibers from the retted husks, separating the pith from the fiber.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      step: 4,
      name: "Drying",
      img: "/coir/1000_F_1032473904_dC3gpmIKWXTHPM5vJUPjn2g0YDtJdC05.jpeg",
      desc: "Sun-drying the extracted fibers in open fields to reduce moisture content and strengthen the strands.",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      step: 5,
      name: "Baling & Grading",
      img: "/coir/download.jpg",
      desc: "Cleaning, grading by length/color, and hydraulically compressing fibers into 120kg bales for transport.",
      icon: <Package className="w-6 h-6" />,
    },
    {
      step: 6,
      name: "Finished Product",
      img: "/coir/all.png",
      desc: "The eco-friendly fiber is now ready for export and manufacturing into mats, geotextiles, and more.",
      icon: <Truck className="w-6 h-6" />,
    },
  ];

  const arecaLifecycle: LifecycleStep[] = [
    {
      step: 1,
      name: "Leaf Collection",
      img: "/areca/p1.jpg", 
      desc: "Gathering naturally fallen areca palm leaves from the plantation floor. No trees are cut.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      step: 2,
      name: "Washing & Cleaning",
      img: "/areca/p01.jpg", 
      desc: "High-pressure water cleaning to remove dust and sand, followed by a fresh water soak.",
      icon: <Sprout className="w-6 h-6" />,
    },
    {
      step: 3,
      name: "Heat Pressing",
      img: "/areca/p2.jpg",
      desc: "The leaves are heat-pressed at high temperatures into various shapes using distinct iron molds.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      step: 4,
      name: "Cutting & Trimming",
      img: "/areca/p3.jpg",
      desc: "Precision cutting removes excess leaf material, ensuring smooth edges and uniform shapes.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      step: 5,
      name: "Sterilization",
      img: "/areca/p4.jpg",
      desc: "UV treatment and quality checks ensure every plate is hygienic, safe, and defect-free.",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      step: 6,
      name: "Final Product",
      img: "/areca/Gemini_Generated_Image_4yedmu4yedmu4yed.png",
      desc: "100% biodegradable and compostable tableware, ready to serve as a sustainable alternative to plastic.",
      icon: <Package className="w-6 h-6" />,
    },
  ];

  const cashewLifecycle: LifecycleStep[] = [
    {
      step: 1,
      name: "Raw Nut Sourcing",
      img: "/casu/image005.jpg", 
      desc: "Sourcing premium raw cashew nuts directly from farmers during the harvest season.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      step: 2,
      name: "Roasting & Steaming",
      img: "/casu/image009.jpg",
      desc: "Steam processing the raw nuts to soften the tough outer shell for easier removal.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      step: 3,
      name: "Shelling",
      img: "/casu/image013.jpg",
      desc: "Careful removal of the outer shell using specialized blades to keep the kernel intact.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      step: 4,
      name: "Peeling",
      img: "/casu/image017.jpg",
      desc: "Drying the kernels to loosen the testa (skin), which is then gently peeled off.",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      step: 5,
      name: "Grading",
      img: "/casu/image023.jpg",
      desc: "Sorting kernels by size, color, and wholeness (W180, W240, W320) to meet international standards.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      step: 6,
      name: "Packing & Export",
      img: "/casu/bowl-with-cashew-wooden-table_92534-382.jpeg",
      desc: "Vacuum packing with nitrogen flushing to retain freshness, crunch, and flavor for global export.",
      icon: <Truck className="w-6 h-6" />,
    },
  ];

  const getCurrentLifecycle = () => {
    switch (activeCategory) {
      case "coir":
        return { title: "Coir Production Processing", data: coirLifecycle, desc: "From coconut husk to finished fiber." };
      case "areca":
        return { title: "Areca Leaf Manufacturing", data: arecaLifecycle, desc: "Sustainable tableware from fallen leaves." };
      case "cashew":
        return { title: "Cashew Processing", data: cashewLifecycle, desc: "Farm to table premium cashew nuts." };
      default:
        return null;
    }
  };

  const currentData = getCurrentLifecycle();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white relative">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our Sustainable Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our range of eco-friendly solutions, from premium natural
          fibers to biodegradable tableware, crafted for a greener tomorrow.
        </p>
      </div>

      {/* TOP ROW: 3 Equal Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* COIR */}
        <div
          onClick={() => setActiveCategory(activeCategory === "coir" ? null : "coir")}
          className={`relative group h-[450px] overflow-hidden rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
            activeCategory === "coir"
              ? "ring-4 ring-primary ring-offset-2 scale-[1.02]"
              : "hover:shadow-xl"
          }`}
        >
          <img
            src="/coir/all.png"
            alt="Coir"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">
              Coir Products
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Premium grade industrial & garden fibers.
              <br />
              <span className={`text-primary font-bold text-xs mt-2 inline-flex items-center gap-1 uppercase tracking-wider underline ${activeCategory === "coir" ? "text-white" : ""}`}>
                {activeCategory === "coir" ? "Viewing Process" : "View Process Cycle"}
                {activeCategory === "coir" && <CheckCircle2 size={14} className="text-green-400" />}
              </span>
            </p>
            <div className={`w-10 h-1 rounded-full transition-colors ${activeCategory === "coir" ? "bg-white" : "bg-primary"}`}></div>
          </div>
        </div>

        {/* ARECA LEAF */}
        <div
          onClick={() => setActiveCategory(activeCategory === "areca" ? null : "areca")}
          className={`relative group h-[450px] overflow-hidden rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
            activeCategory === "areca"
              ? "ring-4 ring-primary ring-offset-2 scale-[1.02]"
              : "hover:shadow-xl"
          }`}
        >
          <img
            src="/areca/Gemini_Generated_Image_4yedmu4yedmu4yed.png"
            alt="Areca"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">
              Areca Leaf Products
            </h3>
            <p className="text-white/80 text-sm mb-4">
              100% compostable plates and bowls.
              <br />
              <span className={`text-primary font-bold text-xs mt-2 inline-flex items-center gap-1 uppercase tracking-wider underline ${activeCategory === "areca" ? "text-white" : ""}`}>
                {activeCategory === "areca" ? "Viewing Process" : "View Process Cycle"}
                {activeCategory === "areca" && <CheckCircle2 size={14} className="text-green-400" />}
              </span>
            </p>
            <div className={`w-10 h-1 rounded-full transition-colors ${activeCategory === "areca" ? "bg-white" : "bg-primary"}`}></div>
          </div>
        </div>

        {/* CASHEW */}
        <div
          onClick={() => setActiveCategory(activeCategory === "cashew" ? null : "cashew")}
          className={`relative group h-[450px] overflow-hidden rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
            activeCategory === "cashew"
              ? "ring-4 ring-primary ring-offset-2 scale-[1.02]"
              : "hover:shadow-xl"
          }`}
        >
          <img
            src="/casu/bowl-with-cashew-wooden-table_92534-382.jpeg"
            alt="Cashew"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">
              Premium Cashews
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Export-quality organic cashew nuts.
              <br />
              <span className={`text-primary font-bold text-xs mt-2 inline-flex items-center gap-1 uppercase tracking-wider underline ${activeCategory === "cashew" ? "text-white" : ""}`}>
                {activeCategory === "cashew" ? "Viewing Process" : "View Process Cycle"}
                {activeCategory === "cashew" && <CheckCircle2 size={14} className="text-green-400" />}
              </span>
            </p>
            <div className={`w-10 h-1 rounded-full transition-colors ${activeCategory === "cashew" ? "bg-white" : "bg-primary"}`}></div>
          </div>
        </div>
      </div>

      {/* DYNAMIC LIFECYCLE TIMELINE VIEW */}
      {currentData && (
        <div id="lifecycle-view" className="bg-gray-50 rounded-2xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 shadow-inner scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">Process Flow</span>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1 mb-2">
                {currentData.title}
              </h4>
              <p className="text-gray-600 max-w-xl mx-auto text-sm">
                {currentData.desc}
              </p>
              <button
                onClick={() => setActiveCategory(null)}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all text-sm font-medium text-gray-700 hover:text-primary"
              >
                <ArrowLeft size={14} />
                Close View
              </button>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-4 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:translate-x-0 hidden md:block"></div>
              {/* Mobile Line */}
              <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-gray-200 md:hidden"></div>

              <div className="space-y-6">
                {currentData.data.map((step, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between group ${
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Side */}
                    <div className="w-full md:w-[45%] pl-10 md:pl-0">
                      <div className={`bg-white p-4 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-500 transform group-hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards`} style={{ animationDelay: `${idx * 100}ms` }}>
                         <div className="h-32 rounded-lg overflow-hidden mb-3 relative">
                            <img src={step.img} alt={step.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                                Step 0{step.step}
                            </div>
                         </div>
                         <h5 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                            {step.icon && <span className="text-primary">{React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}</span>}
                            {step.name}
                         </h5>
                         <p className="text-gray-500 text-xs leading-relaxed">
                            {step.desc}
                         </p>
                      </div>
                    </div>

                    {/* Center Marker */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white border-[3px] border-primary shadow-md z-10 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        </div>
                    </div>

                    {/* Empty Side (Desktop only) */}
                    <div className="hidden md:block w-[45%]"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom Close Button */}
             <div className="mt-8 text-center">
                <button
                    onClick={() => setActiveCategory(null)}
                    className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg text-sm font-medium"
                >
                    Back to All Categories
                </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
