import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddEntry />
      <ShoppingList />
    </div>
  );
}

export default App;
