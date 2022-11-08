import ShoppingListEntry from "./ShoppingListEntry";

function ShoppingList({ shoppingList, onDelete, onToggle }) {
  if (shoppingList.length === 0) return <p>Shopping list is empty!</p>;

  return (
    <>
      {shoppingList.map((entry) => (
        <ShoppingListEntry
          key={entry.id}
          entry={entry}
          onDelete={() => onDelete(entry.id)}
          onToggle={() => onToggle(entry.id)}
        />
      ))}
    </>
  );
}

export default ShoppingList;
