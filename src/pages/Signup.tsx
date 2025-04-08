
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    passportNumber: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Redirecting to complete your profile...",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="w-full max-w-2xl px-8 py-12 bg-white rounded-xl shadow-card mb-16">
          <div className="mb-6">
            <Link to="/" className="flex items-center text-sm font-medium text-ezapply-blue hover:text-ezapply-darkblue transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-ezapply-darkblue">Create Your Account</h1>
            <p className="text-ezapply-gray mt-2">Get started with your overseas university application</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-ezapply-darkblue">First Name <span className="text-red-500">*</span></Label>
                <Input 
                  id="firstName" 
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="middleName" className="text-ezapply-darkblue">Middle Name</Label>
                <Input 
                  id="middleName" 
                  type="text"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-ezapply-darkblue">Last Name <span className="text-red-500">*</span></Label>
                <Input 
                  id="lastName" 
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dob" className="text-ezapply-darkblue">Date of Birth <span className="text-red-500">*</span></Label>
              <Input 
                id="dob" 
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ezapply-darkblue">Email Address <span className="text-red-500">*</span></Label>
              <Input 
                id="email" 
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
              />
              <p className="text-xs text-ezapply-gray mt-1">
                A formal email required. All the info and notifications will be sent to this.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-ezapply-darkblue">Password <span className="text-red-500">*</span></Label>
                <Input 
                  id="password" 
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-ezapply-darkblue">Confirm Password <span className="text-red-500">*</span></Label>
                <Input 
                  id="confirmPassword" 
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-ezapply-darkblue">Contact Number <span className="text-red-500">*</span></Label>
                <Input 
                  id="phone" 
                  type="tel"
                  placeholder="e.g. +977 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="passportNumber" className="text-ezapply-darkblue">Passport Number <span className="text-red-500">*</span></Label>
                <Input 
                  id="passportNumber" 
                  type="text"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="border-ezapply-gray/20 focus:border-ezapply-blue focus:ring-ezapply-blue/20"
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-ezapply-blue hover:bg-ezapply-darkblue text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : "Create Account"}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-ezapply-gray">
              Already have an account?{" "}
              <Link to="/login" className="text-ezapply-blue hover:text-ezapply-darkblue font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;
