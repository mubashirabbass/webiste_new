import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, HelpCircle, Send, CheckCircle, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactReasons = [
  {
    icon: HelpCircle,
    title: "General Questions",
    description: "Get help with statics concepts or website features"
  },
  {
    icon: MessageCircle,
    title: "Study Support",
    description: "Need help understanding specific problems or formulas"
  },
  {
    icon: Users,
    title: "Feedback",
    description: "Share suggestions or report issues to improve the platform"
  }
];

const faqs = [
  {
    question: "How do I approach solving statics problems?",
    answer: "Start by drawing a clear free body diagram, identify all forces, write equilibrium equations, and solve systematically. Always check your answers for reasonableness."
  },
  {
    question: "What's the difference between statics and dynamics?",
    answer: "Statics deals with bodies at rest or in constant motion (equilibrium), while dynamics studies bodies with changing motion (acceleration)."
  },
  {
    question: "Why are my truss calculations not working?",
    answer: "Check that your truss is statically determinate, verify your free body diagrams, and ensure you're applying equilibrium correctly at each joint or section."
  },
  {
    question: "How do I find centroids of complex shapes?",
    answer: "Break the shape into simple geometric parts, find the centroid of each part, then use the weighted average formula based on individual areas."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Help & Support
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about statics concepts? Need help with specific problems? 
              We're here to support your learning journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll respond within 24 hours to help with your questions.
                </p>
              </div>

              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-engineering-blue" />
                    Contact Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What do you need help with?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your question or the specific statics problem you need help with..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={!isFormValid || isSubmitting}
                      className="w-full bg-gradient-hero hover:opacity-90"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Reasons */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">How can we help?</h3>
                <div className="space-y-4">
                  {contactReasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                      <div className="w-10 h-10 bg-engineering-light rounded-lg flex items-center justify-center">
                        <reason.icon className="h-5 w-5 text-engineering-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Quick Response</h3>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team of engineering educators is committed to helping you understand statics concepts. 
                    We provide detailed explanations and step-by-step solutions to help you learn effectively.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-6 space-y-2">
                        <h4 className="font-medium text-foreground">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}