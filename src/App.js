import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

function App() {
  const handleAdd = (task) => {
    console.log(task);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddEntry onAdd={handleAdd} />
      <ShoppingList />
    </div>
  );
}

export default App;
