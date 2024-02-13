import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import Favourites from "./pages/Favourites";

function App() {
  const [appartments, setAppartments] = useState(data.results);

  const [favourites, setFavourites] = useState([]);
  const [favouriteIcon, setFavouriteIcon] = useState("hidden");

  function deleteAppartment(id) {
    let filteredList = appartments.filter((item) => {
      return item.id !== id;
    });

    let filteredFavourites = favourites.filter((item) => {
      return item.id !== id;
    });

    setAppartments(filteredList);
    setFavourites(filteredFavourites);
  }

  const updateList = (newList) => {
    setAppartments(newList);
  };

  function handleAddFavourites(apartmentId) {
    const newList = [apartmentId, ...favourites];
    setFavourites(newList);
    setFavouriteIcon("sidebar");
  }

  function deleteFavourites(id) {
    let filteredList = favourites.filter((item) => {
      return item.id !== id;
    });
    setFavouriteIcon(filteredList);
  }
  return (
    <>
      <Navbar name="Home Sweet Home" />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              updateList={updateList}
              appartments={appartments}
              deleteAppartment={deleteAppartment}
              handleAddFavourites={handleAddFavourites}
              favouriteIcon={favouriteIcon}
              favourites={favourites}
              deleteFavourites={deleteFavourites}
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
        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              deleteAppartment={deleteAppartment}
              favouriteIcon={favouriteIcon}
              handleAddFavourites={handleAddFavourites}
              deleteFavourites={deleteFavourites}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
