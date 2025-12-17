import { CheckCircle, Leaf, Award, Globe } from "lucide-react"

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 to-white pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">About ARCATTA GROUP</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            A trusted manufacturer and exporter of handmade eco-friendly products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                ARCATTA GROUP is a trusted manufacturer and exporter of handmade eco-friendly products made from natural
                tree shell, coir fibre, and areca leaf. We supply premium biodegradable products globally.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our commitment to sustainability and quality craftsmanship ensures that every product meets the highest
                standards while protecting our planet.
              </p>
            </div>
            <div className="bg-secondary/20 rounded-lg p-8 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <Leaf size={80} className="text-primary mx-auto mb-4" />
                <p className="text-foreground/60">Product Image Placeholder</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-secondary/10 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose ARCATTA GROUP</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { icon: Award, title: "Handmade & 100% Natural", desc: "Crafted with care using natural materials" },
                { icon: Leaf, title: "Biodegradable Eco-Products", desc: "Sustainable solutions for the planet" },
                { icon: Globe, title: "Direct Manufacturer Pricing", desc: "Best prices for wholesale buyers" },
                { icon: CheckCircle, title: "Export-Quality Packing", desc: "Secure international shipping" },
                { icon: Award, title: "Custom Branding Available", desc: "Personalize your orders" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <item.icon className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainability",
                  desc: "Every product is 100% natural, biodegradable, and created with environmental responsibility at our core.",
                },
                {
                  title: "Quality",
                  desc: "Our handmade products undergo rigorous quality checks to ensure they meet international standards.",
                },
                {
                  title: "Integrity",
                  desc: "We believe in transparent practices and building long-term relationships with our clients worldwide.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-secondary/30 rounded-lg p-8 hover:border-primary transition-colors"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-foreground/70">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
