import { useState } from "react";
import { Box } from "@mui/system";
import Nav from "./components/nav-bar/nav";
import SignUp from "./components/signin-signup/SignUpForm";
import "./App.css";
import UserOverview from "./pages/UserOverview";
import VolHome from "./pages/VolHome";
function App() {
  return (
    <div className="App">
      <Nav />
      <Box sx={{ minWidth: "250px", mr: 5, ml: 5 }}>
        <UserOverview />
      </Box>
    </div>
  );
}

export default App;
