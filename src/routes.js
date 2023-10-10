import { BrowserRouter, Route, Routes } from "react-router-dom";

import VHome from "./views/v-home/v-home";
import VDashing from "./views/models/dashing/v-dashing";
import VX70 from "./views/models/x70/v-x70";
import VX70Plus from "./views/models/x70-plus/v-x70-plus";
import VX90Plus from "./views/models/x90-plus/v-x90-plus";
import VLocations from "./views/v-locations/v-locations";
import VAfterSales from "./views/v-after-sales/v-after-sales";
import VNews from "./views/v-news/v-news";
import VContact from "./views/v-contact/v-contact";
import VQuotation from "./views/v-quotation/v-quotation";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VHome />} />
        <Route path="/modelos/dashing" element={<VDashing />} />
        <Route path="/modelos/x70" element={<VX70 />} />
        <Route path="/modelos/x70-plus" element={<VX70Plus />} />
        <Route path="/modelos/x90-plus" element={<VX90Plus />} />
        <Route path="/concesionarios" element={<VLocations />} />
        <Route path="/post-venta" element={<VAfterSales />} />
        <Route path="/novedades" element={<VNews />} />
        <Route path="/contacto" element={<VContact />} />
        <Route path="/cotizar/:model" element={<VQuotation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
