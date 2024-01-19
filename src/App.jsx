import "./App.css";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Clintsaying from "./components/Clintsaying";
import ExperienceField from "./components/ExperienceField";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import OurWorkProcess from "./components/OurWorkProcess";
import Ourblog from "./components/Ourblog";

import Services from "./components/Services";

function App() {
  return (
    <>
      <div>
        <div className="fixed top-0 z-10 w-full">
        <Navbar />
        </div>
       
        <Banner />
        <ExperienceField/>
        <Services/>
        <Clients/>
        <FeaturedProject/>
        <OurWorkProcess/>
        <Ourblog/>
        <OurTeam></OurTeam>
        <Clintsaying/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
