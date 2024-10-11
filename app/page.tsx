import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
          Welcome to FlashMaster
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Your ultimate companion for exam and certification preparation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" /> Study
              </CardTitle>
              <CardDescription>Create and review flashcards</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Organize your study material into easy-to-review flashcards.</p>
            </CardContent>
            <CardFooter>
              <Button asChild size>
                <Link href="/decks">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2" /> Practice
              </CardTitle>
              <CardDescription>Test your knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Take quizzes and track your progress as you prepare for your exams.</p>
            </CardContent>
            <CardFooter>
              <Button asChild size>
                <Link href="/practice">Start Practicing</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" /> Collaborate
              </CardTitle>
              <CardDescription>Study with others</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Join study groups and share decks with fellow students.</p>
            </CardContent>
            <CardFooter>
              <Button asChild size>
                <Link href="/groups">Find Groups</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}