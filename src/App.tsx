import React from "react";
// import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Footer from "./components/Footer/Footer";
import Service from "./pages/Services/Service";

//paymnent
import Payment from "./pages/Payment/Payment";




//devices

import Device from "./pages/Devices/Devices";
import FirstDevice from "./pages/Devices/DevicesInfo/FirstDevice";

//kosár
import { KosarProvider } from "./Kosar/KosarContext";

function App() {
  return (
    
      <BrowserRouter>
      <KosarProvider>

      <Routes>
        <Route path="/Home" element={<Layout><Home/></Layout>} />
        <Route path="/Services" element={<Layout><Service /></Layout>} />
        <Route path="/Devices/first" element={<Layout><FirstDevice /></Layout>} />
        <Route path="About" element={<Layout><Home/></Layout>} />
        <Route path="Contact" element={<Layout><Home/></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
        <Route path="/Devices" element={<Layout><Device /></Layout>} />
        <Route path="/Payment" element={<Layout> <Payment/></Layout>}></Route>

        
      </Routes>

      </KosarProvider>
    </BrowserRouter>
    
  );
}

export default App;
