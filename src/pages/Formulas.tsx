import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calculator, Target, Building2, RotateCcw, Triangle, Square } from "lucide-react";

const formulaCategories = [
  {
    icon: Target,
    title: "Force & Vector Analysis",
    color: "bg-blue-500",
    formulas: [
      {
        name: "Resultant Force (2D)",
        formula: "R = √(Fx² + Fy²)",
        description: "Magnitude of resultant force from components"
      },
      {
        name: "Direction Angle",
        formula: "θ = tan⁻¹(Fy/Fx)",
        description: "Angle of resultant force from x-axis"
      },
      {
        name: "Unit Vector",
        formula: "û = F/|F|",
        description: "Unit vector in direction of force F"
      },
      {
        name: "Dot Product",
        formula: "A·B = |A||B|cosθ",
        description: "Scalar product of two vectors"
      }
    ]
  },
  {
    icon: Building2,
    title: "Equilibrium",
    color: "bg-green-500",
    formulas: [
      {
        name: "Force Equilibrium",
        formula: "ΣF = 0",
        description: "Sum of all forces equals zero"
      },
      {
        name: "Moment Equilibrium",
        formula: "ΣM = 0",
        description: "Sum of all moments equals zero"
      },
      {
        name: "2D Equilibrium",
        formula: "ΣFx = 0, ΣFy = 0, ΣMo = 0",
        description: "Three equilibrium equations in 2D"
      },
      {
        name: "3D Equilibrium",
        formula: "ΣFx = ΣFy = ΣFz = ΣMx = ΣMy = ΣMz = 0",
        description: "Six equilibrium equations in 3D"
      }
    ]
  },
  {
    icon: RotateCcw,
    title: "Moments & Couples",
    color: "bg-purple-500",
    formulas: [
      {
        name: "Moment about Point",
        formula: "M = r × F",
        description: "Moment vector using cross product"
      },
      {
        name: "Moment Magnitude",
        formula: "M = Fd",
        description: "Moment equals force times perpendicular distance"
      },
      {
        name: "Couple Moment",
        formula: "M = Fd",
        description: "Moment of a couple is constant"
      },
      {
        name: "Varignon's Theorem",
        formula: "Mo = ΣMoi",
        description: "Moment of resultant equals sum of individual moments"
      }
    ]
  },
  {
    icon: Triangle,
    title: "Trusses",
    color: "bg-orange-500",
    formulas: [
      {
        name: "Method of Joints",
        formula: "ΣFx = 0, ΣFy = 0",
        description: "Equilibrium at each joint"
      },
      {
        name: "Method of Sections",
        formula: "ΣFx = 0, ΣFy = 0, ΣM = 0",
        description: "Equilibrium of sectioned portion"
      },
      {
        name: "Zero Force Members",
        formula: "F = 0",
        description: "Members with no external loads"
      },
      {
        name: "Determinacy",
        formula: "m + r = 2j",
        description: "Condition for statically determinate truss"
      }
    ]
  },
  {
    icon: Square,
    title: "Centroids & Inertia",
    color: "bg-red-500",
    formulas: [
      {
        name: "Centroid (x-coordinate)",
        formula: "x̄ = ΣxiAi / ΣAi",
        description: "x-coordinate of centroid"
      },
      {
        name: "Centroid (y-coordinate)",
        formula: "ȳ = ΣyiAi / ΣAi",
        description: "y-coordinate of centroid"
      },
      {
        name: "Moment of Inertia",
        formula: "I = ∫r²dA",
        description: "Second moment of area"
      },
      {
        name: "Parallel Axis Theorem",
        formula: "I = Ic + Ad²",
        description: "Transfer moment of inertia to parallel axis"
      }
    ]
  },
  {
    icon: Calculator,
    title: "Friction",
    color: "bg-yellow-500",
    formulas: [
      {
        name: "Static Friction",
        formula: "fs ≤ μsN",
        description: "Maximum static friction force"
      },
      {
        name: "Kinetic Friction",
        formula: "fk = μkN",
        description: "Kinetic friction force"
      },
      {
        name: "Angle of Friction",
        formula: "φs = tan⁻¹(μs)",
        description: "Angle of static friction"
      },
      {
        name: "Wedge Analysis",
        formula: "tan α ≤ μs",
        description: "Self-locking condition for wedges"
      }
    ]
  }
];

export default function Formulas() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Essential{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Formulas & Diagrams
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Master the fundamental equations and principles that form the backbone of engineering statics. 
              Each formula includes clear explanations and practical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Formulas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {formulaCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-border hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.formulas.map((formula, formulaIndex) => (
                    <div key={formulaIndex} className="border border-border rounded-lg p-4 space-y-2 bg-formula-bg">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1">
                          <h4 className="font-semibold text-foreground">{formula.name}</h4>
                          <p className="text-sm text-muted-foreground">{formula.description}</p>
                        </div>
                        <Badge variant="outline" className="font-mono text-sm shrink-0">
                          Essential
                        </Badge>
                      </div>
                      <div className="bg-background border border-border rounded p-3">
                        <code className="text-lg font-mono text-engineering-blue font-semibold">
                          {formula.formula}
                        </code>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-foreground">Fundamental Principles</h2>
              <p className="text-xl text-muted-foreground">
                Core concepts that underpin all statics calculations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Newton's First Law",
                  description: "A body at rest remains at rest unless acted upon by an unbalanced force.",
                  application: "Foundation for equilibrium analysis"
                },
                {
                  title: "Principle of Transmissibility",
                  description: "A force may be applied at any point along its line of action.",
                  application: "Simplifies force analysis"
                },
                {
                  title: "Parallelogram Law",
                  description: "Two forces can be replaced by their vector sum.",
                  application: "Vector addition and resultant forces"
                },
                {
                  title: "D'Alembert's Principle",
                  description: "Static equilibrium methods apply to dynamic systems with inertial forces.",
                  application: "Bridge between statics and dynamics"
                }
              ].map((principle, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                    <div className="pt-2">
                      <Badge variant="secondary" className="text-xs">
                        {principle.application}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}