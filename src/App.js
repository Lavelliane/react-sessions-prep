import { useState, useEffect } from "react";
import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const [showAddItem, setShowAddItem] = useState(false);

  const handleAdd = async (newItem) => {
    const res = await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
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
    const itemToUpdate = await fetchItem(id);
    const updatedItem = { ...itemToUpdate, reminder: !itemToUpdate.reminder };

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
      const items = await fetchItems();
      setList(items);
    };

    setShoppingList();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header
          title="Shopping List"
          showAddItem={showAddItem}
          setShowAddItem={setShowAddItem}
        />
        <Routes>
          <Route
            path={"/"}
            exact
            element={
              <>
                {showAddItem && <AddEntry handleAdd={handleAdd} />}
                <ShoppingList
                  shoppingList={list}
                  handleDelete={handleDelete}
                  handleReminderToggle={handleReminderToggle}
                />
              </>
            }
          />
          <Route path={"/about"} element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
