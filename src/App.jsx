import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { List } from "./components/List";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import { EditApartment } from "./pages/EditApartment";
import NotFound from "./pages/NotFound";
import data from "./data/data.json";
import { useState } from "react";

function App() {
  const [appartments, setAppartments] = useState(data.results);

  function deleteAppartment(id) {
    let filteredList = appartments.filter((item) => {
      return item.id !== id;
    });
    setAppartments(filteredList);
  }

  const updateList = (newList) => {
    setAppartments(newList);
  };

  return (
    <>
      <Navbar name="Home Sweet Home" />
      <Sidebar></Sidebar>

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              updateList={updateList}
              appartments={appartments}
              deleteAppartment={deleteAppartment}
            />
          }
        ></Route>
        <Route
          path="/apartments/:aptId"
          element={<ItemDetails appartments={appartments} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/apartments/:aptId/edit"
          element={
            <EditApartment appartments={appartments} updateList={updateList} />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
