
import React, { useEffect, useState } from 'react';
import TaskCard from "./TaskCard.js";
import API_URL from "../config/api";


function TaskListDate({filter, selectedDate}){
    const [tasks, setTasks] = useState([]);
    const [showDone, setShowDone] = useState(false);
    const secret = localStorage.getItem("secret");
    


    function updateStatus(id){
        console.log("ID zum Löschen:", id); 

        fetch(`${API_URL}/task?id=${id}`, {
            method: "PATCH",
            headers:{
                "secret": secret
            }

        })
        .then(response =>{
            if(!response.ok){
                throw new Error("Fehler beim Senden");
            }
            return response.json();
        })
        .then(updatedTask => {

            setTasks(prevTasks =>
              prevTasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task
              )
            );
          })
          .catch(error => {
            console.error("Fehler beim Ändern des Status:", error);
          });

    }


    function deleteTask(id){

        fetch(`${API_URL}/task?id=${id}`, {
            method: "DELETE", 
            headers: {
                "Content-type": "application/json",
                "secret": localStorage.getItem("secret")
            }
        })
        .then(response =>{
            if(!response.ok){
                throw new Error("Fehler beim Löschen");
            }
            setTasks(prev => prev.filter(task => task.id !== id));
    })
        
        .catch(error =>{
            console.error("Fehler beim Löschen", error);
        })

    }

    useEffect(() => {
    fetch(`${API_URL}/task/all/date?dueDate=${selectedDate}`,{
        method:"GET",
        headers: {
            "Content-type": "application/json", 
            "secret": secret
        } 
    })
    .then(response =>{
        if(!response.ok){
            throw new Error("Fehler beim Senden");
        }
        return response.json();
    })
    .then(data =>{
        console.log("Antwort vom Server:", data);
        setTasks(data);
    })
    .catch(error =>{
        console.log("Fehler:", error);
        alert("Fehler beim Abrufen der heutigen Tasks.")
    });
}, [selectedDate]);


    let filteredTasks = tasks;

        if(filter === "offen"){
            filteredTasks = tasks.filter(task => !task.done); 
            }
        else if (filter === "erledigt"){
            filteredTasks = tasks.filter(task => task.done);
        }

    return (
        <div className="d-flex justify-content-center">
        <div style={{ maxWidth: "800px", width: "100%" }}>
        <h2>Aufgaben für: {selectedDate}</h2>
        <div className="row mb-4"> 
            {filteredTasks.map(task =>(
            <div className="col-md-6 mb-4" key={task.id}>
            <TaskCard task={task} updateStatus={updateStatus} deleteTask={deleteTask} />
            </div>
         ))}
        </div>
        </div>
        </div>
        
    );

}

export default TaskListDate;