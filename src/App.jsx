import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800, // Reduzindo um pouco a velocidade
  speedAsDuration: true,
  offset: 50, // Adicionando offset para compensar a navbar fixa
  easing: 'easeInOutCubic', // Adicionando easing para suavizar
  updateURL: false, // Evita que atualize a URL durante o scroll
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>


      <Navigation />
      <Header data={landingPageData.Header} />

      <div className="teste-p">
        {/* <Features data={landingPageData.Features} /> */}

        <About data={landingPageData.About} />
        {/* <Services data={landingPageData.Services} /> */}
        <Gallery data={landingPageData.Gallery} />
        {/* <Testimonials data={landingPageData.Testimonials} /> */}
        <Team data={landingPageData.Team} />

      </div>

      <Contact data={landingPageData.Contact} />
    </div>


  );
};

export default App;
