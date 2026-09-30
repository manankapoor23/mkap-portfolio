// Chandigarh coordinates. Open-Meteo requires no API key.
const LAT = 30.7333;
const LON = 76.7794;

async function getTemperature(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m&timezone=Asia%2FKolkata`,
      { next: { revalidate: 1800 }, signal: AbortSignal.timeout(3000) }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const temp = data?.current?.temperature_2m;
    return typeof temp === "number" ? Math.round(temp) : null;
  } catch {
    return null;
  }
}

export default async function Weather() {
  const temp = await getTemperature();
  if (temp === null) return null;
  return <span>{temp}°C</span>;
}
