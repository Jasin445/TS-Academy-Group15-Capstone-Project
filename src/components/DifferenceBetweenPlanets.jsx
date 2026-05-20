import useFetchPlanetsData from "../hooks/use-fetch-planet-data";
import PlanetCard from "./PlanetCard";

const DifferenceBetweenPlanets = () => {
  const { planetsData, isLoading } = useFetchPlanetsData();
  if (isLoading) return <div>Loading....</div>;
  return (
    <section className="photo-proof">
      <div className="planet-diff">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
        <div className="gallery-grid">
          {planetsData?.map((planet) => {
            return <PlanetCard key={planet.planet} {...planet} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferenceBetweenPlanets;
