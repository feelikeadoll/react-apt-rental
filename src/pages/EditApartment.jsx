import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export const EditApartment = (props) => {
  const { aptId } = useParams();

  const result = props.appartments.find((element) => {
    return element.id == aptId;
  });

  const [city, setCity] = useState(result.city);
  const [country, setCountry] = useState(result.country);
  const [image, setImage] = useState(result.picture_url.url);
  const [capacity, setCapacity] = useState(result.accommodates);
  const [price, setPrice] = useState(result.price);
  const [description, setDescription] = useState(result.description);
  const [property, setProperty] = useState(result.property_type);
  const [name, setName] = useState(result.name)

  const [message, setMessage] = useState("hiddenMsg")

  const handleSubmitForm = (e) => {
    e.preventDefault();

    result.city = city;
    result.country = country;
    result.picture_url.url = image;
    result.accommodates = capacity;
    result.price = price;
    result.description = description;
    result.property_type = property;
    result.name = name;

    setMessage("activeMsg")
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmitForm} className="form">
        <div>
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
          <label>
            Name:
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }} />
          </label>
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
        </div>
        <div>
          <label>
            Property:
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

        <button type="submit">Edit apartment</button>
      </form>
      <div className={message}>Apartment info changed!</div>
      <Link to={`/apartments/${aptId}`}>
        <button type="submit">Back to apartment</button>
      </Link>
    </div >
  );
};
