import { Calculator, Heart, Activity, Pill } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-medical-primary">Smart Medical Calculator</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional medical calculation tools for healthcare students and professionals. 
              Accurate, reliable, and designed for medical education.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Calculators</h3>
            <div className="space-y-2">
              <Link to="/bmi" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-medical-primary transition-colors">
                <Activity className="h-4 w-4" />
                BMI Calculator
              </Link>
              <Link to="/bmr" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-medical-primary transition-colors">
                <Calculator className="h-4 w-4" />
                BMR Calculator
              </Link>
              <Link to="/dosage" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-medical-primary transition-colors">
                <Pill className="h-4 w-4" />
                Dosage Calculator
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <div className="space-y-2">
              <span className="block text-sm text-muted-foreground">Real-time Calculations</span>
              <span className="block text-sm text-muted-foreground">State Management</span>
              <span className="block text-sm text-muted-foreground">Professional Accuracy</span>
              <span className="block text-sm text-muted-foreground">Mobile Responsive</span>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Medical Project</h3>
            <div className="space-y-2">
              <span className="block text-sm text-muted-foreground">Educational Purpose</span>
              <span className="block text-sm text-muted-foreground">State-based Design</span>
              <span className="block text-sm text-muted-foreground">Healthcare Standards</span>
              <span className="block text-sm text-muted-foreground">Professional Grade</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Created for Medical Project using State-based Calculations
          </p>
        </div>
      </div>
    </footer>
  );
}