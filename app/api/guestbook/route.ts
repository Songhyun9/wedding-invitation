import { NextResponse } from 'next/server';
import { submitGuestbookEntry, getGuestbookEntries } from '@/app/actions/guestbook';

export async function POST(request: Request) {
  const { name, content } = await request.json();
  try {
    const result = await submitGuestbookEntry({ name, content });
    if (result.success) {
      return NextResponse.json({ message: 'Successfully added to guestbook' });
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add to guestbook' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const result = await getGuestbookEntries();
    if (result.success) {
      return NextResponse.json(result.entries);
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch guestbook entries' }, { status: 500 });
  }
}
