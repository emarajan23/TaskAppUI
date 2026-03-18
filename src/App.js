import { BrowserRouter } from "react-router-dom";
import TopNav from "./components/Header/TopNav";
import SideBar from "./components/Sidebar/SideBar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css"; 

function App() {
  return (
    <BrowserRouter>

      <TopNav />

      <div className="main-container">   

        <SideBar />

        <div className="content">      
          <AppRoutes />
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;