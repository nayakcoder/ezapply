
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about the application process? Need guidance on university selection?
              Our team is here to help you every step of the way.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Get In Touch</h2>
              
              <div className="space-y-8">
                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:ezapply.info@gmail.com" className="text-muted-foreground hover:text-primary">
                        ezapply.info@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a href="https://wa.me/9779840610844" className="text-muted-foreground hover:text-primary">
                        +977 984 061 0844
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
                      <div className="flex gap-4 mt-2">
                        <a href="https://facebook.com" className="text-muted-foreground hover:text-primary">Facebook</a>
                        <a href="https://instagram.com" className="text-muted-foreground hover:text-primary">Instagram</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Send Us a Message</h2>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Can't find what you're looking for? Feel free to reach out using the contact form.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mt-12">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">How much does your service cost?</h3>
                  <p className="text-muted-foreground">
                    Our service fees vary based on the specific assistance you need. Contact us for a personalized quote based on your requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">How long does the application process take?</h3>
                  <p className="text-muted-foreground">
                    Typically, the entire process from initial consultation to receiving an offer letter takes 2-3 months, depending on the university and your documentation readiness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Do you guarantee admission?</h3>
                  <p className="text-muted-foreground">
                    While we can't guarantee admission as final decisions rest with universities, our expertise significantly increases your chances of acceptance to suitable programs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">What documents do I need to apply?</h3>
                  <p className="text-muted-foreground">
                    Generally, you'll need academic transcripts, language proficiency test results, letters of recommendation, a personal statement, and your passport. We'll provide a detailed list based on your specific situation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
