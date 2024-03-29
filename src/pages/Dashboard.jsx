import { List } from "../components/List";
import { useState } from "react";

function Dashboard(props) {
  const {
    appartments,
    deleteAppartment,
    updateList,
    handleAddFavourites,
    favouriteIcon,
    favourites,
    deleteFavourites,
  } = props;
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [property, setProperty] = useState("");
  const [name, setName] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const appartmentIds = appartments.map((apt) => apt.id);
    const maxId = Math.max(...appartmentIds);

    const newAppartment = {
      id: maxId + 1,
      country: country,
      city: city,
      name: name,
      description: description,
      property_type: property,
      accommodates: capacity,
      price: price,
      picture_url: {
        url: image,
      },
    };

    const newList = [newAppartment, ...appartments];
    updateList(newList);

    setCity("");
    setCountry("");
    setImage("");
    setCapacity(0);
    setPrice(0);
    setDescription("");
    setProperty("");
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="page">
        <div className="form">
          <div className="formContent">
            <label>
              City:
              <input
                required
                name="city"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </label>
            <br />
            <label>
              Country:
              <input
                required
                name="country"
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </label>
            <br />
            <label>
              Name:
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="formContent">
            <label>
              Image:
              <input
                required
                name="image"
                type="url"
                placeholder="Image url"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </label>
            <br />
            <label>
              Property type:
              <select
                required
                name="property"
                value={property}
                onChange={(e) => {
                  setProperty(e.target.value);
                }}
              >
                <option value="">-- None --</option>
                <option value="Apartment">Apartment</option>
                <option value="Loft">Loft</option>
                <option value="House">House</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <br />
            <label>
              Capacity:
              <input
                name="capacity"
                type="number"
                placeholder="Capacity"
                value={capacity}
                min="1"
                onChange={(e) => {
                  setCapacity(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="formContent">
            <label>
              Price:
              <input
                name="price"
                type="number"
                placeholder="Price"
                value={price}
                min="1"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                name="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        <button type="submit">Add apartment</button>

      </form>

      <div className="list">
        <List
          appartments={appartments}
          deleteAppartment={deleteAppartment}
          handleAddFavourites={handleAddFavourites}
          favouriteIcon={favouriteIcon}
          favourites={favourites}
          deleteFavourites={deleteFavourites}
        />
      </div>
    </>
  );
}

export default Dashboard;
