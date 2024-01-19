import "./App.css";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import ExperienceField from "./components/ExperienceField";
import FeaturedProject from "./components/FeaturedProject";
import Navbar from "./components/Navbar";
import OurWorkProcess from "./components/OurWorkProcess";
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
      </div>
    </>
  );
}

export default App;
