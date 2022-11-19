import React, { useState } from "react";

function AddEntry({ handleAdd }) {
  const [itemText, setItemText] = useState("");
  const [quantityText, setQuantityText] = useState("");
  const [reminder, setReminder] = useState(false);

  const onClick = (e) => {
    e.preventDefault();

    if (itemText.length === 0) {
      return;
    }

    const newItem = {
      text: itemText,
      quantity: quantityText,
      reminder,
    };

    handleAdd(newItem);

    setItemText("");
    setQuantityText("");
    setReminder(false);
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="item">Item</label>
        <input
          id="item"
          type="text"
          placeholder="Add Item"
          value={itemText}
          onChange={(e) => {
            setItemText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="text"
          placeholder="Add Quantity"
          value={quantityText}
          onChange={(e) => {
            setQuantityText(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          id="reminder"
          type="checkbox"
          checked={reminder}
          onChange={(e) => {
            setReminder(e.target.checked);
          }}
        />
      </div>

      <input
        type="submit"
        value="Save Item"
        className="btn btn-block"
        onClick={onClick}
      />
    </form>
  );
}

export default AddEntry;
