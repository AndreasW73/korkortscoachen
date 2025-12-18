// Next Imports
import { NextResponse } from 'next/server';

// Handler for GET requests to fetch products
export async function GET(request: Request) {
  try {

    return NextResponse.json({ me: {} });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Error fetching me' }, { status: 500 });
  }
}
