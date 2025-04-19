import React from "react";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px", width: "100%" }}>
      <h1>🌍 Interactive Map</h1>
      <p>Explore various locations with real-time tracking and category filters.</p>
      <MapComponent />
    </div>
  );
}

export default App;
