import { ListItem } from "./ListItem";
import { useState } from "react";

export const List = (props) => {
  let appartmentsList = props.appartments.map((element) => {
    return (
      <ListItem
        key={element.id}
        appartment={element}
        deleteAppartment={props.deleteAppartment}
        handleAddFavourites={props.handleAddFavourites}
        favouriteIcon={props.favouriteIcon}
        favourites={props.favourites}
        deleteFavourites={props.deleteFavourites}
      />
    );
  });
  return appartmentsList;
};
