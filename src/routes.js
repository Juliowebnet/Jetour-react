import { BrowserRouter, Route, Routes } from "react-router-dom";

import VHome from "./views/v-home/v-home";
import VDashing from "./views/models/dashing/v-dashing";
import VLocations from './views/v-locations/v-location';
import VAfterSales from './views/v-after-sales/v-after-sales';
import VNews from './views/v-news/v-news';
import VContact from './views/v-contact/v-contact';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VHome />} />
        <Route path="/modelos/dashing" element={<VDashing />} />
        <Route path="/concesionarios" element={<VLocations/>} />
        <Route path="/post-venta" element={<VAfterSales/>} />
        <Route path="/novedades" element={<VNews/>} />
        <Route path="/contacto" element={<VContact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
