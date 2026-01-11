import { Leaf, IndianRupee, Truck, ShieldCheck, Users, Award, Globe, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "Consistent Quality",
      desc: "Premium raw materials processed with strict quality checks.",
    },
    {
      icon: IndianRupee,
      title: "Competitive Pricing",
      desc: "Direct manufacturer access eliminates middlemen.",
    },
    {
      icon: Truck,
      title: "Reliable Supply Chain",
      desc: "Streamlined logistics for high-volume demands.",
    },
    {
      icon: ShieldCheck,
      title: "Export Experience",
      desc: "Expertise in international shipping and compliance.",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      desc: "Trained artisans with generations of expertise.",
    },
    {
      icon: Award,
      title: "Certified Quality",
      desc: "Multiple international certifications and standards.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Exporting to 20+ countries worldwide.",
    },
    {
      icon: Clock,
      title: "On-time Delivery",
      desc: "99% on-time delivery rate across all orders.",
    },
  ];

  return (
    <section className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-stone-400">
            Export-quality standards with a commitment to the planet.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 text-center hover:bg-stone-800 transition-colors"
            >
              <f.icon className="w-12 h-12 text-green-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-stone-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}