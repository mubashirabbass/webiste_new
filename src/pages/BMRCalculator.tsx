import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calculator, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// State management for BMR calculator
interface BMRState {
  age: string;
  gender: string;
  weight: string;
  height: string;
  activityLevel: string;
  bmr: number | null;
  dailyCalories: number | null;
  isValid: boolean;
}

const initialState: BMRState = {
  age: "",
  gender: "",
  weight: "",
  height: "",
  activityLevel: "",
  bmr: null,
  dailyCalories: null,
  isValid: false,
};

const activityLevels = [
  { value: "1.2", label: "Sedentary (little or no exercise)" },
  { value: "1.375", label: "Lightly active (light exercise 1-3 days/week)" },
  { value: "1.55", label: "Moderately active (moderate exercise 3-5 days/week)" },
  { value: "1.725", label: "Very active (hard exercise 6-7 days/week)" },
  { value: "1.9", label: "Super active (very hard exercise, physical job)" },
];

export default function BMRCalculator() {
  const [state, setState] = useState<BMRState>(initialState);

  // Calculate BMR whenever inputs change
  useEffect(() => {
    const age = parseFloat(state.age);
    const weight = parseFloat(state.weight);
    const height = parseFloat(state.height);
    const activityMultiplier = parseFloat(state.activityLevel);

    if (age > 0 && weight > 0 && height > 0 && state.gender && state.activityLevel) {
      let bmr: number;
      
      // Mifflin-St Jeor Equation
      if (state.gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      const dailyCalories = bmr * activityMultiplier;

      setState(prev => ({
        ...prev,
        bmr: Math.round(bmr),
        dailyCalories: Math.round(dailyCalories),
        isValid: true,
      }));
    } else {
      setState(prev => ({
        ...prev,
        bmr: null,
        dailyCalories: null,
        isValid: false,
      }));
    }
  }, [state.age, state.gender, state.weight, state.height, state.activityLevel]);

  const handleInputChange = (field: keyof BMRState, value: string) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const resetCalculator = () => {
    setState(initialState);
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
              <Calculator className="h-8 w-8 text-medical-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              BMR Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate your Basal Metabolic Rate and daily calorie needs
            </p>
          </div>

          {/* Calculator Card */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="text-center">Enter Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Age Input */}
                <div className="space-y-2">
                  <Label htmlFor="age">Age (years)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="e.g., 25"
                    value={state.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                  />
                </div>

                {/* Gender Select */}
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <Select value={state.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Weight Input */}
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="e.g., 70"
                    value={state.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                  />
                </div>

                {/* Height Input */}
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="e.g., 175"
                    value={state.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div className="space-y-2">
                <Label>Activity Level</Label>
                <Select value={state.activityLevel} onValueChange={(value) => handleInputChange("activityLevel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    {activityLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Results */}
              {state.isValid && (
                <div className="mt-8 p-6 bg-medical-light rounded-lg space-y-4">
                  <h3 className="text-xl font-semibold text-center">Your Results</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-medical-primary">
                        {state.bmr}
                      </div>
                      <div className="text-sm text-muted-foreground">Calories/day</div>
                      <div className="text-xs text-muted-foreground mt-1">BMR (Base Rate)</div>
                    </div>
                    
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-medical-secondary">
                        {state.dailyCalories}
                      </div>
                      <div className="text-sm text-muted-foreground">Calories/day</div>
                      <div className="text-xs text-muted-foreground mt-1">With Activity</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-2">What this means:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• BMR: Calories needed at complete rest</li>
                      <li>• Daily Calories: Total calories needed for your activity level</li>
                      <li>• Eat less to lose weight, more to gain weight</li>
                    </ul>
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
                  <Link to="/dosage">Dosage Calculator</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">About BMR</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Basal Metabolic Rate (BMR) represents the number of calories your body needs to perform basic functions like breathing, 
                circulation, and cell production while at rest. This calculator uses the Mifflin-St Jeor equation, which is considered 
                one of the most accurate methods for calculating BMR.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}