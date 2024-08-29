import { NextResponse } from 'next/server';
import { submitRsvp } from '@/app/actions/googleSheets';

export async function POST(request: Request) {
  const { text } = await request.json();
  try {
    await submitRsvp(text);
    return NextResponse.json({ message: 'Successfully written to sheet' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to write to sheet' }, { status: 500 });
  }
}
