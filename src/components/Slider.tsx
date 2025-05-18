import { useState } from "react";

type SliderProps = {
  images: string[];
};

export default function Slider({ images }: SliderProps) {
  // Bislang würde alles was wir machen, auch auf dem Server klappen
  //   das hier funktioniert nur bedingt auf dem Server
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <div className={"ButtonBar"}>
        <button
          disabled={currentImage === 0}
          onClick={() => setCurrentImage(currentImage - 1)}
        >
          Prev
        </button>
        <button
          disabled={currentImage >= images.length - 1}
          onClick={() => setCurrentImage(currentImage + 1)}
        >
          Next
        </button>
      </div>
      <img src={`/images/${images[currentImage]}`} alt={images[currentImage]} />
    </div>
  );
}
