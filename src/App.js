import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AddData from "./pages/AddData";
import ToggleButtons from "./pages/ToggleButtons";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/AddData" element={<AddData />} />
            <Route path="/ToggleButtons" element={<ToggleButtons />} />
            <Route path="/Admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
