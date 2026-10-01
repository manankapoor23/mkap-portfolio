"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

// Pages are static, so the time is filled in on the client. The placeholder
// has the same width as a real time, so nothing shifts when it appears.
export default function LocalTime() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <time className="tabular">{time} IST</time>;
}
