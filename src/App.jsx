import { useState } from "react";
import SignIn from "./pages/SignIn";
import Nav from "./components/nav-bar/nav";
import SignUp from "./components/signin-signup/SignUpForm";
import "./App.css";
import VolHome from "./pages/VolHome";
function App() {
  return (
    <div className="App">
      <Nav />
      <VolHome />
    </div>
  );
}

export default App;
