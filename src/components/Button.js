import React from "react";

export default function Button({ color, text, onClick }) {
  
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}
