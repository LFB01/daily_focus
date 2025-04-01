import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import API_URL from "../config/api";

function TaskWeekView(){

    const [weeklyTasks, setWeeklyTasks] = useState({});

function getWeekDays(){
    const heute = new Date(); 
    const dates = [];

    for(let i=0; i<7; i++){
        const day = new Date(heute); 
        day.setDate(heute.getDate()+i);
        dates.push(day.toISOString().split("T")[0]);
    }

    return dates;

}

function formatDateWithWeekday(dateStr) {
    const options = { weekday: 'long', day: '2-digit', month: '2-digit' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', options);
  }
  

    useEffect(()=>{
        const secret = localStorage.getItem("secret");
        const week = getWeekDays();

        const fetches = week.map(date=>
            fetch(`${API_URL}/task/all/date?dueDate=${date}`, {
                headers: {secret}
            })
            .then(response => 
                response.json().then(tasks => ({tasks, date}))
            )
            );

            Promise.all(fetches).then(results =>{
                const tasksBydate = {};
                results.forEach(({date, tasks})=>{
                tasksBydate[date]=tasks;
            });
            setWeeklyTasks(tasksBydate);
    });
    },[]);


    return(
        <div>
            <Navbar/>
            <div className='container'>
            <h2 className='mb-4'>Die kommenden 7 Tage im Überblick:</h2>
            <div className='row'>
            {Object.entries(weeklyTasks).map(([date, tasks]) => (
                <div className='col-md-6 mb4' key={date} >
                    <div className="card shadow-sm">
                    <div className="card-body">
                    <h5 className='card-title'>{formatDateWithWeekday(date)}</h5>
                    <ul className='list-group list-group-flush'>
                        {tasks.length === 0 && (
                        <li className="list-group-item text-muted">Keine Aufgaben</li>
                          )}
                        {tasks.map(task=>(
                            <li key={task.id} className='list-group-item d-flex justify-content-between align-items-center'>
                                <span>{task.name}</span>
                                {task.done && <span className="badge bg-success">✓</span>}
                            </li>
                        ))}
                    </ul>
                </div> 
                </div>
                </div>
            )
            )}
            </div>

        </div>
        </div>
    );
}

export default TaskWeekView;