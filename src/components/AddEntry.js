import React from "react";

function AddEntry() {
  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="item">Item</label>
        <input id="item" type="text" placeholder="Add Item" />
      </div>
      <div className="form-control">
        <label htmlFor="quantity">Quantity</label>
        <input id="quantity" type="text" placeholder="Add Quantity" />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input id="reminder" type="checkbox" />
      </div>

      <input type="submit" value="Save Item" className="btn btn-block" />
    </form>
  );
}

export default AddEntry;
