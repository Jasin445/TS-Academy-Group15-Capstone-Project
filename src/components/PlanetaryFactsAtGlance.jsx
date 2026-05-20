import React from "react";
import planetData from "../planetData";

// Separate data safely based on planet groupings
const terrestrialPlanets = planetData.filter((p) =>
  ["Mercury", "Venus", "Earth", "Mars"].includes(p.name),
);

const gasGiants = planetData.filter((p) =>
  ["Jupiter", "Saturn"].includes(p.name),
);

const iceGiants = planetData.filter((p) =>
  ["Uranus", "Neptune"].includes(p.name),
);

const dwarfPlanets = [
  {
    name: "Pluto",
    mass: "0.0130",
    diameter: "2,376",
    density: "1,850",
    gravity: "0.7",
  },
];

const PlanetaryFactsAtGlance = () => {
  return (
    <section className="solar-system-table">
      <h2>Planetary Facts at a Glance</h2>
      <p>
        Below is a comparative table of major planets in our solar system. The
        data highlights key physical properties used by astronomers and
        researchers worldwide.
      </p>
      <b>
        Data about the planets of our solar system (Planetary facts taken from
        Nasa)
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
            {/* Terrestrial Planets */}
            {terrestrialPlanets.map((planet, index) => (
              <tr key={planet.name}>
                {index === 0 && (
                  <th rowSpan={terrestrialPlanets.length} colSpan="2">
                    Terrestrial
                    <br />
                    Planets
                  </th>
                )}
                <td>{planet.name}</td>
                <td>{planet.mass}</td>
                <td>{planet.diameter}</td>
                <td>{planet.density}</td>
                <td>{planet.gravity}</td>
              </tr>
            ))}

            {/* Jovian — Gas Giants */}
            {gasGiants.map((planet, index) => (
              <tr key={planet.name}>
                {index === 0 && (
                  <th rowSpan={gasGiants.length + iceGiants.length}>
                    Jovian
                    <br />
                    Planets
                  </th>
                )}
                {index === 0 && <th rowSpan={gasGiants.length}>Gas Giants</th>}
                <td>{planet.name}</td>
                <td>{planet.mass}</td>
                <td>{planet.diameter}</td>
                <td>{planet.density}</td>
                <td>{planet.gravity}</td>
              </tr>
            ))}

            {/* Jovian — Ice Giants */}
            {iceGiants.map((planet, index) => (
              <tr key={planet.name}>
                {index === 0 && <th rowSpan={iceGiants.length}>Ice Giants</th>}
                <td>{planet.name}</td>
                <td>{planet.mass}</td>
                <td>{planet.diameter}</td>
                <td>{planet.density}</td>
                <td>{planet.gravity}</td>
              </tr>
            ))}

            {/* Dwarf Planets */}
            {dwarfPlanets.map((planet, index) => (
              <tr key={planet.name}>
                {index === 0 && (
                  <th colSpan="2" rowSpan={dwarfPlanets.length}>
                    Dwarf Planets
                  </th>
                )}
                <td>{planet.name}</td>
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
  );
};

export default PlanetaryFactsAtGlance;
