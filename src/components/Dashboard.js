import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    const PROXY_BASE = "https://ratp-proxy.hippodrome-proxy42.workers.dev/?url=";

    function updateDateTime() {
      const now = new Date();
      const el = document.getElementById("datetime");
      if (el) el.textContent = `🕐 ${now.toLocaleTimeString()} – 📅 ${now.toLocaleDateString("fr-FR")}`;
    }

    async function fetchWeather() {
      try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.84&longitude=2.45&current=temperature_2m&timezone=Europe%2FParis");
        const data = await res.json();
        document.getElementById("weather").textContent = `Température : ${data.current.temperature_2m} °C`;
      } catch {
        document.getElementById("weather").textContent = "Météo indisponible";
      }
    }

    updateDateTime();
    fetchWeather();
    const timer = setInterval(updateDateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard">
      <div id="datetime"></div>
      <div id="weather"></div>
    </div>
  );
}
