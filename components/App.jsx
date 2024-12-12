import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import vehicleConfigs from '../vehicleConfigs';
import Header from './Header';
import Editor from './Editor';
import Canvas from './Canvas';
import Actions from './Actions';
import VehicleTitle from './VehicleTitle';
import Dynamoscomponent from './Dynamos';

function Customize() {
    // Saved vehicles.
    const [savedVehicles, setSavedVehicles] = useState(() => {
        const localStorageVehicles = localStorage.getItem('savedVehicles');
        return localStorageVehicles ? JSON.parse(localStorageVehicles) : { current: null };
    });

    // On saved Vehicles update.
    useEffect(() => {
        localStorage.setItem('savedVehicles', JSON.stringify(savedVehicles));
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
        const encodedConfig = urlParams.get('config');
        if (encodedConfig) {
            console.log('Loading vehicle from shared URL.');
            const jsonString = decodeURIComponent(encodedConfig);
            const config = JSON.parse(jsonString);
            setVehicle(config);
            setSavedVehicles((prevSavedVehicles) => ({
                ...prevSavedVehicles,
                current: null,
            }));
            window.history.replaceState({}, '', window.location.pathname);
        }
    }, []);

    return (
        <div className="App">
            {/* <Header>
                <VehicleTitle
                    savedVehicles={savedVehicles}
                    setSavedVehicles={setSavedVehicles}
                    setVehicle={setVehicle}
                />
            </Header> */}
            <Canvas
                currentVehicle={currentVehicle}
                setVehicle={setVehicle}
                cameraAutoRotate={cameraAutoRotate}
            />
            <Editor
                isActive={true}
                currentVehicle={currentVehicle}
                setVehicle={setVehicle}
                cameraAutoRotate={cameraAutoRotate}
                // setCameraAutoRotate={setCameraAutoRotate}
            />
            {/* <Actions
                currentVehicle={currentVehicle}
                savedVehicles={savedVehicles}
                setSavedVehicles={setSavedVehicles}
            /> */}
        </div>
    );
}

function Home() {
    return <Dynamoscomponent/>;
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customize" element={<Customize />} />
            </Routes>
        </Router>
    );
}
