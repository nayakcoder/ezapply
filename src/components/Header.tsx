
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
    <header className="fixed w-full backdrop-blur-md bg-background/80 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-gradient font-bold text-2xl">EZ<span className="text-ezapply-red">Apply</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-primary font-medium transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-foreground/80 hover:text-primary font-medium transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-primary font-medium transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-primary font-medium transition-colors">
            Contact
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-foreground">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/80 animated-button">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 animate-fade-in">
            <Link to="/" className="text-foreground/80 hover:text-primary font-medium p-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="text-foreground/80 hover:text-primary font-medium p-2" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary font-medium p-2" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary font-medium p-2" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-primary text-primary">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full bg-primary text-primary-foreground">
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
