import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Activity, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// State management for BMI calculator
interface BMIState {
  height: string;
  weight: string;
  bmi: number | null;
  category: string;
  isValid: boolean;
}

const initialState: BMIState = {
  height: "",
  weight: "",
  bmi: null,
  category: "",
  isValid: false,
};

export default function BMICalculator() {
  const [state, setState] = useState<BMIState>(initialState);

  // Calculate BMI whenever height or weight changes
  useEffect(() => {
    const height = parseFloat(state.height);
    const weight = parseFloat(state.weight);

    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      
      let category = "";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi >= 18.5 && bmi < 25) category = "Normal weight";
      else if (bmi >= 25 && bmi < 30) category = "Overweight";
      else category = "Obese";

      setState(prev => ({
        ...prev,
        bmi: Math.round(bmi * 10) / 10,
        category,
        isValid: true,
      }));
    } else {
      setState(prev => ({
        ...prev,
        bmi: null,
        category: "",
        isValid: false,
      }));
    }
  }, [state.height, state.weight]);

  const handleHeightChange = (value: string) => {
    setState(prev => ({ ...prev, height: value }));
  };

  const handleWeightChange = (value: string) => {
    setState(prev => ({ ...prev, weight: value }));
  };

  const resetCalculator = () => {
    setState(initialState);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "text-blue-600";
      case "Normal weight":
        return "text-medical-secondary";
      case "Overweight":
        return "text-yellow-600";
      case "Obese":
        return "text-red-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto">
              <Activity className="h-8 w-8 text-medical-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              BMI Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate your Body Mass Index and health category with real-time updates
            </p>
          </div>

          {/* Calculator Card */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="text-center">Enter Your Measurements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Height Input */}
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g., 175"
                  value={state.height}
                  onChange={(e) => handleHeightChange(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Weight Input */}
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 70"
                  value={state.weight}
                  onChange={(e) => handleWeightChange(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Results */}
              {state.isValid && (
                <div className="mt-8 p-6 bg-medical-light rounded-lg space-y-4">
                  <h3 className="text-xl font-semibold text-center">Your Results</h3>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-medical-primary">
                      {state.bmi}
                    </div>
                    <div className="text-sm text-muted-foreground">BMI Score</div>
                    <div className={`text-lg font-semibold ${getCategoryColor(state.category)}`}>
                      {state.category}
                    </div>
                  </div>
                  
                  {/* BMI Categories Reference */}
                  <div className="mt-6 p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-3">BMI Categories:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Underweight:</span>
                        <span className="text-blue-600">Less than 18.5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Normal weight:</span>
                        <span className="text-medical-secondary">18.5 - 24.9</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overweight:</span>
                        <span className="text-yellow-600">25.0 - 29.9</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Obese:</span>
                        <span className="text-red-600">30.0 and above</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={resetCalculator}
                  variant="outline"
                  className="flex-1"
                >
                  Reset
                </Button>
                <Button asChild className="flex-1 bg-gradient-hero">
                  <Link to="/bmr">BMR Calculator</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">About BMI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Body Mass Index (BMI) is a measure of body fat based on height and weight. 
                It's a useful screening tool but doesn't directly measure body fat. 
                Consult with healthcare professionals for complete health assessments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}