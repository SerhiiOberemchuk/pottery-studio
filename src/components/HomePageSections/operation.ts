'use server';

import axios from 'axios';

const { SHEET_ID, API_KEY } = process.env;

console.log('SHEET_ID', SHEET_ID);
console.log('API_KEY', API_KEY);

export default async function getDataSeets() {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A2:C5?key=${API_KEY}`;

    const response = await axios.get(url);
    const data = response.data;

    const services = data.values.map((row: string[]) => ({
      id: row[0],
      name: row[1],
      price: row[2],
    }));
    console.log('operation', services);

    return data;
  } catch (error) {
    console.error('operation error', error);

    return error;
  }
}
