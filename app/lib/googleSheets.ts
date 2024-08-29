import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const GOOGLE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

export interface GuestbookEntry {
  id: number;
  name: string;
  content: string;
  date: string;
}

async function getGoogleSheetsInstance() {
  const auth = new GoogleAuth({
    scopes: SCOPES,
    credentials: {
      private_key: GOOGLE_PRIVATE_KEY,
      client_email: GOOGLE_CLIENT_EMAIL,
    },
  });

  return google.sheets({ version: 'v4', auth });
}

export async function writeToGoogleSheet(rowData: string[]) {
  const sheets = await getGoogleSheetsInstance();

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1!A:D', // Adjusted to include all fields
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    throw error;
  }
}

export async function writeToGoogleSheetBook(rowData: string[]) {
  const sheets = await getGoogleSheetsInstance();

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: '1QvGlL_4KQwcAzHac11qv8dLKIvzMbOE-hYKXLiqvA_I',
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    throw error;
  }
}

export async function readFromGoogleSheet(): Promise<GuestbookEntry[]> {
  const sheets = await getGoogleSheetsInstance();

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1QvGlL_4KQwcAzHac11qv8dLKIvzMbOE-hYKXLiqvA_I',
      range: 'Sheet1!A2:D',
    });

    const rows = response.data.values;
    if (rows && rows.length) {
      return rows.map((row, index) => ({
        id: index,
        name: row[0],
        content: row[1],
        date: row[2],
      }));
    }
    return [];
  } catch (error) {
    console.error('Error reading from Google Sheet:', error);
    throw error;
  }
}
