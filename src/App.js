import { useState } from "react";
import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

const shoppingList = [
  {
    id: 1,
    text: "Eggs",
    quantity: "1 dozen",
    reminder: true,
  },
  {
    id: 2,
    text: "Flour",
    quantity: "2 kg",
    reminder: true,
  },
  {
    id: 3,
    text: "Strawberries",
    quantity: "20 pieces",
    reminder: false,
  },
];

function App() {
  const [list, setList] = useState(shoppingList);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleAdd = (task) => {
    setList((list) => [...list, task]);
  };

  const handleDelete = (id) => {
    setList((list) => list.filter((entry) => entry.id !== id));
  };

  const handleReminderToggle = (id) => {
    setList((list) =>
      list.map((entry) =>
        entry.id === id ? { ...entry, reminder: !entry.reminder } : entry
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
      />
      {showAddTask && <AddEntry onAdd={handleAdd} />}
      <ShoppingList
        shoppingList={list}
        onDelete={handleDelete}
        onToggle={handleReminderToggle}
      />
    </div>
  );
}

export default App;
