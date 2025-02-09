import { readdir } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    const videosDirectory = path.join(process.cwd(), 'public/videos');
    const files = await readdir(videosDirectory);
    const videos = files.filter(file => file.match(/\.(mp4|webm|ogg)$/i));
    
    return NextResponse.json({ videos });
  } catch (error) {
    return NextResponse.json({ videos: [] });
  }
}
