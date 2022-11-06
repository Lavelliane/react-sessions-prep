import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <ShoppingList />
    </div>
  );
}

export default App;
