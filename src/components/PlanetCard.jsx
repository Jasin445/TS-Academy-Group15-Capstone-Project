const PlanetCard = ({ planet, distanceFromSun, image }) => {
  return (
    <figure className="planet-card">
      <div className="bg-sync">
        <img
          src={image}
          alt={planet}
          className="planet-img"
          loading="lazy"
          decoding="async"
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
