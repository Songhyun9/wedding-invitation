'use server';

import { writeToGoogleSheet } from '@/app/lib/googleSheets';

export async function submitRsvp(formData: { name: string; attendance: string; meal: string; numberOfGuests: number }) {
  try {
    const rowData = [formData.name, formData.attendance, formData.meal, formData.numberOfGuests.toString()];
    await writeToGoogleSheet(rowData);
    return { success: true };
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return { success: false, error: 'Failed to submit RSVP' };
  }
}
