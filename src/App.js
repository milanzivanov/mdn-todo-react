import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default function App(props) {
  // console.log(props.tasks);

  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>MDN TodoMatic</h1>
      <Form></Form>
      <div className="filters btn-group stack-exception">
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        // role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
