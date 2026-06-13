import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import TechLayout from "./app/tech/TechLayout.tsx";
import TechHome from "./app/tech/TechHome.tsx";
import SmartFactory from "./app/tech/SmartFactory.tsx";
import Products from "./app/tech/Products.tsx";
import TechServices from "./app/tech/TechServices.tsx";
import Technologies from "./app/tech/Technologies.tsx";
import AI from "./app/tech/AI.tsx";
import CaseStudies from "./app/tech/CaseStudies.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tech" element={<TechLayout />}>
        <Route index element={<TechHome />} />
        <Route path="smart-factory" element={<SmartFactory />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<TechServices />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="ai" element={<AI />} />
        <Route path="case-studies" element={<CaseStudies />} />
      </Route>
    </Routes>
  </HashRouter>
);
