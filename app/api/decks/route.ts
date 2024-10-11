import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { data: decks, error } = await supabase
    .from('decks')
    .select('*')
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json(decks)
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { title } = await request.json()
  
  const { data: deck, error } = await supabase
    .from('decks')
    .insert({ title })
    .select()
    .single()
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json(deck, { status: 201 })
}