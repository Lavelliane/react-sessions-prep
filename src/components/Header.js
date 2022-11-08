import Button from "./Button";

export default function Header({ title, showAddTask, setShowAddTask }) {
  function onClick() {
    setShowAddTask(!showAddTask);
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onClick}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker (Default)",
};

const headingStyle = {
  backgroundColor: "black",
};
