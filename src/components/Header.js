import Button from "./Button";

export default function Header({ title }) {
  function onClick() {
    console.log("Click");
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="black" text="Add" onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Shopping List (Default)",
};

const headingStyle = {
  backgroundColor: "black",
};
