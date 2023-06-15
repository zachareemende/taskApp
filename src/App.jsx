import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Task from "./components/Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTask = (e) => setNewTask(e.target.value);

  const submitTask = (e) => {
    e.preventDefault();

    if (newTask.length === 0) {
      return;
    }

    const taskItem = {
      text: newTask,
      complete: false,
    };

    setTaskList([...taskList, taskItem]);

    setNewTask("");

    console.log(newTask);
  };

  const deleteTask = (delIndex) => {
    const filteredTask = taskList.filter((task, i) => {
      // keep every task, except for when the index matches
      // if(i!== delIndex) {
      //   return i
      // }
      // same thing but shorter
      return i !== delIndex;
    });

    setTaskList(filteredTask);
  };

  const handleToggleComplete = (idx) => {
    const updatedTasks = taskList.map((task, i) => {
      if (i === idx) {
        return {
          ...task,
          complete: !task.complete,
        };
      }
      return task;
    });

    setTaskList(updatedTasks);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#aaaaaa",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23797979' fill-opacity='0.28'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
        height: "100vh",
      }}
    >
      <div className="d-flex justify-content-center">
        <h1 className="text-black mt-5">To-Do List✅</h1>
      </div>
      <Form onSubmit={submitTask}>
        <Form.Group className="d-flex justify-content-center">
          <Form.Group className="d-flex flex-column align-items-center">
            {" "}
            {/* Center the button horizontally */}
            <Form.Control
              style={{
                marginTop: "25px",
                border: "2px solid black",
              }}
              type="text"
              value={newTask}
              placeholder="New Task"
              onChange={handleTask}
            />
            <Button
              style={{
                width: "30%",
                margin: "25px",
                border: "2px solid black",
                fontWeight: "bold",
                color: "yellow",
              }}
              type="submit"
              variant="primary"
            >
              Add
            </Button>
          </Form.Group>
        </Form.Group>
      </Form>

      <div className="d-flex flex-column align-items-center">
        {taskList.map((task, i) => {
          return (
            <Task
              key={i}
              i={i}
              task={task}
              handleToggleComplete={handleToggleComplete}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
