"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

export default function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className="flex items-center gap-2 text-faint">
      <Clock className="h-4 w-4" />
      <span>{time}</span>
    </span>
  );
}
