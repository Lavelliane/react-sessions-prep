import React, { useState } from "react";
import ShoppingListEntry from "./ShoppingListEntry";

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

function ShoppingList() {
  const [list, setList] = useState(shoppingList);

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

  if (list.length === 0) return <p>Shopping list is empty!</p>;

  return (
    <>
      {list.map((entry) => (
        <ShoppingListEntry
          key={entry.id}
          entry={entry}
          onDelete={() => handleDelete(entry.id)}
          onToggle={() => handleReminderToggle(entry.id)}
        />
      ))}
    </>
  );
}

export default ShoppingList;
