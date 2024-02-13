import { ListItem } from "./ListItem";
import { useState } from "react";

export const List = (props) => {

  let appartmentsList = props.appartments.map((element) => {
    return (
      <ListItem
        key={element.id}
        appartment={element}
        function={props.deleteAppartment}
        handleAddFavourites={props.handleAddFavourites}
      />
    );
  });
  return appartmentsList;
};
