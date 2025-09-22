import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, RotateCcw, Brain, Trophy, Target } from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the condition for static equilibrium of a particle?",
    options: [
      "The sum of forces equals the mass",
      "The sum of all forces acting on it is zero",
      "The velocity is constant",
      "The acceleration is positive"
    ],
    correct: 1,
    explanation: "For static equilibrium, the vector sum of all forces acting on a particle must equal zero (ΣF = 0)."
  },
  {
    id: 2,
    question: "In a truss analysis, what characterizes a zero-force member?",
    options: [
      "A member that carries maximum load",
      "A member with no applied loads at its joints",
      "A member that is about to fail",
      "A member with circular cross-section"
    ],
    correct: 1,
    explanation: "A zero-force member carries no internal force and typically occurs at joints with specific geometric arrangements and loading conditions."
  },
  {
    id: 3,
    question: "The moment of a force about a point is calculated as:",
    options: [
      "Force × distance from the line of action",
      "Force × perpendicular distance from the point",
      "Force ÷ distance",
      "Force + perpendicular distance"
    ],
    correct: 1,
    explanation: "Moment = Force × perpendicular distance from the point to the line of action of the force (M = F × d)."
  },
  {
    id: 4,
    question: "What is the maximum number of equations available for 2D static equilibrium?",
    options: [
      "2 equations",
      "3 equations", 
      "4 equations",
      "6 equations"
    ],
    correct: 1,
    explanation: "In 2D, we have 3 equilibrium equations: ΣFx = 0, ΣFy = 0, and ΣM = 0."
  },
  {
    id: 5,
    question: "The centroid of a composite area is found using:",
    options: [
      "Average of all coordinates",
      "Weighted average based on individual areas",
      "Geometric center only",
      "Maximum x and y coordinates"
    ],
    correct: 1,
    explanation: "Centroid coordinates are calculated as weighted averages: x̄ = ΣxᵢAᵢ/ΣAᵢ and ȳ = ΣyᵢAᵢ/ΣAᵢ."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const progress = ((currentQuestion + (quizCompleted ? 1 : 0)) / quizQuestions.length) * 100;

  if (quizCompleted) {
    const percentage = (score / quizQuestions.length) * 100;
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-border shadow-elevated">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Quiz Complete!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-engineering-blue">
                        {score}/{quizQuestions.length}
                      </div>
                      <div className="text-xl text-muted-foreground">
                        {percentage.toFixed(0)}% Correct
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Progress value={percentage} className="w-full" />
                      <p className="text-sm text-muted-foreground">
                        {percentage >= 80 ? "Excellent work!" : 
                         percentage >= 60 ? "Good job!" : 
                         "Keep studying and try again!"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Review Your Answers:</h3>
                    {quizQuestions.map((question, index) => (
                      <div key={question.id} className="border border-border rounded-lg p-4 space-y-2">
                        <div className="flex items-start gap-3">
                          {answers[index] === question.correct ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="space-y-2 flex-1">
                            <p className="text-sm font-medium text-foreground">{question.question}</p>
                            <p className="text-xs text-muted-foreground">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={handleRestart}
                    className="w-full bg-gradient-hero hover:opacity-90"
                    size="lg"
                  >
                    <RotateCcw className="mr-2 h-5 w-5" />
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Test Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Knowledge
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Challenge yourself with these carefully crafted questions covering key statics concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <Badge variant="outline">
                  Statics Quiz
                </Badge>
              </div>
              <Progress value={progress} className="w-full" />
            </div>

            {/* Question Card */}
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-engineering-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-engineering-blue" />
                  </div>
                  <span className="text-xl text-foreground leading-tight">
                    {quizQuestions[currentQuestion].question}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Options */}
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full text-left p-4 border-2 rounded-lg transition-all duration-200 ${
                        selectedAnswer === index
                          ? showResult
                            ? index === quizQuestions[currentQuestion].correct
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-red-500 bg-red-50 text-red-700"
                            : "border-engineering-blue bg-engineering-light text-engineering-dark"
                          : showResult && index === quizQuestions[currentQuestion].correct
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-border hover:border-engineering-blue hover:bg-engineering-light/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                          selectedAnswer === index
                            ? showResult
                              ? index === quizQuestions[currentQuestion].correct
                                ? "border-green-500 bg-green-500 text-white"
                                : "border-red-500 bg-red-500 text-white"
                              : "border-engineering-blue bg-engineering-blue text-white"
                            : showResult && index === quizQuestions[currentQuestion].correct
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-muted-foreground"
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1">{option}</span>
                        {showResult && selectedAnswer === index && index !== quizQuestions[currentQuestion].correct && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        {showResult && index === quizQuestions[currentQuestion].correct && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className="bg-formula-bg border border-border rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Explanation:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {!showResult ? (
                    <>
                      <Button 
                        onClick={handleShowResult}
                        disabled={selectedAnswer === null}
                        variant="outline"
                        className="flex-1"
                      >
                        <Target className="mr-2 h-4 w-4" />
                        Check Answer
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={handleNext}
                      className="flex-1 bg-gradient-hero hover:opacity-90"
                    >
                      {currentQuestion + 1 < quizQuestions.length ? "Next Question" : "Finish Quiz"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Score Display */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <Trophy className="h-4 w-4 text-engineering-blue" />
                <span className="text-sm font-medium text-foreground">
                  Current Score: {score}/{Math.min(currentQuestion + (showResult ? 1 : 0), quizQuestions.length)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}