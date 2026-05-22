import { useState, useMemo, useEffect } from "react";

const usePlanetDisplay = (planetsData) => {
  const [displayCount, setDisplayCount] = useState(9);

  useEffect(() => {
    if (!planetsData) return;
    planetsData.forEach((planet) => {
      const img = new Image();
      img.src = planet.image;
    });
  }, [planetsData]);

  useEffect(() => {
    const updateCount = () => {
      setDisplayCount(window.innerWidth <= 1024 ? 8 : 9);
    };

    updateCount();

    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const visiblePlanets = useMemo(() => {
    if (!planetsData) return [];
    return planetsData.slice(0, displayCount);
  }, [planetsData, displayCount]);

  return {
    visiblePlanets,
    displayCount,
  };
};

export default usePlanetDisplay;
