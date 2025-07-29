import ListItem from './ListItem.jsx';

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <ListItem key={animal} animal={animal} /> : null;
      })}
    </ul>
  );
}

export default List;