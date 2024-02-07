import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { List } from "./components/List";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>

      <Navbar name="Home Sweet Home" />
      <Sidebar></Sidebar>

      <Routes >
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/apartments/:aptId" element={<ItemDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>


      <Footer />
    </>
  );
}

export default App;
