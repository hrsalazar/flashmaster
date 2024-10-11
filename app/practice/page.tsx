"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

export default function Practice() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mock data for flashcards
  const flashcards = [
    { id: 1, question: "What is React?", answer: "A JavaScript library for building user interfaces" },
    { id: 2, question: "What is JSX?", answer: "A syntax extension for JavaScript, often used with React" },
    { id: 3, question: "What is a component in React?", answer: "A reusable piece of UI that can be composed to create complex interfaces" },
  ];

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
      setProgress((currentCardIndex + 2) / flashcards.length * 100);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
      setProgress((currentCardIndex) / flashcards.length * 100);
    }
  };

  const handleFlipCard = () => {
    setShowAnswer(!showAnswer);
  };

  const handleRestart = () => {
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setProgress(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Practice Session</h1>
      
      <Progress value={progress} className="mb-8" />
      
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            Card {currentCardIndex + 1} of {flashcards.length}
          </CardTitle>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center">
          <p className="text-xl text-center">
            {showAnswer ? flashcards[currentCardIndex].answer : flashcards[currentCardIndex].question}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handlePreviousCard} disabled={currentCardIndex === 0}>
            <ArrowLeft className="mr-2" size={18} />
            Previous
          </Button>
          <Button onClick={handleFlipCard}>
            <RotateCcw className="mr-2" size={18} />
            Flip
          </Button>
          <Button onClick={handleNextCard} disabled={currentCardIndex === flashcards.length - 1}>
            Next
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-8 text-center">
        <Button onClick={handleRestart}>
          Restart Session
        </Button>
      </div>
    </div>
  );
}