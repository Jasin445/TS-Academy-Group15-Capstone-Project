import { galleryImages } from "../lib/data"
import PlanetCard from "./PlanetCard"

const DifferenceBetweenPlanets = () => {
  return (
    <section className="photo-proof">
          <div className="planet-diff">
            <h2>Visualizing the Differences Between Planets</h2>
            <p>
              Each planet in our solar system has unique physical
              characteristics. Visual comparisons help highlight how vastly
              different terrestrial planets are from gas giants and ice giants.
            </p>
            <PlanetCard galleryImages={galleryImages} />
          </div>
        </section>
  )
}

export default DifferenceBetweenPlanets