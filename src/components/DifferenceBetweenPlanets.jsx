import { useEffect } from "react";
import useFetchPlanetsData from "../hooks/use-fetch-planet-data";
import PlanetCard from "./PlanetCard";
import PlanetCardSkeleton from "./PlanetCardSkeleton";
import ErrorScreen from "./PlanetErrorScreen";

const DifferenceBetweenPlanets = () => {
  const { planetsData, isLoading, error, setReftechTrigger } =
    useFetchPlanetsData();

  useEffect(() => {
    if (!planetsData) return;
    planetsData.forEach((planet) => {
      const img = new Image();
      img.src = planet.image;
    });
  }, [planetsData]);

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
          {isLoading ? (
            Array.from({ length: 9 }).map((_, i) => (
              <PlanetCardSkeleton key={i} />
            ))
          ) : error ? (
            <div className="error-wrapper">
              <ErrorScreen
                onRetry={() => setReftechTrigger((prev) => prev + 1)}
              />
            </div>
          ) : (
            planetsData?.map((planet) => (
              <PlanetCard key={planet.planet} {...planet} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DifferenceBetweenPlanets;
