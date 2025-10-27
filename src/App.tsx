import React from "react";
// import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Footer from "./components/Footer/Footer";


//devices

import Device from "./pages/Devices/Devices";
import FirstDevice from "./pages/Devices/DevicesInfo/FirstDevice";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Layout><Home/></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
        <Route path="Devices" element={<Layout><Device /></Layout>} />

        
        <Route path="/devices/first" element={<Layout><FirstDevice /></Layout>} />

        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
