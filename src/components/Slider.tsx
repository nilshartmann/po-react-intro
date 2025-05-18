import { useState } from "react";

type SliderProps = {
  images: string[];
};

export default function Slider({ images }: SliderProps) {
  const currentImage = 0;

  return (
    <div>
      <div className={"ButtonBar"}>
        <button>Prev</button>
        <button>Next</button>
      </div>
      <img src={`/images/${images[currentImage]}`} alt={"..."} />
    </div>
  );
}
