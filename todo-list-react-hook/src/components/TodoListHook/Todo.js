import { useState } from "react";
import "./Todo.css";
import List from "./List";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [task, setTask] = useState("");
  let [items, setItems] = useState([]);

  const setItems2 = (taskValue) => {
    items.push( {
        id: uuidv4(),
        task: taskValue,
        completed: false,
      });
  };

  //const handleOnSubmit = () => {};
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
        setItems2(task);
    };    
  };

  const markAsCompleted = (id) => {
    const foundTask = items.find((task) => {
      return task.id === id;
    });
    foundTask.completed = true;
    // this.setState((prevState) => ({
    //   items: [...prevState.items],
    // }));
  };

  const removeTask = (id) => {
    // this.setState((prevState) => {
    //   const filteredTasks = prevState.items.filter((task) => task.id !== id);
    //   return {
    //     items: filteredTasks,
    //   };
    // });
     items = items.filter((task) => task.id !== id);
     
  };

  
  return (
    <div className="Todo">
      <h1> New Task</h1>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
      </form>
      <List
        items={items}
        markAsCompleted={markAsCompleted}
        removeTask={removeTask}
      />
    </div>
  );

};

export default Todo;
