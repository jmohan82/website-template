import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import JsonData from "../data/phases.json";
import Phase from "../components/Playbook/Phase";
import Design from "../components/Playbook/Design";
import Develop from "../components/Playbook/Develop";
import Maintain from "../components/Playbook/Maintain";
const Playbook = () => {
  const [PhaseContainerData, setPhaseContainerData] = useState({});
  useEffect(() => {
    setPhaseContainerData(JsonData);
  }, []);
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
            <div class="flex flex-col space-y-12 md:w-1/2">
              <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
                What's different about Kloud Waves?
              </h2>
              <h2 className="fsl-h4-title  text-blue-900">Our Playbook.</h2>
              <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Kloud Waves provides all the functionality your team needs,
                without the complexity. Our tailor-made software solutions are
                for your modern digital transformation.
              </p>
            </div>

            <Phase data={PhaseContainerData.Phases} />
          </div>
        </div>
      </div>
      <Design className="Design" id="Design" />
      <Develop className="Develop" id="Develop" />
      <Maintain className="Maintain" id="Maintain" />
      <Footer />
    </>
  );
};

export default Playbook;
