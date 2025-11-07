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
import SuccessPay from "./pages/SuccessPay/SuccessPay";



//devices

import Device from "./pages/Devices/Devices";
import FirstDevice from "./pages/Devices/DevicesInfo/FirstDevice";
import SecDevice from "./pages/Devices/DevicesInfo/SecDevice";
import ThirdDevice from "./pages/Devices/DevicesInfo/ThirdDevice";
import FourthDevice from "./pages/Devices/DevicesInfo/FourthDevice";
import FifthhDevice from "./pages/Devices/DevicesInfo/FifthDevice";
import SixthDevice from "./pages/Devices/DevicesInfo/SixthDevice";

//kosár
import { KosarProvider } from "./Kosar/KosarContext";


function App() {
  return (
    
      <BrowserRouter>
      <KosarProvider>

      <Routes>
        <Route path="/Home" element={<Layout><Home/></Layout>} />
        <Route path="/Services" element={<Layout><Service /></Layout>} />
        <Route path="About" element={<Layout><Home/></Layout>} />
        <Route path="Contact" element={<Layout><Home/></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
        <Route path="/Devices" element={<Layout><Device /></Layout>} />
        <Route path="/Payment" element={<Layout> <Payment/></Layout>}></Route>
        <Route path="/SuccessPay" element={<Layout><SuccessPay/></Layout>} />



        {/*Devices */}
        <Route path="/Devices/first" element={<Layout><FirstDevice /></Layout>} />
        <Route path="/Devices/second" element={<Layout><SecDevice /></Layout>} />
        <Route path="Devices/third" element={<Layout><ThirdDevice/></Layout> } />
        <Route path="Devices/fourth" element={<Layout><FourthDevice/></Layout>}/>
        <Route path="Devices/fifth" element={<Layout><FifthhDevice/></Layout>}/>
        <Route path="Devices/sixth" element={<Layout><SixthDevice/></Layout>}/>



        
      </Routes>

      </KosarProvider>
    </BrowserRouter>
    
  );
}

export default App;
