import VideoPlayer from "./VideoPlayer"

const HowPlanetaryDataHelps = () => {
  return (
     <section className="how-it-works">
          <div className="video-demo">
            <VideoPlayer />
            <div className="text-wrapper">
              <h2>How Planetary Data Helps Us Understand Space</h2>
              <p>
                Planetary science goes beyond images. Comparing{" "}
                <span className="muted-text">mass</span>,{" "}
                <span className="muted-text">diameter</span>,{" "}
                <span className="muted-text">gravity</span>, and{" "}
                <span className="muted-text">density</span>, we gain insight
                into how planets form, behave, and interact within the solar
                system.
              </p>
            </div>
          </div>
        </section>
  )
}

export default HowPlanetaryDataHelps