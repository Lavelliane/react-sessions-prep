import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="container">
      <Header title="Shopping List" />
      <AddEntry />
      <ShoppingList />
    </div>
  );
}

export default App;
