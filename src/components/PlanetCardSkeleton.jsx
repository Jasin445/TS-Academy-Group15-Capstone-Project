const PlanetCardSkeleton = () => {
  return (
    <figure className="planet-card">
      <div className="bg-sync" style={{ background: "#e0e0e0", animation: "pulse 1.5s ease-in-out infinite" }} />
      <figcaption className="planet-info">
        <div style={{
          height: "16px",
          width: "60%",
          borderRadius: "8px",
          background: "#e0e0e0",
          margin: "0 auto 8px",
          animation: "pulse 1.5s ease-in-out infinite"
        }} />
        <div style={{
          height: "16px",
          width: "80%",
          borderRadius: "8px",
          background: "#e0e0e0",
          margin: "0 auto",
          animation: "pulse 1.5s ease-in-out infinite"
        }} />
      </figcaption>
    </figure>
  );
};

export default PlanetCardSkeleton;