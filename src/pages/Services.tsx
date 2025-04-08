
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, GraduationCap, FileText, Briefcase, Globe, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-ezapply-blue mb-4" />,
      title: "University Application",
      description: "Get help selecting the right course and university in the USA or UK based on your profile. Our experts will guide you through the selection process based on your academic background, interests, and career goals.",
      benefits: [
        "Personalized university selection",
        "Application guidance for top universities",
        "Course selection based on your profile",
        "Deadline management"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-ezapply-blue mb-4" />,
      title: "Document Upload",
      description: "We'll upload your documents such as transcripts, recommendation letters, and IELTS scorecards. Our team ensures all documents are properly formatted and submitted according to university requirements.",
      benefits: [
        "Document verification",
        "Format correction",
        "Timely submission",
        "Application tracking"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-ezapply-blue mb-4" />,
      title: "Visa Process",
      description: "Get assistance with DS-160 forms and appointment scheduling for your student visa. We'll walk you through the entire visa application process to maximize your chances of approval.",
      benefits: [
        "DS-160 form completion",
        "Interview preparation",
        "Document organization",
        "Appointment scheduling"
      ]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-ezapply-blue mb-4" />,
      title: "Profile Creation",
      description: "We'll create a standout profile for your university applications to maximize your chances. Our experts know what universities are looking for and will help highlight your strengths.",
      benefits: [
        "Professional presentation",
        "Highlighting key achievements",
        "Personal statement support",
        "Resume optimization"
      ]
    },
    {
      icon: <CreditCard className="h-12 w-12 text-ezapply-blue mb-4" />,
      title: "Fee Payment",
      description: "We'll guide you on how to pay university fees after receiving your visa. Navigate the international payment process with ease and avoid unnecessary transfer fees.",
      benefits: [
        "Payment method guidance",
        "Fee structure explanation",
        "Currency exchange advice",
        "Payment verification"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        {/* Hero Section */}
        <section className="bg-ezapply-lightblue py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-ezapply-darkblue mb-6">Our Services</h1>
            <p className="text-ezapply-darkblue max-w-2xl mx-auto">
              We provide comprehensive support for your entire study abroad journey, from selecting the right university to settling into your new campus.
            </p>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className="service-card-hover bg-white border border-ezapply-gray/10 rounded-xl p-8 shadow-card">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="lg:w-2/3">
                    <div className="inline-block bg-ezapply-lightblue p-4 rounded-lg mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-ezapply-darkblue">{service.title}</h2>
                    <p className="text-ezapply-darkblue/80 mb-6">{service.description}</p>
                    <Button className="bg-ezapply-blue hover:bg-ezapply-darkblue text-white">
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="lg:w-1/3 bg-ezapply-lightblue/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-4 text-ezapply-darkblue">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-ezapply-blue mt-0.5 flex-shrink-0" />
                          <span className="text-ezapply-darkblue/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-ezapply-lightblue py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-ezapply-darkblue">Ready to Start Your Journey?</h2>
            <p className="text-ezapply-darkblue/80 max-w-xl mx-auto mb-8">
              Get in touch with our team for personalized guidance on your university application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-ezapply-blue hover:bg-ezapply-darkblue text-white">
                  Get Started
                </Button>
              </Link>
              <a href="https://wa.me/9779840610844" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-ezapply-blue text-ezapply-blue hover:bg-ezapply-blue hover:text-white">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
