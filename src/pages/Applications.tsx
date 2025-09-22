import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building, MapPin, Car, Plane, Wrench, Cog } from "lucide-react";

const applications = [
  {
    icon: Building,
    title: "Buildings & Skyscrapers",
    category: "Civil Engineering",
    description: "Statics principles ensure structural integrity of buildings under various load conditions including wind, seismic, and occupancy loads.",
    examples: [
      "Column and beam analysis",
      "Foundation design",
      "Wind load distribution",
      "Seismic load paths"
    ],
    realWorld: "The Burj Khalifa uses advanced statics analysis to handle extreme wind loads and ensure stability at 828 meters height."
  },
  {
    icon: MapPin,
    title: "Bridges & Infrastructure",
    category: "Transportation",
    description: "Bridge design relies heavily on truss analysis, beam theory, and load distribution to safely carry traffic loads.",
    examples: [
      "Truss member forces",
      "Suspension cable tension",
      "Load distribution",
      "Support reactions"
    ],
    realWorld: "The Golden Gate Bridge's suspension system distributes the deck load through carefully calculated cable tensions and tower forces."
  },
  {
    icon: Car,
    title: "Automotive Engineering",
    category: "Mechanical",
    description: "Vehicle chassis, suspension systems, and safety structures are designed using statics for optimal performance and safety.",
    examples: [
      "Chassis frame analysis",
      "Suspension geometry",
      "Crash structure design",
      "Weight distribution"
    ],
    realWorld: "Formula 1 cars use statics analysis to optimize aerodynamic downforce distribution and suspension load paths."
  },
  {
    icon: Plane,
    title: "Aerospace Structures",
    category: "Aerospace",
    description: "Aircraft and spacecraft structures must withstand complex loading while minimizing weight through precise statics analysis.",
    examples: [
      "Wing load distribution",
      "Fuselage stress analysis",
      "Landing gear forces",
      "Control surface loads"
    ],
    realWorld: "The Boeing 787 Dreamliner's composite structure was designed using advanced statics to reduce weight by 20%."
  },
  {
    icon: Wrench,
    title: "Manufacturing Equipment",
    category: "Industrial",
    description: "Machine tools, robots, and production equipment rely on statics for precision, stability, and safe operation.",
    examples: [
      "Robot arm kinematics",
      "Machine tool rigidity",
      "Conveyor systems",
      "Lifting equipment"
    ],
    realWorld: "Industrial robots use statics calculations to determine joint torques needed for precise positioning and payload handling."
  },
  {
    icon: Cog,
    title: "Mechanical Systems",
    category: "Mechanical",
    description: "Gears, linkages, and mechanical assemblies use statics for force transmission and equilibrium analysis.",
    examples: [
      "Gear tooth forces",
      "Linkage mechanisms",
      "Bearing loads",
      "Spring systems"
    ],
    realWorld: "Wind turbine gearboxes use statics analysis to handle massive torques while ensuring 20+ year operational life."
  }
];

const caseStudies = [
  {
    title: "Eiffel Tower Analysis",
    description: "How lattice truss analysis enabled the construction of this iconic 300-meter structure in 1889.",
    concepts: ["Truss analysis", "Wind loads", "Material optimization"]
  },
  {
    title: "Space Shuttle Launch",
    description: "Complex force analysis during launch, including thrust vectors and structural loads.",
    concepts: ["Force vectors", "Dynamic equilibrium", "Safety factors"]
  },
  {
    title: "Modern Skyscraper Design",
    description: "How advanced statics enables buildings over 100 stories while maintaining safety and efficiency.",
    concepts: ["Load paths", "Lateral stability", "Foundation design"]
  }
];

export default function Applications() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Real-World{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Applications
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how engineering statics principles are applied in designing the structures, 
              machines, and systems that shape our modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-engineering-light rounded-lg flex items-center justify-center">
                      <app.icon className="h-6 w-6 text-engineering-blue" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-semibold text-foreground">{app.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {app.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{app.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Applications:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-engineering-blue rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-engineering-light rounded-lg p-4">
                      <h4 className="font-medium text-engineering-dark mb-2">Real-World Example:</h4>
                      <p className="text-sm text-engineering-dark leading-relaxed">{app.realWorld}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Engineering Case Studies
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore famous engineering achievements and the statics principles behind them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">{study.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{study.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Concepts:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.concepts.map((concept, conceptIndex) => (
                          <Badge key={conceptIndex} variant="secondary" className="text-xs">
                            {concept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                The Impact of Statics in Engineering
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Safety</h3>
                    <p className="text-muted-foreground">Ensures structures can safely support their intended loads</p>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <Cog className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Efficiency</h3>
                    <p className="text-muted-foreground">Optimizes material usage and structural performance</p>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Innovation</h3>
                    <p className="text-muted-foreground">Enables new designs and engineering breakthroughs</p>
                  </div>
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