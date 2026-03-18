import { BrowserRouter } from "react-router-dom";

import TopNav from "./components/Header/TopNav";
import SideBar from "./components/Sidebar/SideBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>

      <TopNav />

      <div style={{ display: "flex" }}>

        <SideBar />

        <div style={{ padding: "20px", flex: 1 }}>
          <AppRoutes />
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;