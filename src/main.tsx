import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router";
import Layout from "./app/Layout";
import Home from "./app/pages/Home";
import SmartFactory from "./app/pages/SmartFactory";
import Products from "./app/pages/Products";
import Services from "./app/pages/Services";
import Technologies from "./app/pages/Technologies";
import AI from "./app/pages/AI";
import CaseStudies from "./app/pages/CaseStudies";
import CreativeStudio from "./app/pages/CreativeStudio";
import Contact from "./app/pages/Contact";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/smart-factory" element={<SmartFactory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<Navigate to="/products" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/creative-studio" element={<CreativeStudio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </HashRouter>
);
