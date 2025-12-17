"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Briefcase, Users, Award } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/business-owner-professional-portrait.jpg"
            alt="ARCATTA GROUP Team"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">Get in Touch With Us</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Contact ARCATTA GROUP for wholesale inquiries, custom solutions, and export partnerships
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background rounded-xl p-12 border border-primary/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Meet Our Leadership</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Owner Profile */}
              <div className="lg:col-span-1 text-center">
                <div className="w-64 h-64 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-primary/20">
                  <img
                    src="/business-owner-professional-portrait.jpg"
                    alt="Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Founder & CEO</h3>
                <p className="text-lg text-primary font-semibold mb-2">RAVINDRA RANE</p>
                <p className="text-foreground/60 text-sm mb-4">20+ Years in Sustainable Products</p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground/70">📧 owner@arcatta.com</p>
                  <p className="text-foreground/70">📱 +91 9869869522</p>
                  <p className="text-foreground/70">🌍 Direct inquiries welcome</p>
                </div>
              </div>

              {/* Owner Information */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Award size={24} className="text-primary" />
                    Professional Background
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    With over 20 years of dedicated experience in sustainable packaging and natural products, our
                    founder has been at the forefront of the eco-friendly revolution. Starting from humble beginnings,
                    they have built ARCATTA GROUP into an internationally recognized supplier of premium eco-friendly
                    solutions, trusted by businesses in over 50 countries worldwide.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase size={24} className="text-primary" />
                    Areas of Expertise
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg border border-secondary/30">
                      <p className="text-foreground font-semibold">Sustainable Business</p>
                      <p className="text-sm text-foreground/60">Building eco-conscious enterprises</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-secondary/30">
                      <p className="text-foreground font-semibold">Product Innovation</p>
                      <p className="text-sm text-foreground/60">Developing sustainable solutions</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-secondary/30">
                      <p className="text-foreground font-semibold">Export Management</p>
                      <p className="text-sm text-foreground/60">Global supply chain expertise</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-secondary/30">
                      <p className="text-foreground font-semibold">Quality Standards</p>
                      <p className="text-sm text-foreground/60">ISO & international compliance</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Users size={24} className="text-primary" />
                    Vision & Mission
                  </h4>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-foreground/70 mb-3">
                      <strong>Vision:</strong> To make premium eco-friendly products accessible to businesses and
                      consumers worldwide, creating a positive environmental impact through sustainable choices.
                    </p>
                    <p className="text-foreground/70">
                      <strong>Mission:</strong> Providing 100% natural, biodegradable products that support
                      environmental sustainability while creating fair trade opportunities for local artisans and
                      farmers.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-lg">
                  <p className="text-foreground/70 text-sm">
                    ✓ ISO Certified Manufacturer • ✓ Fair Trade Practices • ✓ 50+ Countries Served • ✓ Industry Awards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-8 border border-primary/20">
              <h4 className="font-bold text-2xl text-foreground mb-4">Core Values</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Environmental Responsibility</p>
                    <p className="text-sm text-foreground/60">Every product designed with planet-first thinking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Quality Excellence</p>
                    <p className="text-sm text-foreground/60">Rigorous standards for every product</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Fair Trade Practices</p>
                    <p className="text-sm text-foreground/60">Supporting communities and artisans</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-transparent rounded-xl p-8 border border-secondary/20">
              <h4 className="font-bold text-2xl text-foreground mb-4">Why Partner With Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <p className="text-foreground/70">Direct manufacturer - No middlemen</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <p className="text-foreground/70">Competitive bulk pricing</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <p className="text-foreground/70">Custom branding solutions</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <p className="text-foreground/70">Worldwide export capability</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <p className="text-foreground/70">100% quality guaranteed</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-foreground/20 rounded-full p-4">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold">Phone</h3>
              </div>
              <p className="text-lg font-semibold mb-2">+91 9869869522</p>
              <p className="text-sm text-primary-foreground/80">Available Mon-Fri, 9AM-6PM IST</p>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary-foreground/20 rounded-full p-4">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              <p className="text-lg font-semibold mb-2">info@arcatta.com</p>
              <p className="text-sm text-secondary-foreground/80">We'll respond within 24 hours</p>
            </div>

            <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent-foreground/20 rounded-full p-4">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold">Location</h3>
              </div>
              <p className="text-lg font-semibold mb-2">India</p>
              <p className="text-sm text-accent-foreground/80">Global wholesale & export services</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-secondary/10 to-background rounded-xl p-12 border border-primary/10">
              <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
              <p className="text-foreground/70 mb-8">
                Whether you have a question or a product inquiry, feel free to reach out
              </p>

              {submitted && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg mb-6">
                  ✓ Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a subject</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="custom">Custom Branding</option>
                      <option value="export">Export Question</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "Do you offer bulk discounts?",
                  a: "Yes! We provide competitive wholesale pricing for bulk orders. Contact us directly for a customized quote based on your volume and requirements.",
                },
                {
                  q: "Can you customize products with branding?",
                  a: "Absolutely. We offer complete custom branding and packaging options for corporate and commercial clients with minimum order quantities.",
                },
                {
                  q: "What countries do you export to?",
                  a: "We export worldwide to 50+ countries. We handle all logistics, documentation, and provide export-quality packing for international shipments.",
                },
                {
                  q: "Are all products 100% biodegradable?",
                  a: "Yes, all our products are 100% natural, biodegradable, and compostable. No harmful chemicals or synthetic additives in any product.",
                },
                {
                  q: "What is the minimum order quantity?",
                  a: "MOQ varies by product category. Please contact us for specific details. We offer flexible pricing based on order volume.",
                },
                {
                  q: "Do you provide samples?",
                  a: "Yes, we provide product samples. Contact our team to request samples and discuss your specific requirements.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-secondary/30 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-foreground mb-3 text-lg">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
