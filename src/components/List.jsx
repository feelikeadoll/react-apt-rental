import data from "../data/data.json";
import { ListItem } from "./ListItem";
import { useState } from "react";

export const List = () => {
  const [result, setResult] = useState(data.results);

  function deleteAppartment(id) {
    let filteredList = result.filter((item) => {
      return item.id !== id;
    });
    setResult(filteredList);
  }
  let appartmentsList = result.map((element) => {
    return (
      <ListItem
        key={element.id}
        appartment={element}
        function={deleteAppartment}
      />
    );
  });
  return appartmentsList;
};


