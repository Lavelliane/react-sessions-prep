import React, { useState } from "react";

function AddEntry({ onAdd }) {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add an item");
      return;
    }

    onAdd({ text, quantity, reminder });

    setText("");
    setQuantity("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="item">Item</label>
        <input
          id="item"
          type="text"
          placeholder="Add Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="text"
          placeholder="Add Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          id="reminder"
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Item" className="btn btn-block" />
    </form>
  );
}

export default AddEntry;
