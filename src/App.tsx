// App.tsx - Updated with all required routes and layout components

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from '@/components/ScrollToTop';

// --- Page Imports ---
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LearnershipsPage from './pages/LearnershipsPage';
import SLPPage from './pages/SLPPage';
import MasterclassesPage from './pages/MasterclassesPage';
import ProgramDetail from './pages/ProgramDetail';
import QuotePage from './pages/QuotePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

// --- Component Imports ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />

                {/* CORE PROGRAMME ROUTES */}
                <Route path="/learnerships" element={<LearnershipsPage />} />
                <Route path="/short-programmes" element={<SLPPage />} />
                <Route path="/masterclasses" element={<MasterclassesPage />} />

                {/* DYNAMIC DETAIL ROUTES */}
                <Route path="/learnerships/:slug" element={<ProgramDetail />} />
                <Route path="/slps/:slug" element={<ProgramDetail />} />
                <Route path="/masterclasses/:slug" element={<ProgramDetail />} />

                {/* UTILITY ROUTES */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/quote" element={<QuotePage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;