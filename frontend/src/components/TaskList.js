import React from "react";
import TaskItem from './TaskItem';
import API_URL from "../config/api";

function TaskList() {
    const tasks = [
      {
        id: 1,
        name: "Projektidee schreiben",
        furtherDescription: "1 Seite bis 18 Uhr",
        dueDate: "2025-03-22",
        done: false
      },
      {
        id: 2,
        name: "Sport machen",
        furtherDescription: "",
        dueDate: "2025-03-22",
        done: true
      }
    ];
  
    const taskElements = tasks.map(function(task) {
      return <TaskItem key={task.id} task={task} />;
    });
  
    return (
      <div>
        <h2>Fokus-Aufgaben für heute</h2>
        <ul>
          {taskElements}
        </ul>
      </div>
    );
  }
  
  export default TaskList;