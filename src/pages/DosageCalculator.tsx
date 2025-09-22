import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Pill, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

// State management for dosage calculator
interface DosageState {
  patientWeight: string;
  dosePerKg: string;
  totalDosage: number | null;
  isValid: boolean;
  medicationName: string;
}

const initialState: DosageState = {
  patientWeight: "",
  dosePerKg: "",
  totalDosage: null,
  isValid: false,
  medicationName: "",
};

export default function DosageCalculator() {
  const [state, setState] = useState<DosageState>(initialState);

  // Calculate dosage whenever inputs change
  useEffect(() => {
    const weight = parseFloat(state.patientWeight);
    const dose = parseFloat(state.dosePerKg);

    if (weight > 0 && dose > 0) {
      const totalDosage = weight * dose;
      
      setState(prev => ({
        ...prev,
        totalDosage: Math.round(totalDosage * 100) / 100, // Round to 2 decimal places
        isValid: true,
      }));
    } else {
      setState(prev => ({
        ...prev,
        totalDosage: null,
        isValid: false,
      }));
    }
  }, [state.patientWeight, state.dosePerKg]);

  const handleInputChange = (field: keyof DosageState, value: string) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const resetCalculator = () => {
    setState(initialState);
  };

  const getDosageCategory = (dosage: number | null) => {
    if (!dosage) return "";
    if (dosage < 10) return "Low dose";
    if (dosage >= 10 && dosage < 100) return "Standard dose";
    if (dosage >= 100 && dosage < 500) return "High dose";
    return "Very high dose - Verify calculation";
  };

  const getDosageColor = (dosage: number | null) => {
    if (!dosage) return "";
    if (dosage < 10) return "text-medical-secondary";
    if (dosage >= 10 && dosage < 100) return "text-medical-primary";
    if (dosage >= 100 && dosage < 500) return "text-yellow-600";
    return "text-red-600";
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
              <Pill className="h-8 w-8 text-medical-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Dosage Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate precise medication dosages based on patient weight
            </p>
          </div>

          {/* Safety Alert */}
          <Alert className="mb-6 border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              <strong>Medical Professional Use Only:</strong> Always verify dosage calculations 
              with prescribing guidelines and consult healthcare professionals before administration.
            </AlertDescription>
          </Alert>

          {/* Calculator Card */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="text-center">Dosage Calculation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Medication Name */}
              <div className="space-y-2">
                <Label htmlFor="medication">Medication Name (Optional)</Label>
                <Input
                  id="medication"
                  type="text"
                  placeholder="e.g., Acetaminophen"
                  value={state.medicationName}
                  onChange={(e) => handleInputChange("medicationName", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Patient Weight */}
                <div className="space-y-2">
                  <Label htmlFor="weight">Patient Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 70.5"
                    value={state.patientWeight}
                    onChange={(e) => handleInputChange("patientWeight", e.target.value)}
                    className="text-lg"
                  />
                </div>

                {/* Dose per kg */}
                <div className="space-y-2">
                  <Label htmlFor="dose">Dose per kg (mg/kg)</Label>
                  <Input
                    id="dose"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 10"
                    value={state.dosePerKg}
                    onChange={(e) => handleInputChange("dosePerKg", e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>

              {/* Results */}
              {state.isValid && (
                <div className="mt-8 p-6 bg-medical-light rounded-lg space-y-4">
                  <h3 className="text-xl font-semibold text-center">Calculated Dosage</h3>
                  
                  {state.medicationName && (
                    <div className="text-center text-muted-foreground mb-2">
                      for {state.medicationName}
                    </div>
                  )}
                  
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-medical-primary">
                      {state.totalDosage} mg
                    </div>
                    <div className="text-sm text-muted-foreground">Total Dosage</div>
                    <div className={`text-lg font-semibold ${getDosageColor(state.totalDosage)}`}>
                      {getDosageCategory(state.totalDosage)}
                    </div>
                  </div>
                  
                  {/* Calculation Breakdown */}
                  <div className="mt-6 p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-3">Calculation:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Patient Weight:</span>
                        <span className="font-mono">{state.patientWeight} kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dose per kg:</span>
                        <span className="font-mono">{state.dosePerKg} mg/kg</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total Dosage:</span>
                        <span className="font-mono">
                          {state.patientWeight} × {state.dosePerKg} = {state.totalDosage} mg
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* High dose warning */}
                  {state.totalDosage && state.totalDosage >= 500 && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        <strong>High Dose Alert:</strong> This is a very high dosage. 
                        Please double-check the calculation and verify with prescribing guidelines.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={resetCalculator}
                  variant="outline"
                  className="flex-1"
                >
                  Reset & New Calculation
                </Button>
                <Button asChild className="flex-1 bg-gradient-hero">
                  <Link to="/bmi">BMI Calculator</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Dosage Calculation Guidelines</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Weight-based dosing</strong> is commonly used for medications where the dose 
                  needs to be adjusted based on patient size for safety and efficacy.
                </p>
                <p>
                  <strong>Always verify:</strong> Check drug references, consider patient factors 
                  (age, kidney function, liver function), and follow institutional protocols.
                </p>
                <p>
                  <strong>Double-check calculations</strong> and have them verified by another 
                  healthcare professional when administering high-risk medications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}