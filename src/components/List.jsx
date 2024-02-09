import { ListItem } from "./ListItem";

export const List = (props) => {
  let appartmentsList = props.appartments.map((element) => {
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
