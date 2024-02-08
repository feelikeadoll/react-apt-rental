import { ListItem } from "./ListItem";
import { useState } from "react";

export const List = (props) => {
  //console.log(props.appartments);
  const [result, setResult] = useState(props.appartments);
  console.log(result);

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
