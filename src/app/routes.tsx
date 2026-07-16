import { createBrowserRouter, Outlet } from 'react-router';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import SmartFactory from './pages/SmartFactory';
import Products from './pages/Products';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Technologies from './pages/Technologies';
import TechPlatformDetail from './pages/TechPlatformDetail';
import AI from './pages/AI';
import CaseStudies from './pages/CaseStudies';
import CreativeStudio from './pages/CreativeStudio';
import SolutionDetail from './pages/SolutionDetail';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

function Root() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'smart-factory', Component: SmartFactory },
      { path: 'smart-factory/:slug', Component: SolutionDetail },
      { path: 'products', Component: Products },
      { path: 'products/:slug', Component: ProductDetail },
      { path: 'services', Component: Services },
      { path: 'services/:slug', Component: ServiceDetail },
      { path: 'technologies', Component: Technologies },
      { path: 'technologies/:slug', Component: TechPlatformDetail },
      { path: 'ai', Component: AI },
      { path: 'case-studies', Component: CaseStudies },
      { path: 'creative-studio', Component: CreativeStudio },
      { path: 'contact', Component: Contact },
    ],
  },
]);
