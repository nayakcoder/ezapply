
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-ezapply-blue font-bold text-2xl">
                EZ<span className="text-ezapply-red">Apply</span>
              </span>
            </Link>
            <p className="text-gray-600 max-w-xs">
              Helping you apply to universities in the USA and UK with ease. Your journey to study abroad starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-ezapply-blue transition-colors cursor-pointer">
                University Application
              </li>
              <li className="text-gray-600 hover:text-ezapply-blue transition-colors cursor-pointer">
                Document Upload
              </li>
              <li className="text-gray-600 hover:text-ezapply-blue transition-colors cursor-pointer">
                Visa Process
              </li>
              <li className="text-gray-600 hover:text-ezapply-blue transition-colors cursor-pointer">
                Profile Creation
              </li>
              <li className="text-gray-600 hover:text-ezapply-blue transition-colors cursor-pointer">
                Fee Payment Guidance
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-ezapply-blue mt-1 flex-shrink-0" />
                <a href="mailto:ezapply.info@gmail.com" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  ezapply.info@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-ezapply-blue mt-1 flex-shrink-0" />
                <a href="https://wa.me/9779840610844" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  +977 984 061 0844 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center space-x-3 mt-4">
                <a href="https://facebook.com" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="mailto:ezapply.info@gmail.com" className="text-gray-600 hover:text-ezapply-blue transition-colors">
                  <Mail size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EZApply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
