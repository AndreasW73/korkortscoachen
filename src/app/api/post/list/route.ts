// Next Imports
import { NextResponse } from 'next/server';

import { posts } from '../posts'; // Adjust the path if needed

// Handler for GET requests to fetch products
export async function GET(request: Request) {
  try {
    // console.log("Fetching posts...");



    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
  }
}
