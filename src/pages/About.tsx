import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Target, Building2, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  {
    icon: Target,
    title: "Forces & Vectors",
    description: "Understanding force systems, vector addition, and resultant forces in 2D and 3D space.",
    topics: ["Force vectors", "Resultant forces", "Vector components", "Unit vectors"]
  },
  {
    icon: Building2,
    title: "Equilibrium",
    description: "Analysis of particles and rigid bodies in static equilibrium conditions.",
    topics: ["Particle equilibrium", "Rigid body equilibrium", "Free body diagrams", "Support reactions"]
  },
  {
    icon: Wrench,
    title: "Structural Analysis",
    description: "Methods for analyzing trusses, frames, and structural members.",
    topics: ["Method of joints", "Method of sections", "Zero-force members", "Determinacy"]
  },
  {
    icon: BookOpen,
    title: "Advanced Topics",
    description: "Complex concepts including friction, centroids, and moments of inertia.",
    topics: ["Friction analysis", "Center of gravity", "Moment of inertia", "Composite areas"]
  }
];

const applications = [
  "Bridge and building design",
  "Mechanical system analysis", 
  "Aerospace structures",
  "Civil infrastructure",
  "Manufacturing equipment",
  "Automotive engineering"
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Engineering Statics?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Engineering Statics is the branch of mechanics that deals with the analysis of forces 
              acting on physical systems in static equilibrium. It forms the foundation for all 
              structural and mechanical engineering disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Why Statics Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Statics is fundamental to engineering because it provides the tools to analyze 
                  and design structures that must remain stable under various loading conditions. 
                  Without a solid understanding of statics, engineers cannot ensure the safety 
                  and reliability of their designs.
                </p>
                <p>
                  Every bridge you cross, every building you enter, and every machine you use 
                  has been designed using principles of statics. It's the science that ensures 
                  structures don't collapse and machines operate safely.
                </p>
              </div>
              <Button asChild className="bg-gradient-hero hover:opacity-90">
                <Link to="/applications">
                  Explore Applications
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-engineering-light rounded-lg">
                    <div className="w-2 h-2 bg-engineering-blue rounded-full"></div>
                    <span className="text-sm font-medium text-engineering-dark">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Core Topics in Statics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master these fundamental concepts to excel in structural analysis and engineering design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-engineering-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <topic.icon className="h-6 w-6 text-engineering-blue" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{topic.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Key Concepts:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {topic.topics.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-engineering-blue rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-foreground">Your Learning Journey</h2>
              <p className="text-xl text-muted-foreground">
                Follow this structured path to master engineering statics.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { step: 1, title: "Foundation", description: "Start with forces, vectors, and basic equilibrium" },
                { step: 2, title: "Analysis", description: "Learn free body diagrams and equilibrium equations" },
                { step: 3, title: "Structures", description: "Analyze trusses, beams, and frames" },
                { step: 4, title: "Advanced", description: "Master friction, centroids, and moments of inertia" },
                { step: 5, title: "Practice", description: "Apply knowledge to real-world problems" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 bg-gradient-hero text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90">
                <Link to="/formulas">
                  Start with Formulas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}