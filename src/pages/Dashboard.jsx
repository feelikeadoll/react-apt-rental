import { List } from "../components/List";
import { useState } from "react";
import data from "../data/data.json";

function Dashboard() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [property, setProperty] = useState("");

  const [appartments, setAppartments] = useState(data.results);

  function deleteAppartment(id) {
    let filteredList = appartments.filter((item) => {
      return item.id !== id;
    });
    setAppartments(filteredList);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const appartmentIds = appartments.map((apt) => apt.id);
    const maxId = Math.max(...appartmentIds);

    const newAppartment = {
      id: maxId + 1,
      country: country,
      city: city,
      description: description,
      property_type: property,
      accommodates: capacity,
      price: price,
      picture_url: {
        url: image,
      },
    };

    const newList = [newAppartment, ...appartments];
    setAppartments(newList);

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
      <form onSubmit={handleSubmitForm}>
        <label>
          City:
          <input
            name="city"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </label>
        <label>
          Country:
          <input
            name="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            name="image"
            type="url"
            placeholder="Image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          Property:
          <select
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
        <label>
          Capacity:
          <input
            name="capacity"
            type="number"
            placeholder="Capacity"
            value={capacity}
            onChange={(e) => {
              setCapacity(e.target.value);
            }}
          />
        </label>
        <label>
          Price:
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
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
        <button type="submit">Add apartment</button>
      </form>

      <div className="list">
        <List appartments={appartments} deleteAppartment={deleteAppartment} />
      </div>
    </>
  );
}

export default Dashboard;
