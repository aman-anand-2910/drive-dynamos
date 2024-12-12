import React, { useEffect, useState } from "react";
import { NeonCarouselContainer, NeonImage, NeonImageContainer, NeonNextButtonArr, NeonPrevButtonArr } from "../../styles";

const NeonCarousel = ({
  images,
  setBodyType,
  setTransmission,
  setFuelType,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    setBodyType(images[currentIndex]);
    setTransmission(images[currentIndex]);
    setFuelType(images[currentIndex]);
  }, [currentIndex]);

  return (
    <NeonCarouselContainer>
      <NeonPrevButtonArr onClick={prevSlide}>{"<"}</NeonPrevButtonArr>
      <NeonImageContainer
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <NeonImage
            key={index}
            src={image.img}
            alt={`slide-${index}`}
            scale={image.value === "MANUAL" || image.value === "AUTOMATIC"}
          />
        ))}
      </NeonImageContainer>
      <NeonNextButtonArr onClick={nextSlide}>{">"}</NeonNextButtonArr>
    </NeonCarouselContainer>
  );
};

export default NeonCarousel;
