import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Task = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        width: "15%",
        margin: "10px",
        padding: "15px",
        border: "2px solid black",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <input
        onChange={() => {
          props.handleToggleComplete(props.i);
          setChecked(!checked);
          if (checked) {
            console.log("🔲");
          } else {
            console.log("✅");
          }
        }}
        checked={props.task.complete}
        type="checkbox"
      />
      <span
        style={{
          textDecoration: props.task.complete ? "line-through" : "none",
          marginLeft: "10px",
        }}
      >
        {props.task.text}
      </span>
      <div>
        <Button
          onClick={() => {
            props.deleteTask(props.i);
            console.log("goodbye task 🫡");
          }}
          variant="danger"
          style={{
            margin: "10px",
            border: "2px solid black",
            fontWeight: "bold",
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
};

export default Task;
