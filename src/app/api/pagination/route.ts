// Next Imports
import { NextResponse } from 'next/server';

// Handler for GET requests to fetch products
export async function GET(request: Request) {
  try {
    // console.log("Fetching pagination...");
    return NextResponse.json({ post: {} });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Error fetching pagination' }, { status: 500 });
  }
}
