import Button from "./Button";
import { useLocation } from "react-router-dom";

export default function Header({ title, showAddItem, setShowAddItem }) {
  const location = useLocation();

  function onClick() {
    setShowAddItem(!showAddItem);
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddItem ? "red" : "green"}
          text={showAddItem ? "Close" : "Add"}
          onClick={onClick}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: "Shopping List (Default)",
};
