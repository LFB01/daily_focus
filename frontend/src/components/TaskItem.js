import React from "react";

function TaskItem(props){
    const task = props.task;

    let statusText = "";
    if(task.done==true){
        statusText = "erledigt";
    }
    else {
        statusText = "offen";
    }

    return(
        <li>
            <strong>{task.name}</strong>
            <br></br>
            {task.furtherDescription !== "" && <em>{task.furtherDescription}</em>}
            <br/>
            Fällig: {task.dueDate}
            <br/>
            Status: {statusText};
            <hr/>
        </li>
    )
}
export default TaskItem;