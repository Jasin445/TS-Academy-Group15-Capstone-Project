import { useState } from "react";
import FALLBACK_IMAGE from "../assets/images/fallback-img.png";

const PlanetCard = ({ planet, distanceFromSun, image }) => {
  const [imgSrc, setImgSrc] = useState(image);
    const [hasError, setHasError] = useState(false);


  return (
    <figure className="planet-card">
      <div
        className="bg-sync "
        style={hasError ? { backgroundColor: "#f0f0f0" } : {}}
      >
        <img
          src={imgSrc}
          alt={planet}
          className={`planet-img ${hasError ? "object-fit" : ""}`}
          width={400}
          height={225}
          fetchpriority="high"
          onError={() => {
            setImgSrc(FALLBACK_IMAGE);
            setHasError(true);
          }}
        />
      </div>
      <figcaption className="planet-info">
        <h3>{planet}</h3>
        <p>{distanceFromSun} million km from the Sun</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;
