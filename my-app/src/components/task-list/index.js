import React from "react";

import './task-list.css'

const TaskList = ({ taskarr }) => {
  return (
    <div>
      <ul>
        {taskarr.map((task, index) => {
          return <li className="task-list" key={index * 5 + "b"}>{task}<div><i className="fas fa-pen"></i></div><div><i className="fas fa-trash"></i></div></li>;
        })}
      </ul>
    </div>
  );
};
export default TaskList;
