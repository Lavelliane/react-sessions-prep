import React from "react";
import { FaTimes } from "react-icons/fa";

function ShoppingListEntry({ entry, onDelete, onToggle }) {
  return (
    <div className={`entry ${entry.reminder ? "reminder" : ""}`} onDoubleClick={onToggle}>
      <h3>
        {entry.text} <FaTimes onClick={onDelete} style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>{entry.quantity}</p>
    </div>
  );
}

export default ShoppingListEntry;
