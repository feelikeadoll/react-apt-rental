import { Link } from "react-router-dom";

export const ListItem = (props) => {

  const handleDeleteButton = () => {
    return props.function(props.appartment.id);
  };

  return (
    <div className="card">
      <h3>{props.appartment.property_type} in {props.appartment.city}, {props.appartment.country}</h3>
      <Link to={`/apartments/${props.appartment.id}`}>
        <img className="picture" src={props.appartment.picture_url.url} alt="" />
      </Link>
      <div className="apt-info">
      <p>Capacity: {props.appartment.accommodates}</p>
      <p>Price: {props.appartment.price}€</p>
      </div>
      {/* <div>
        {props.appartment.review_scores_rating > 90 ? (
          <p>TOP Recommendation</p>
        ) : (
          <p></p>
        )}
      </div> */}
      <Link to={`/apartments/${props.appartment.id}`}>
        <button>More details</button>
      </Link>

      <button onClick={handleDeleteButton}>Delete</button>
    </div >
  );
};
