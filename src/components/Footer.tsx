
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-heading text-gradient font-bold text-2xl">
                EZ<span className="text-ezapply-red">Apply</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Helping you apply to universities in the USA and UK with ease. Your journey to study abroad starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                University Application
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Document Upload
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Visa Process
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Profile Creation
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Fee Payment Guidance
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:ezapply.info@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  ezapply.info@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <a href="https://wa.me/9779840610844" className="text-muted-foreground hover:text-primary transition-colors">
                  +977 984 061 0844 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center space-x-3 mt-4">
                <a href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="mailto:ezapply.info@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} EZApply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
