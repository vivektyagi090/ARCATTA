import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">ARCATTA GROUP</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Premium handmade eco-friendly products for a sustainable future.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9869869522</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@arcatta.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Coir Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Areca Leaf Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Coco Peat
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 ARCATTA GROUP. All rights reserved. | Eco-Friendly • Natural • Handmade</p>
          <p className="mt-2 text-xs text-primary-foreground/50">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/vivek-tyagi-338278157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-foreground transition-colors"
            >
              Vivek Tyagi
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
