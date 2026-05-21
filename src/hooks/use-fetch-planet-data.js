import { useState, useEffect, useRef } from "react";

const useFetchPlanetsData = () => {
  const [planetsData, setPlanetsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchTrigger, setReftechTrigger] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current && refetchTrigger === 0) return;
    isMounted.current = true;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://anurella.github.io/json/planets.json",
        );
        if (!response.ok) throw new Error("Failed to fetch planets data");
        const data = await response.json();
        setPlanetsData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refetchTrigger]);

  return { planetsData, isLoading, error, setReftechTrigger };
};

export default useFetchPlanetsData;
