"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';

export default function Decks() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for decks
  const decks = [
    { id: 1, title: 'JavaScript Basics', cardCount: 50 },
    { id: 2, title: 'React Fundamentals', cardCount: 30 },
    { id: 3, title: 'AWS Certified Solutions Architect', cardCount: 100 },
    { id: 4, title: 'Python Data Structures', cardCount: 75 },
  ];

  const filteredDecks = decks.filter(deck =>
    deck.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Flashcard Decks</h1>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Input
            type="text"
            placeholder="Search decks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <Button asChild>
          <Link href="/decks/new">
            <Plus className="mr-2" size={18} />
            Create New Deck
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDecks.map(deck => (
          <Card key={deck.id}>
            <CardHeader>
              <CardTitle>{deck.title}</CardTitle>
              <CardDescription>{deck.cardCount} cards</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Last studied: 2 days ago</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href={`/decks/${deck.id}/edit`}>Edit</Link>
              </Button>
              <Button asChild>
                <Link href={`/decks/${deck.id}/study`}>Study</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}