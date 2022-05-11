import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./input.css";
import {
  Layout,
  Home,
  CryptoTower,
  OfficeLeasing,
  SOResidence,
  Creator,
  Locations,
  ContactUs,
} from "./Containers";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creators" element={<Creator />} />
          <Route path="/crypto-tower" element={<CryptoTower />} />
          <Route
            path="/crypto-tower/office-leasing"
            element={<OfficeLeasing />}
          />
          <Route path="/crypto-tower/so-residences" element={<SOResidence />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
