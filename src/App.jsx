import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Dashboard Joinville";
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚍 Dashboard Joinville-le-Pont</h1>
      <p>Modules à intégrer ici : météo, Vélib, transports, alertes, etc.</p>
    </div>
  );
}

export default App;