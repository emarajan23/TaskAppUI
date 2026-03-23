import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;