import { ListItem } from "./ListItem";
//import { useState } from "react";

export const List = (props) => {
  //console.log(props.appartments);
  //  const [result, setResult] = useState(props.appartments);

  // function deleteAppartment(id) {
  //   let filteredList = result.filter((item) => {
  //     return item.id !== id;
  //   });
  //   setResult(filteredList);
  // }
  let appartmentsList = props.appartments.map((element) => {
    console.log(element);
    return (
      <ListItem
        key={element.id}
        appartment={element}
        function={props.deleteAppartment}
      />
    );
  });
  return appartmentsList;
};
