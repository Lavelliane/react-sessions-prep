import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingList from "./components/ShoppingList";
import About from "./components/About";

function App() {
  const [list, setList] = useState([]);
  const [showAddItem, setShowAddItem] = useState(false);

  const handleAdd = async (item) => {
    const res = await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await res.json();

    setList((list) => [...list, data]);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
    });

    setList((list) => list.filter((entry) => entry.id !== id));
  };

  const handleReminderToggle = async (id) => {
    const itemToToggle = await fetchItem(id);
    const updatedItem = { ...itemToToggle, reminder: !itemToToggle.reminder };

    const res = await fetch(`http://localhost:5000/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await res.json();

    setList((list) =>
      list.map((entry) =>
        entry.id === id ? { ...entry, reminder: data.reminder } : entry
      )
    );
  };

  const fetchItems = async () => {
    const res = await fetch("http://localhost:5000/items");
    const data = await res.json();
    return data;
  };

  const fetchItem = async (id) => {
    const res = await fetch(`http://localhost:5000/items/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const setShoppingList = async () => {
      const shoppingList = await fetchItems();
      setList(shoppingList);
    };

    setShoppingList();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header
          title="Shopping Cart"
          showAddItem={showAddItem}
          setShowAddItem={setShowAddItem}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showAddItem && <AddEntry onAdd={handleAdd} />}
                <ShoppingList
                  shoppingList={list}
                  onDelete={handleDelete}
                  onToggle={handleReminderToggle}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
