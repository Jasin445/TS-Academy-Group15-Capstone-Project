import { useState, useEffect } from 'react';
import useToast from './use-toast';


const useFetchPlanetsData = () => {
    const [planetsData, setPlanetsData] = useState(null);
    const {errorToastHandler, loadingToastHandler, successToastHandler, closeToast} = useToast();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    
    const fetchPlanetData = async () => {
        closeToast();
        loadingToastHandler("Fetching planets...")
        setIsLoading(true);
      try {
        const response = await fetch("https://anurella.github.io/json/planets.json");
        if (!response.ok) {
          throw new Error("Failed to fetch planets data");
        }
        successToastHandler("Planets fetched successfully!")
        return response.json();
      } catch (error) {
        closeToast();
        errorToastHandler("Something went wrong while fetching planets!")
        console.error("Error fetching planets:", error);
        throw error;
      }finally {
        setIsLoading(false)
      }
    };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlanetData();
      setPlanetsData(data);
    };

    fetchData();
  }, []);

  return { planetsData, isLoading };
};

export default useFetchPlanetsData;