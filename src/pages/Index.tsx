import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Activity, Calculator, Pill, Heart, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Activity,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index with height and weight inputs. Get instant health category classification.",
  },
  {
    icon: Calculator,
    title: "BMR Calculator",
    description: "Determine your Basal Metabolic Rate and daily calorie needs based on age, gender, and activity level.",
  },
  {
    icon: Pill,
    title: "Dosage Calculator",
    description: "Calculate precise medication dosages based on patient weight and prescribed dose per kilogram.",
  },
];

const stats = [
  { icon: Heart, value: "99%", label: "Accuracy Rate" },
  { icon: Users, value: "10K+", label: "Medical Students" },
  { icon: Award, value: "100%", label: "HIPAA Compliant" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Smart{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-hero">
                    Medical Calculator
                  </span>
                  {" "}🏥
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Professional medical calculation tools for healthcare students and professionals. 
                  BMI, BMR, and dosage calculations with real-time state management.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-elevated">
                  <Link to="/bmi">
                    Start Calculating
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/bmr">BMR Calculator</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-medical-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-gradient-subtle p-8">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-medical-light rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-16 w-16 text-medical-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Medical Precision</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art calculations with real-time updates and professional accuracy.
                  </p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-card border">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-medical-primary" />
                  <span className="font-medium text-sm">BMI Analysis</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-card border">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-medical-secondary" />
                  <span className="font-medium text-sm">Live Calculations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Professional Medical Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive medical calculators with state management for accurate, real-time calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-medical-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/${feature.title.toLowerCase().split(' ')[0]}`}>
                      Open Calculator
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Calculate?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start using our professional medical calculators for accurate health assessments and medication dosing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90">
                <Link to="/bmi">
                  Calculate BMI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/dosage">Dosage Calculator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}