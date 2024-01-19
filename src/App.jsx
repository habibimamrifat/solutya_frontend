import "./App.css";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import ExperienceField from "./components/ExperienceField";
import Navbar from "./components/Navbar";
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
      </div>
    </>
  );
}

export default App;
