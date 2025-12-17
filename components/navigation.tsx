"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">ARCATTA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Download Brochure
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-foreground hover:bg-secondary/20 rounded-lg">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-foreground hover:bg-secondary/20 rounded-lg">
              About Us
            </Link>
            <Link href="/products" className="block px-4 py-2 text-foreground hover:bg-secondary/20 rounded-lg">
              Products
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-secondary/20 rounded-lg">
              Contact
            </Link>
            <button className="w-full mt-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Download Brochure
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
