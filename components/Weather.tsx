// Chandigarh. Open-Meteo needs no API key.
const LAT = 30.7333;
const LON = 76.7794;

// WMO weather interpretation codes, as used by Open-Meteo.
function describe(code: number): string {
  if (code === 0) return "clear";
  if (code === 1) return "mostly clear";
  if (code === 2) return "partly cloudy";
  if (code === 3) return "overcast";
  if (code === 45 || code === 48) return "fog";
  if (code >= 51 && code <= 57) return "drizzle";
  if (code >= 61 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 82) return "showers";
  if (code === 85 || code === 86) return "snow showers";
  if (code >= 95) return "thunderstorms";
  return "";
}

async function getWeather(): Promise<{ temp: number; text: string } | null> {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code&timezone=Asia%2FKolkata`,
      { next: { revalidate: 1800 }, signal: AbortSignal.timeout(3000) },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const temp = data?.current?.temperature_2m;
    const code = data?.current?.weather_code;
    if (typeof temp !== "number") return null;
    return { temp: Math.round(temp), text: typeof code === "number" ? describe(code) : "" };
  } catch {
    return null;
  }
}

export default async function Weather() {
  const w = await getWeather();
  if (!w) return null;
  return <span> · {w.temp}°C{w.text ? `, ${w.text}` : ""}</span>;
}
