import { useState } from "react";
import SignIn from "./pages/SignIn";
import Nav from "./components/nav-bar/nav";
import SignUp from "./components/signin-signup/SignUpForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <SignUp />
    </div>
  );
}

export default App;
