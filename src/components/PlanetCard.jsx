
// const PlanetCard = () => {
//   return (
//     <div>PlanetCard</div>
//   )
// }

// export default PlanetCard

import React from 'react';

const PlanetCard = ({ name, distance_from_sun, image }) => {
  return (
    <figure className="planet-card">
      <img 
        src={image} 
        alt={name}
        className="planet-image"
      />
      <figcaption className="planet-info">
        <h3>{name}</h3>
        <p>{distance_from_sun} million km from the Sun</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;