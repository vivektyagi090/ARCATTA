"use client";

import { useState } from "react";
import { Factory, Clock } from "lucide-react";

type ManufacturedProps = {
  productId: number;
};

export default function Manufactured({ productId }: ManufacturedProps) {
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const manufacturedData = [
    {
      id: 1,
      name: "Coir Product",
      manufacturingProcess: {
        timeline:
          "Complete process takes 6-12 months from husk to finished product",
        steps: [
          {
            title: "Raw Material Collection",
            description:
              "Fresh coconut husks are collected from local farms and processing units",
            image:
              "https://images.unsplash.com/photo-1629203851126-df0f2f43cbe5?q=80&w=2070&auto=format&fit=crop",
            duration: "2-3 days",
          },
          {
            title: "Retting Process",
            description:
              "Husks are soaked in water for natural fermentation to soften fibers",
            image:
              "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop",
            duration: "6-12 months",
          },
          {
            title: "Fiber Extraction",
            description:
              "Mechanical defibering separates coir fibers from the husk",
            image:
              "https://images.unsplash.com/photo-1589923186741-b7d59d6b2c4e?q=80&w=2070&auto=format&fit=crop",
            duration: "1-2 hours",
          },
          {
            title: "Spinning & Weaving",
            description:
              "Fibers are spun into yarn and woven into various products",
            image:
              "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2072&auto=format&fit=crop",
            duration: "3-5 hours",
          },
          {
            title: "Finishing & Quality Check",
            description:
              "Products are finished, trimmed, and undergo quality inspection",
            image:
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
            duration: "2-3 hours",
          },
        ],
      },
    },
    {
      id: 2,
      name: "Areca Leaf Plate",
      manufacturingProcess: {
        timeline:
          "Complete process takes 4-6 hours from leaf to finished product",
        steps: [
          {
            title: "Leaf Collection",
            description: "Fallen areca palm leaves are collected daily",
            image:
              "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop",
            duration: "Daily",
          },
          {
            title: "Cleaning & Washing",
            description: "Leaves are thoroughly washed and sanitized",
            image:
              "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop",
            duration: "2-3 hours",
          },
          {
            title: "Heat Pressing",
            description: "Pressed into molds using hydraulic heat press",
            image:
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
            duration: "5-10 minutes",
          },
          {
            title: "UV Sterilization",
            description: "Final UV treatment for hygiene",
            image:
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
            duration: "30 minutes",
          },
        ],
      },
    },
    {
      id: 3,
      name: "Cashew Products",
      manufacturingProcess: {
        timeline:
          "Complete process takes 7-10 days from harvest to packaging",
        steps: [
          {
            title: "Harvesting",
            description: "Cashew apples with nuts are harvested by hand",
            image:
              "https://images.unsplash.com/photo-1629203851126-df0f2f43cbe5?q=80&w=2070&auto=format&fit=crop",
            duration: "Seasonal (Feb-May)",
          },
          {
            title: "Drying & Storage",
            description: "Raw nuts are sun-dried and stored properly",
            image:
              "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop",
            duration: "3-7 days",
          },
          {
          title: "Steam Roasting",
          description: "Nuts are steamed to soften the shell",
          image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop",
          duration: "20-30 minutes"
        },
        {
          title: "Shelling & Peeling",
          description: "Manual shell removal and skin peeling",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
          duration: "Skilled labor process"
        },
        {
          title: "Grading & Packaging",
          description: "Kernels graded by size and quality, then vacuum packed",
          image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2072&auto=format&fit=crop",
          duration: "2-3 hours"
        }
        ],
        
      },
    },
  ];

  const activeProduct = manufacturedData.find((p) => p.id === productId);
  if (!activeProduct) return null;

  const currentStep =
    activeProduct.manufacturingProcess.steps[activeProcessStep];

  return (
    <div className="mb-20 bg-white rounded-3xl p-8 border shadow-lg">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Factory className="text-green-600" />
        {activeProduct.name} – Manufacturing Process
      </h3>

      <div className="flex items-center gap-2 text-stone-600 mb-6">
        <Clock size={16} />
        <span className="text-sm font-medium">
          {activeProduct.manufacturingProcess.timeline}
        </span>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-5 gap-4 mb-8">
        {activeProduct.manufacturingProcess.steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setActiveProcessStep(index)}
            className={`cursor-pointer transition-all ${
              activeProcessStep === index
                ? "ring-2 ring-green-500"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <div className="aspect-video rounded-xl overflow-hidden mb-2">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-sm font-semibold">{step.title}</h4>
            <p className="text-xs text-stone-500">{step.duration}</p>
          </div>
        ))}
      </div>

      {/* Active Step */}
      <div className="bg-stone-50 rounded-2xl p-6">
        <h4 className="text-lg font-bold mb-2">
          Step {activeProcessStep + 1}:{" "}
          {activeProduct.manufacturingProcess.steps[activeProcessStep].title}
        </h4>
        <p className="text-stone-600">
          {
            activeProduct.manufacturingProcess.steps[activeProcessStep]
              .description
          }
        </p>
      </div>
    </div>
  );
}
