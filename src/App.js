import { useState, useEffect } from "react";
import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [list, setList] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleAdd = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setList((list) => [...list, data]);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setList((list) => list.filter((entry) => entry.id !== id));
  };

  const handleReminderToggle = (id) => {
    setList((list) =>
      list.map((entry) =>
        entry.id === id ? { ...entry, reminder: !entry.reminder } : entry
      )
    );
  };

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const setShoppingList = async () => {
      const shoppingList = await fetchTasks();
      setList(shoppingList);
    };

    setShoppingList();
  }, []);

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
