
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "500+", label: "Students Helped" },
    { number: "98%", label: "Visa Success Rate" },
    { number: "50+", label: "Partner Universities" },
    { number: "5+", label: "Years of Experience" }
  ];

  const values = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Student-First Approach",
      description: "We prioritize your goals and aspirations, tailoring our services to match your unique profile and requirements."
    },
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
      title: "Global Perspective",
      description: "Our team brings international education experience, understanding the nuances of studying abroad."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-secondary" />,
      title: "Academic Excellence",
      description: "We guide students toward institutions that will challenge them and help them grow academically."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-ezapply-teal" />,
      title: "Career Focused",
      description: "We help students select programs that align with their career goals and future aspirations."
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      bio: "Former international student advisor with 10+ years of experience helping students achieve their study abroad dreams."
    },
    {
      name: "Sarah Johnson",
      role: "University Relations",
      bio: "Coordinates with our university partners to ensure students get the most updated information and opportunities."
    },
    {
      name: "Michael Chen",
      role: "Visa Specialist",
      bio: "Expert in navigating the complex visa application process with a 98% success rate."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">About EZApply</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to simplifying the university application process for students seeking education opportunities in the USA and UK.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                EZApply was founded on a simple premise: studying abroad shouldn't be complicated. 
                After experiencing the challenges of the application process firsthand, our founder decided to create a service that makes university applications accessible to everyone.
              </p>
              <p className="mb-4">
                What started as a small consulting service has grown into a comprehensive platform that guides students through every step of their educational journey abroad.
              </p>
              <p>
                Today, we pride ourselves on our personalized approach, attention to detail, and commitment to helping students achieve their academic dreams without the stress typically associated with international applications.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-foreground text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="bg-primary/10 p-4 rounded-lg inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-foreground text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground text-center mb-1">{member.name}</h3>
                  <p className="text-primary text-center mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Work With Us?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Start your journey to studying abroad with expert guidance every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
