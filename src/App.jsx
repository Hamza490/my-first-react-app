import List from './List.jsx';

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard", "Pidgeon", "Dog"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App;