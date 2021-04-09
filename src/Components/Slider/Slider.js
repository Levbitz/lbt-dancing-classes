import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import ImgOne from "../../assets/images/dance/danceone.jpeg";
import ImgTwo from "../../assets/images/dance/dancetwo.jpeg";
import ImgThree from "../../assets/images/dance/dancethree.jpeg";

const items = [{ src: ImgOne }, { src: ImgTwo }, { src: ImgThree }];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        style={{ width: "50%" }}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          style={{ width: "100%", height: "400px" }}
          src={item.src}
          alt={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Slider;
