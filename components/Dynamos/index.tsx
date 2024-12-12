import React, { useEffect, useRef, useState } from "react";
import * as Styles from "./styles";
import  NeonCarousel  from "./ButtonWithSound/ImageCarousel";
import NeonButtonWithSound from "./ButtonWithSound";

const Dynamoscomponent = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [budget, setBudget] = useState(3000000); // Default budget value: ₹3 Lakhs
  const [flow, setFlow] = useState(0);
  const [bodyType, setBodyType] = useState(null);
  const [transmission, setTransmission] = useState(null);
  const [fuelType, setFuelType] = useState(null);

  const bgAudioRef = useRef(null);

  useEffect(() => {
    // Play the audio as soon as the component mounts
    if (bgAudioRef.current) {
      bgAudioRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  const bodyTypeUrls = [
    { value: "HATCHBACK", img: "../../assets/images/bodytype-1.webp" },
    { value: "SUV", img: "../../assets/images/bodytype-2.webp" },
    { value: "SEDAN", img: "../../assets/images/bodytype-3.webp" },
  ];

  const transmissionUrls = [
    { value: "MANUAL", img: "../../assets/images/manual.png" },
    { value: "AUTOMATIC", img: "../../assets/images/automatic.png" },
  ];

  const fuelUrls = [
    { value: "DIESEL", img: "../../assets/images/diesel.webp" },
    { value: "CNG", img: "../../assets/images/cng.webp" },
  ];

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value));
  };

  const handleStartClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setFlow(1);
    setShowButton(false);
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(()=>{
    if(flow === 5){
      {
        window.location.href = "/customize";
      }
    }
  },[flow])

  const handleNextClick = () => {
    setFlow((prevFlow) => prevFlow + 1);
    console.log(budget);
    console.log(bodyType?.value);
    console.log(transmission?.value);
  };

  const handlePrevClick = () => {
    if (flow >= 0) {
      setFlow((prevFlow) => prevFlow - 1);
    }
    if (flow === 0) {
      setShowButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Styles.PageWrapper isZoomed={isZoomed}>
      <audio
        ref={bgAudioRef}
        src="../../assets/images/bgsound.mp3"
        loop
        preload="auto"
        autoPlay
      />
      <Styles.BackgroundVideo autoPlay loop muted>
        <source src="../../assets/images/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Styles.BackgroundVideo>
      <Styles.Header>Let's build your car</Styles.Header>
      {showButton && (
        <NeonButtonWithSound
          showButton={showButton}
          handleNextClick={null}
          handleStartClick={handleStartClick}
        />
      )}
      {!showButton && flow === 1 && (
        <Styles.SliderContainer ref={sliderRef}>
          <Styles.HeaderQuestion>Select Your Budget</Styles.HeaderQuestion>
          <Styles.BudgetValue>
            within ₹{(budget / 100000).toFixed(0)} Lakhs
          </Styles.BudgetValue>
          <Styles.Slider
            type="range"
            min={300000}
            max={10000000}
            step={100000}
            value={budget}
            onChange={handleSliderChange}
          />
        </Styles.SliderContainer>
      )}

      {!showButton && flow === 2 && (
        <Styles.SliderContainer ref={sliderRef}>
          <Styles.HeaderQuestion>Select the Body Type</Styles.HeaderQuestion>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <NeonCarousel
              images={bodyTypeUrls}
              setBodyType={setBodyType}
              setTransmission={setTransmission}
              setFuelType={setFuelType}
            />
          </div>
        </Styles.SliderContainer>
      )}

      {!showButton && flow === 3 && (
        <Styles.SliderContainer ref={sliderRef}>
          <Styles.HeaderQuestion>Select the transmission</Styles.HeaderQuestion>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <NeonCarousel
              images={transmissionUrls}
              setBodyType={setBodyType}
              setTransmission={setTransmission}
              setFuelType={setFuelType}
            />
          </div>
        </Styles.SliderContainer>
      )}

      {!showButton && flow === 4 && (
        <Styles.SliderContainer ref={sliderRef}>
          <Styles.HeaderQuestion>Select the fuel type</Styles.HeaderQuestion>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <NeonCarousel
              images={fuelUrls}
              setBodyType={setBodyType}
              setTransmission={setTransmission}
              setFuelType={setFuelType}
            />
          </div>
        </Styles.SliderContainer>
      )}

      {!showButton && flow <= 4 && (
        <NeonButtonWithSound
          showButton={showButton}
          handleNextClick={handleNextClick}
          handleStartClick={null}
          handlePrevClick={handlePrevClick}
        />
      )}
    </Styles.PageWrapper>
  );
};

export default Dynamoscomponent;
