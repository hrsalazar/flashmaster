import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { searchParams } = new URL(request.url)
  const deckId = searchParams.get('deckId')
  
  const query = supabase.from('flashcards').select('*')
  if (deckId) {
    query.eq('deck_id', deckId)
  }
  
  const { data: flashcards, error } = await query
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json(flashcards)
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { question, answer, deckId } = await request.json()
  
  const { data: flashcard, error } = await supabase
    .from('flashcards')
    .insert({ question, answer, deck_id: deckId })
    .select()
    .single()
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json(flashcard, { status: 201 })
}