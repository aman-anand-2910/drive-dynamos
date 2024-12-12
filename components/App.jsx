import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import vehicleConfigs from "../vehicleConfigs";
import Canvas from "./Canvas";
import Editor from "./Editor";
import Dynamoscomponent from "./Dynamos";
import SpecsGrid from "./SpecsGrid";
import Header from "./Header";

function Customize({ flag }) {
  console.log(flag);
  // Saved vehicles.
  const [savedVehicles, setSavedVehicles] = useState(() => {
    const localStorageVehicles = localStorage.getItem("savedVehicles");
    return localStorageVehicles
      ? JSON.parse(localStorageVehicles)
      : { current: null };
  });

  const [addonsPrice, setAddonsPrice] = useState(0);

  // On saved Vehicles update.
  useEffect(() => {
    localStorage.setItem("savedVehicles", JSON.stringify(savedVehicles));
  }, [savedVehicles]);

  // Load default vehicle from local storage (if it exists).
  const defaultVehicleConfig = () => {
    const defaultVehicleId = savedVehicles.current;
    return defaultVehicleId && savedVehicles[defaultVehicleId]
      ? savedVehicles[defaultVehicleId].config
      : vehicleConfigs.defaults;
  };

  // Current vehicle config.
  const [currentVehicle, setVehicle] = useReducer(
    (currentVehicle, newState) => ({ ...currentVehicle, ...newState }),
    defaultVehicleConfig()
  );

  // Camera.
  const [cameraAutoRotate, setCameraAutoRotate] = useState(true);

  // Run once.
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedConfig = urlParams.get("config");
    if (encodedConfig) {
      console.log("Loading vehicle from shared URL.");
      const jsonString = decodeURIComponent(encodedConfig);
      const config = JSON.parse(jsonString);
      setVehicle(config);
      setSavedVehicles((prevSavedVehicles) => ({
        ...prevSavedVehicles,
        current: null,
      }));
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="App">
      <div>
        <Header/>
        <Canvas
          currentVehicle={currentVehicle}
          setVehicle={setVehicle}
          cameraAutoRotate={cameraAutoRotate}
          isBuyCar={flag}
        />
        <Editor
          addonsPrice={addonsPrice}
          isBuyCar={flag}
          setAddonsPrice={setAddonsPrice}
          isActive={true}
          currentVehicle={currentVehicle}
          setVehicle={setVehicle}
          cameraAutoRotate={cameraAutoRotate}
        />
      </div>
      {flag && (
        <div
          style={{
            width: "100%",
            zIndex: 10,
            position: "absolute",
            top: "65%",
          }}
        >
          <SpecsGrid />
        </div>
      )}
    </div>
  );
}

function Home() {
  return <Dynamoscomponent />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-car" element={<Customize flag={true} />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </Router>
  );
}
