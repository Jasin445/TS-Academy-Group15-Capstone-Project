import React from 'react';
import planetData from '../planetData';

const PlanetaryFactsAtGlance = () => {
   // Separate data safely based on planet groupings
  const terrestrialPlanets = planetData.filter(p => 
    ["Mercury", "Venus", "Earth", "Mars"].includes(p.name)
  );
  
  const jovianPlanets = planetData.filter(p => 
    ["Jupiter", "Saturn", "Uranus", "Neptune"].includes(p.name)
  );
  return (
     <section className="solar-system-table">
      <h2>Planetary Facts at a Glance</h2>
      <p>
        Below is a comparative table of major planets in our solar system.
        The data highlights key physical properties used by astronomers and
        researchers worldwide.
      </p>
      <b>
        Data about the planets of our solar system (Planetary facts taken from NASA)
      </b>
      
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th colSpan="2"></th>
              <th>Name</th>
              <th>Mass (10²⁴kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m³)</th>
              <th>Gravity (m/s²)</th>
            </tr>
          </thead>
          <tbody>
            {/* Terrestrial Category Row */}
            {terrestrialPlanets.map((planet, index) => (
              <tr key={planet.name}>
                {index === 0 && (
                  <th rowSpan="4" colSpan="2" className="category-header">
                    Terrestrial Planets
                  </th>
                )}
                <td><strong>{planet.name}</strong></td>
                <td>{planet.mass}</td>
                <td>{planet.diameter}</td>
                <td>{planet.density}</td>
                <td>{planet.gravity}</td>
              </tr>
            ))}

            {/* Jovian Category Row */}
            {jovianPlanets.map((planet, index) => (
              <tr key={planet.name}>
                {index === 0 && (
                  <th rowSpan="4" colSpan="2" className="category-header">
                    Jovian Planets
                  </th>
                )}
                <td><strong>{planet.name}</strong></td>
                <td>{planet.mass}</td>
                <td>{planet.diameter}</td>
                <td>{planet.density}</td>
                <td>{planet.gravity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PlanetaryFactsAtGlance