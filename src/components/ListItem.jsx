import { Link } from "react-router-dom";
import bookmark from "../assets/bookmark-1.png";
import bookmarkUndo from "../assets/bookmark-2.png";

export const ListItem = (props) => {
  const handleDeleteButton = () => {
    return props.deleteAppartment(props.appartment.id);
  };

  const handleDeleteFavourites = () => {
    return props.deleteFavourites(props.appartment.id);
  };

  const currentApt = props.appartment;

  return (
    <div className="card">
      <h3>
        {props.appartment.property_type} in {props.appartment.city},{" "}
        {props.appartment.country}
      </h3>
      <div className="imgFrame">
        <button
          onClick={() => {
            props.handleAddFavourites(currentApt);
          }}
          className="menu-btn"
        >
          <img src={bookmark} className="bookmark-btn "/>
        </button>
        {props.favourites.some((element) => {
          return element.id === props.appartment.id;
        }) && (
          <button
            className="menu-btn"
            onClick={handleDeleteFavourites}
          >
            <img
              src={bookmarkUndo}
              className={`bookmark-btn ${props.favouriteIcon} `}
            />{" "}
          </button>
        )}

        <Link to={`/apartments/${props.appartment.id}`}>
          <img
            className="picture"
            src={props.appartment.picture_url.url}
            alt=""
          />
        </Link>
      </div>
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
      <div className="buttonContainer">
        <Link to={`/apartments/${props.appartment.id}`}>
          <button>More details</button>
        </Link>

        <button onClick={handleDeleteButton}>Delete</button>
      </div>
    </div>
  );
};
