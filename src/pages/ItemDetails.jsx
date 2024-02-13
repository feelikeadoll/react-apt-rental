import { useParams, Link } from "react-router-dom";

function ItemDetails(props) {
  const { aptId } = useParams();
  console.log("appartment: " + props.appartments[0].id);

  const result = props.appartments.find((element) => {
    console.log("itemDetails" + element.id);
    return element.id == aptId;
  });

  return (
    <div className="page">
      <div className="apt-info">
        <img
          src={result.picture_url.url}
          alt={result.name}
          className="apt-img"
        />
        <div className="apt-details">
          <h2>
            {result.city}, {result.country}
          </h2>
          <h3>{result.name}</h3>
          <p>Price: {result.price}€</p>
          <p>Accommodates: {result.accommodates}</p>
        </div>
      </div>
      <p>{result.description}</p>
      <Link to={`/apartments/${aptId}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default ItemDetails;
