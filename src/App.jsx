import { useState } from "react";
import "./styles/App.css";
import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowPlanetaryDataHelps from "./components/HowPlanetaryDataHelps";
import DifferenceBetweenPlanets from "./components/DifferenceBetweenPlanets";
import PlanetaryFactsAtGlance from "./components/PlanetaryFactsAtGlance";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowPlanetaryDataHelps />
        <DifferenceBetweenPlanets />
        <PlanetaryFactsAtGlance />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
