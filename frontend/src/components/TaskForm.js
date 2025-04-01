import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import API_URL from "../config/api";

function TaskForm() {

  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [furtherDesc, setFurtherDesc] = useState('');
  const [dueDate, setDueDate] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    console.log(taskName);
    console.log(furtherDesc);
    console.log(dueDate);
  


  const task = {
    name: taskName, 
    furtherDescription: furtherDesc,
    dueDate: dueDate,
    done: false, 
  };

  fetch(`${API_URL}/task`, {
    method: "POST", 
    headers: {
      "Content-type": "application/json", 
      "secret" : localStorage.getItem("secret")
    }, 
    body: JSON.stringify(task)
  })
  .then (response => {
    if (!response.ok){
      throw new Error("Fehler beim Senden"); 
    }
    return response.json();
  })
  .then (data =>{
    console.log ("Anwtort vom server", data);
    setTaskName('');
    setFurtherDesc('');
    setDueDate('');
    navigate("/tasks");
  })
  .catch(error => {
    console.error("Fehler beim Senden", error);
   
    alert("Fehler beim Erstellen der Aufgabe");
  });
  }
  


  return (
    <div>
      <Navbar/>
    <form onSubmit={handleSubmit} className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Neue Aufgabe:</h2>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input 
        className="form-control"
        value = {taskName} 
        onChange={(e) => setTaskName(e.target.value)}
          name="taskName" 
          required/>
      </div>

      <div className="mb-3">
        <label className="form-label">Beschreibung:</label>
        <input 
        className="form-control"
        value = {furtherDesc}
        onChange={(e)=> setFurtherDesc(e.target.value)}
        name="furtherDesc" />
      </div>

      <div className="mb-3">
        <label className="form-label">Fällig am:</label>
        <input 
        className="form-control"
        value = {dueDate}
        onChange = {(e)=> setDueDate(e.target.value)}
        name="dueDate" type="date" 
        required/>
      </div>

      <button type="submit" className="btn btn-primary w-100">Aufgabe erstellen</button>
    </form>
    </div>
  );
}

export default TaskForm;
