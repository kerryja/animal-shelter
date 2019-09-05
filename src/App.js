import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dogs from "./components/Dogs";
import DogDetails from "./components/DogDetails";
import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Adopt from "./components/Adopt";
import AdoptionGuidelines from "./components/AdoptionGuidelines";
import Volunteer from "./components/Volunteer";
import Resources from "./components/Resources";
import Intros from "./components/Intros";
import CrateTraining from "./components/CrateTraining";

function App() {
  return (
    <div className="App">
      <header>
        <TopNav />
        <Navbar />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/dogs" component={Dogs} />
        <Route path="/dog/:id" component={DogDetails} />
        <Route path="/adopt" component={Adopt} />
        <Route path="/adoption-guidelines" component={AdoptionGuidelines} />
        <Route path="/adoption-application" component={Adopt} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/volunteer-application" component={Volunteer} />
        <Route path="/resources" component={Resources} />
        <Route path="/intros" component={Intros} />
        <Route path="/crate-training" component={CrateTraining} />
      </main>
    </div>
  );
}

export default App;
