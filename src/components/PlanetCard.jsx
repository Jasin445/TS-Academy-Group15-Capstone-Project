import { useState } from "react";
import FALLBACK_IMAGE from "../assets/images/fallback-img.png";

const PlanetCard = ({ planet, distanceFromSun, image }) => {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <figure className="planet-card">
      <div className="bg-sync">
        <img
          src={imgSrc}
          alt={planet}
          className="planet-img"
          width={400}
          height={225}
          onError={() => setImgSrc(FALLBACK_IMAGE)}
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
