import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

import { nanoid } from "nanoid";
import { useState } from "react";

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  //
  function addTask(name) {
    const newTaks = {
      id: `todo-${nanoid()}`,
      name,
      completed: false
    };
    setTasks([...tasks, newTaks]);
    console.log(tasks);
  }

  //
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  //
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => !(id === task.id));
    setTasks(remainingTasks);
  }

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  // const headingText = `${taskList.length} tasks remaining`;
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>MDN TodoMatic</h1>
      <Form addTask={addTask}></Form>
      <div className="filters btn-group stack-exception">
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
      </div>
      <h2 id="list-heading">{headingText}</h2>
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
