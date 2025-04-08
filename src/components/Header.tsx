
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full backdrop-blur-md bg-white/90 z-50 border-b border-ezapply-gray/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl">
            <span className="text-ezapply-darkblue">EZ</span>
            <span className="text-ezapply-blue">Apply</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-ezapply-darkblue hover:text-ezapply-blue font-medium transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-ezapply-darkblue hover:text-ezapply-blue font-medium transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-ezapply-darkblue hover:text-ezapply-blue font-medium transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-ezapply-darkblue hover:text-ezapply-blue font-medium transition-colors">
            Contact
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-ezapply-blue text-ezapply-blue hover:bg-ezapply-blue hover:text-white">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-ezapply-blue text-white hover:bg-ezapply-darkblue animated-button">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-ezapply-darkblue" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-ezapply-gray/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 animate-fade-in">
            <Link to="/" className="text-ezapply-darkblue hover:text-ezapply-blue font-medium p-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="text-ezapply-darkblue hover:text-ezapply-blue font-medium p-2" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/about" className="text-ezapply-darkblue hover:text-ezapply-blue font-medium p-2" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="text-ezapply-darkblue hover:text-ezapply-blue font-medium p-2" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-ezapply-blue text-ezapply-blue">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full bg-ezapply-blue text-white hover:bg-ezapply-darkblue">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
