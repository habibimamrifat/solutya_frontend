import "./App.css";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import ExperienceField from "./components/ExperienceField";
import FeaturedProject from "./components/FeaturedProject";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import OurWorkProcess from "./components/OurWorkProcess";
import Ourblog from "./components/Ourblog";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <ExperienceField/>
        <Services/>
        <Clients/>
        <FeaturedProject/>
        <OurWorkProcess/>
        <Ourblog/>
        <OurTeam></OurTeam>
      </div>
    </>
  );
}

export default App;
