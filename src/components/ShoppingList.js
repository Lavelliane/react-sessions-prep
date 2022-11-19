import React from "react";
import ShoppingListEntry from "./ShoppingListEntry";

function ShoppingList({ shoppingList, handleDelete, handleReminderToggle }) {
  if (shoppingList.length === 0) return <p>Shopping list is empty!</p>;

  return (
    <>
      {shoppingList.map((entry) => (
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
