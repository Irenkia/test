import React from "react";
import Input from "../input";
import TaskList from "../task-list";

const AddTask = ({ taskarr }) => {
  return (
    <div>
      <Input/>
      <TaskList  taskarr={taskarr} />
    </div>
  );
};
export default AddTask;
