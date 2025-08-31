
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import GetHelp from "./pages/GetHelp";
import Contact from "./pages/Contact";
import GetSupport from "./pages/GetSupport";
import EventsBlog from "./pages/EventsBlog";
import EventDetail from "./pages/EventDetail";
import PastEventDetail from "./pages/PastEventDetail";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/next"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Analytics/>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-support" element={<GetSupport />} />
          <Route path="/events-blog" element={<EventsBlog />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/past/:id" element={<PastEventDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
