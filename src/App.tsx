import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Pages
import APIDocumentationAndTesting from './pages/APIDocumentationAndTesting';
import Blogging from './pages/Blogging';
import DocumentationWithAI from './pages/DocumentationWithAI';
import SimpleWebsite from './pages/SimpleWebsite';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Testimonials />
              <CTA />
            </>
          }
        />

        <Route path="/api-documentation" element={<APIDocumentationAndTesting />} />
        <Route path="/blogging" element={<Blogging />} />
        <Route path="/documentationwithai" element={<DocumentationWithAI />} />
        <Route path="/simple-website" element={<SimpleWebsite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
