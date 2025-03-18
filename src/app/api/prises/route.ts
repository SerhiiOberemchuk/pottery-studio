const { SHEET_ID, API_KEY } = process.env;

export async function GET() {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A2:C5?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.values) {
      return Response.json(
        { error: 'Не вдалося отримати дані' },
        { status: 500 }
      );
    }

    const services = data.values.map((row: string[]) => ({
      id: row[0],
      name: row[1],
      price: row[2],
    }));

    return Response.json({ services });
  } catch (error) {
    return Response.json({ error: 'Помилка сервера' }, { status: 500 });
  }
}
