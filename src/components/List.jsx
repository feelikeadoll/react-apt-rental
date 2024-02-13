import { ListItem } from "./ListItem";
import { useState } from "react";

export const List = (props) => {

  const [favourites, setFavourites] = useState([])

  function handleAddFavourites(apartmentId) {
    console.log(apartmentId)
    const newList = [apartmentId, ...favourites];
    setFavourites(newList)
  }
  console.log(favourites)

  let appartmentsList = props.appartments.map((element) => {
    return (
      <ListItem
        key={element.id}
        appartment={element}
        function={props.deleteAppartment}
        handleAddFavourites={handleAddFavourites}
      />
    );
  });
  return appartmentsList;
};
