
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, GraduationCap, FileText, Briefcase, Globe, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: <GraduationCap className="h-10 w-10 text-primary mb-4" />,
      title: "University Application",
      description: "Get help selecting the right course and university in the USA or UK based on your profile."
    },
    {
      icon: <FileText className="h-10 w-10 text-accent mb-4" />,
      title: "Document Upload",
      description: "We'll upload your documents such as transcripts, recommendation letters, and IELTS scorecards."
    },
    {
      icon: <Globe className="h-10 w-10 text-secondary mb-4" />,
      title: "Visa Process",
      description: "Get assistance with DS-160 forms and appointment scheduling for your student visa."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-ezapply-red mb-4" />,
      title: "Profile Creation",
      description: "We'll create a standout profile for your university applications to maximize your chances."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-ezapply-teal mb-4" />,
      title: "Fee Payment",
      description: "We'll guide you on how to pay university fees after receiving your visa."
    }
  ];

  const benefits = [
    "Save thousands in consultancy fees",
    "Complete your application from home",
    "Personalized guidance throughout the process",
    "Support until the end of your journey",
    "Expert advice on university selection"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight animate-fade-in text-glow">
                Apply to US & UK Universities <span className="text-gradient">Without Hassle</span>
              </h1>
              <p className="mt-6 text-white text-lg max-w-lg opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Start your journey with EZApply from your home today and save thousands on consultancy fees and traveling costs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/signup">
                  <Button size="lg" className="bg-accent hover:bg-primary text-white animated-button">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/9779840610844" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="glass-card p-6 rounded-lg max-w-md w-full animate-float glow-card">
                <h3 className="text-lg font-semibold font-heading text-white mb-4">Complete your application from home</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start animate-slide-in" style={{ animationDelay: `${0.2 * index}s` }}>
                      <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-white/90">{benefit}</p>
                    </div>
                  ))}
                </div>
                <Link to="/signup" className="mt-6 block">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-white">
                    Start Your Application
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient">Our Services</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We offer a range of services to help you with the entire process of studying abroad, from application to visa approval
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl border border-border service-card-hover animate-fade-in glow-card"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {service.icon}
                <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/30 to-accent/20 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 text-glow">Ready to Get Started?</h2>
          <p className="text-foreground/90 max-w-xl mx-auto mb-10">
            Begin your journey to study abroad with expert guidance every step of the way.
            Chat with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-accent hover:bg-accent/80 text-white">
                Create Account
              </Button>
            </Link>
            <a href="https://wa.me/9779840610844" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
