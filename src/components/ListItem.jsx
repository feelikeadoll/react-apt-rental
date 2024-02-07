import { useState } from "react";

export const ListItem = (props) => {
  const [apt, setApt] = useState(props.appartment);
  console.log(apt);

  const handleDeleteButton = () => {
    return props.function(props.appartment.id);
  };

  return (
    <div className="card">
      <div>{props.appartment.country}</div>
      <div>{props.appartment.city}</div>
      <img className="picture" src={props.appartment.picture_url.url} alt="" />
      <div>{props.appartment.property_type}</div>
      <div>{props.appartment.accommodates}</div>
      <div>{props.appartment.price}</div>
      <div>{props.appartment.review_scores_rating}</div>
      <div>
        {/* {props.appartment.review_scores_rating > 90 ? (
          <p>TOP Recommendation</p>
        ) : (
          <p></p>
        )} */}
      </div>
      <button onClick={handleDeleteButton}>Delete</button>
    </div>
  );
};
