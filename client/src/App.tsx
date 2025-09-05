  import { Switch, Route, Router as WouterRouter } from "wouter";
  import { queryClient } from "./lib/queryClient";
  import { QueryClientProvider } from "@tanstack/react-query";
  import { Toaster } from "@/components/ui/toaster";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import Home from "@/pages/home";
  import NotFound from "@/pages/not-found";
  import MenuPage from "@/pages/menu";
  import VuonBiaBVD from "./pages/VuonbiaBVD";
  import SinhNhatPage from "./pages/SinhNhat";
import VuonBiaLTT from "./pages/VuonBiaLTT";


  function Router() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/menu" component={MenuPage} />
         <Route path="/sinh-nhat" component={SinhNhatPage} />
     
        {/* Các chi nhánh cụ thể */}
        <Route path="/vuon-bia-ly-thai-to" component={VuonBiaLTT} />
        <Route path="/vuon-bia-bui-van-danh" component={VuonBiaBVD} />

        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    );
  }
  
  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          {/* Bọc Router của wouter để cung cấp context cho useNavigate */}
          <WouterRouter>
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }
  
  export default App;
  
