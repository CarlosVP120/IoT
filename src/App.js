import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AddData from "./pages/AddData";
import ToggleButtons from "./pages/ToggleButtons";
import AdminPanel from "./pages/AdminPanel";
import WelcomePage from "./pages/Model";

function App() {

  const Layout = ({ children }) => {
    const { pathname } = useLocation();
    return (
      <div>
        {pathname !== "/" ? <Navbar /> : null}
        <div>{children}</div>
      </div>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/Home" element={<HomeScreen />} />
              <Route path="/AddData" element={<AddData />} />
              <Route path="/ToggleButtons" element={<ToggleButtons />} />
              <Route path="/Admin" element={<AdminPanel />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
