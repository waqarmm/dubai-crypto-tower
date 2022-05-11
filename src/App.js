import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./input.css";
import {
  Layout,
  Home,
  UpTownTower,
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
          <Route path="/uptown-tower" element={<UpTownTower />} />
          <Route
            path="/uptown-tower/office-leasing"
            element={<OfficeLeasing />}
          />
          <Route path="/uptown-tower/so-residences" element={<SOResidence />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
