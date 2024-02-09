import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export const EditApartment = (props) => {
  const { aptId } = useParams();

  const result = props.appartments.find((element) => {
    return element.id == aptId;
  });
  console.log(result);
  const [city, setCity] = useState(result.city);
  const [country, setCountry] = useState(result.country);
  const [image, setImage] = useState(result.picture_url.url);
  const [capacity, setCapacity] = useState(result.accommodates);
  const [price, setPrice] = useState(result.price);
  const [description, setDescription] = useState(result.description);
  const [property, setProperty] = useState(result.property_type);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const appartmentIds = props.appartments.map((apt) => apt.id);
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

    const newList = [newAppartment, ...props.appartments];
    props.updateList(newList);
  };

  return (
    <div>
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
    </div>
  );
};
