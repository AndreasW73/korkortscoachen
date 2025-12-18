// Next Imports
import { NextResponse } from 'next/server';

// Handler for GET requests to fetch products
export async function GET(request: Request) {
  try {
    // console.log("Fetching calendar...");
    return NextResponse.json({ calendar: {} });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Error fetching calendar' }, { status: 500 });
  }
}
