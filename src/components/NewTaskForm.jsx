function NewTaskForm() {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    ></input>
  );
}

function Header() {
  return <h1>ToDo made by Ru</h1>;
}

export default NewTaskForm;

export { Header };
