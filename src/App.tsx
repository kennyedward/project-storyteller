
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import Showcase from "./pages/Showcase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to force dark mode initially
const ThemeForcer = () => {
  useEffect(() => {
    // Apply dark mode class to html on initial load
    document.documentElement.classList.add('dark');
  }, []);
  
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ThemeForcer />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
            <Route path="/case-study/:slug/showcase/:showcase" element={<Showcase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
