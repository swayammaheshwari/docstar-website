import { Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
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
import { Pricing } from "./components/Pricing";
import { WhiteLabelling } from "./pages/WhiteLabelling";
import { SsoAuthentication } from "./pages/SsoAuthentication";
import PrivacyPolicy from "./pages/privacypolicy";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop/>
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
        <Route path="/documentation-with-ai" element={<DocumentationWithAI />} />
        <Route path="/simple-website" element={<SimpleWebsite />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/white-labelling" element={<WhiteLabelling />} />
        <Route path="/sso-authentication" element={<SsoAuthentication />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
