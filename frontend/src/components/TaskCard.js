
import React, { useEffect, useState } from 'react';

function TaskCard({ task, updateStatus, deleteTask }) {

    console.log("DeleteTask ist:", deleteTask);

    



    return (
      <div className={`card h-100 task-card ${task.done ? "done" : ""}`}>
        <div className="card-body">
          <h5 className="card-title">{task.name}</h5>
          <p>{task.furtherDescription !== "" && <em>{task.furtherDescription}</em>}</p>
          <p className="card-text">
            <small className="text-muted">Fällig: {task.dueDate}</small><br />
            Status: {task.done ? "erledigt" : "offen"}
          </p>
          <div className='d-flex justify-content-between'>
          <button
            className={`btn btn-${task.done ? "warning" : "success"} btn-sm`}
            onClick={() => updateStatus(task.id)}
          >
            {task.done ? "Zurücksetzen" : "Erledigt"}
          </button>

          
            <button className="btn btn-outline-danger btn-sm"
             onClick={() => {
                const bestätigung = window.confirm("Möchten Sie diese Aufgabe wirklich unwiederbringlich löschen?");
                if(bestätigung) {
                    deleteTask(task.id)
                }
                }}
                >
                Löschen
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default TaskCard;