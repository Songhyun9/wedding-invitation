'use server';

import { writeToGoogleSheetBook, readFromGoogleSheet } from '@/app/lib/googleSheets';

export async function submitGuestbookEntry(formData: { name: string; content: string }) {
  try {
    const date = new Date().toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    const rowData = [formData.name, formData.content, date];
    await writeToGoogleSheetBook(rowData);
    return { success: true };
  } catch (error) {
    console.error('Error submitting guestbook entry:', error);
    return { success: false, error: 'Failed to submit guestbook entry' };
  }
}

export async function getGuestbookEntries() {
  try {
    const entries = await readFromGoogleSheet();
    return { success: true, entries };
  } catch (error) {
    console.error('Error fetching guestbook entries:', error);
    return { success: false, error: 'Failed to fetch guestbook entries' };
  }
}
