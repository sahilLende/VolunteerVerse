import { useState } from "react";
import SignIn from "./pages/SignIn";
import Nav from "./components/nav-bar/nav";
import SignUp from "./components/signin-signup/SignUpForm";
import "./App.css";
import OpportunititesCatalouge from "./components/opportunities/OpportunityiesCatalouge";
import TaskRequest from "./components/taskRequests/TaskRequest";
import TaskRequestSwiper from "./components/taskRequests/TaskRequestSwpier";
function App() {
  return (
    <div className="App">
      <Nav />
      <TaskRequestSwiper />
      <OpportunititesCatalouge />
    </div>
  );
}

export default App;
