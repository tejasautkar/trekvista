import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Routenav from "./Routenav";

import Footer from "./Components/Footer";
import SocialMedia from "./Components/SocialMedia";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routenav />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
