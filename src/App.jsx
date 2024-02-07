import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { List } from "./components/List";
import "./App.css";

function App() {
  return (
    <>
      <Navbar name="Home Sweet Home" />
      <div className="list">
        <List />
      </div>
      <Sidebar></Sidebar>
      <Footer />
    </>
  );
}

export default App;
