import Button from "./Button";

export default function Header({ title, showAddItem, setShowAddItem }) {
  function onClick() {
    setShowAddItem(!showAddItem);
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddItem ? "red" : "green"}
        text={showAddItem ? "Close" : "Add"}
        onClick={onClick}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Shopping List (Default)",
};
