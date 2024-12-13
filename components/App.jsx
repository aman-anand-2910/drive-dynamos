import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import vehicleConfigs from "../vehicleConfigs";
import Canvas from "./Canvas";
import Editor from "./Editor";
import Dynamoscomponent from "./Dynamos";
import SpecsGrid from "./SpecsGrid";
import Header from "./Header";

function Customize({ flag }) {
  const [regNo, setRegNo] = useState("");
  const [submitRegNo, setSubmitRegNo] = useState(false);
  // Saved vehicles.
  const [savedVehicles, setSavedVehicles] = useState(() => {
    const localStorageVehicles = localStorage.getItem("savedVehicles");
    return localStorageVehicles
      ? JSON.parse(localStorageVehicles)
      : { current: null };
  });

  const [addonsPriceConfig, setAddonsPriceConfig] = useState({});

  useEffect(() => {
    setRegNo("");
  }, []);

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

  const [currentVehicle, setVehicle] = useReducer(
    (currentVehicle, newState) => ({ ...currentVehicle, ...newState }),
    defaultVehicleConfig()
  );

  useEffect(() => {
    console.log(currentVehicle);
    const selectedRim = currentVehicle.rim;
    const selectedTyre = currentVehicle.tire;
    let rimPrice = 0;
    let tyrePrice = 0;
    if (selectedRim === vehicleConfigs.vehicles[currentVehicle.id].rim)
      rimPrice = 0;
    else {
      rimPrice = vehicleConfigs.wheels.rims[selectedRim].price;
    }
    if (selectedTyre === vehicleConfigs.vehicles[currentVehicle.id].tire)
      tyrePrice = 0;
    else {
      tyrePrice = vehicleConfigs.wheels.tires[selectedTyre].price;
    }
    const addonPriceCopy = { ...addonsPriceConfig };
    addonPriceCopy.rim = vehicleConfigs.wheels.rims[selectedRim];
    addonPriceCopy.tire = vehicleConfigs.wheels.tires[selectedTyre];
    addonPriceCopy.rim.price = rimPrice;
    addonPriceCopy.tire.price = tyrePrice;
    setAddonsPriceConfig(addonPriceCopy);
  }, [currentVehicle]);

  // Camera.
  const [cameraAutoRotate, setCameraAutoRotate] = useState(false);

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

  const urlParams = new URLSearchParams(window.location.search);
  const isNewCar = urlParams.get("isNewCar");

  if (submitRegNo === false && !flag) {
    if (!isNewCar) {
      return (
        <>
          <div id="carRegistrationForm">
            <fieldset>
              <label
                for="exampleInputEmail1"
                className="form-label mt-6"
                style={{ color: "#32fbe2" }}
              >
                Enter Vehicle Registration Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="Registration Number"
              />
              <button
                className="btn btn-light btn-lg"
                onClick={() => {
                  setSubmitRegNo(true);
                }}
              >
                Submit
              </button>
            </fieldset>
          </div>
        </>
      );
    }
  }

  return (
    <div className="App">
      <div>
        <Header />
        <Canvas
          currentVehicle={currentVehicle}
          setVehicle={setVehicle}
          cameraAutoRotate={cameraAutoRotate}
          isBuyCar={flag}
        />
        <Editor
          addonsPriceConfig={addonsPriceConfig}
          isBuyCar={flag}
          isNewCar={isNewCar}
          setAddonsPriceConfig={setAddonsPriceConfig}
          isActive={true}
          currentVehicle={currentVehicle}
          setVehicle={setVehicle}
          cameraAutoRotate={cameraAutoRotate}
          setCameraAutoRotate={setCameraAutoRotate}
        />
      </div>
      {flag && (
        <div
          style={{
            width: "calc(100vw - 300px)",
            zIndex: 10,
            position: "absolute",
            top: "65%",
            right: 0,
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
