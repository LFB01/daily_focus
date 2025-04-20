import { Link } from "react-router-dom";
import React, { useState } from 'react';
import TaskListDate from "./TaskListDate";
import Navbar from "./Navbar";
import API_URL from "../config/api";

function TaskMain(){
    const [filter, setFilter] = useState("offen");
    const [selectedDate, setSelectedDate] = useState(getHeute());

    function getHeute(){
        const heute = new Date(); 
        return heute.toISOString().split("T")[0];
    }

    function getMorgen(){
        const morgen = new Date();
        morgen.setDate(morgen.getDate()+1);
        return morgen.toISOString().split("T") [0];
    }

    return(
        <div>
        <Navbar/>
        <div className="container">
        <div className="bg-white p-5 rounded shadow-sm text-center p-4 mb-3" >
            <h2 className="display-5 mb-3"> {localStorage.getItem("username")}'s Aufgaben:</h2>
            
            <div className="btn-group mb-3">
                <button className={`btn btn-outline-primary ${selectedDate===getHeute()? "active" : ""}`}  onClick={()=> setSelectedDate(getHeute())}>Für Heute</button>
                <button className={`btn btn-outline-primary ${selectedDate=== getMorgen()? "active" : ""}`} onClick={()=> setSelectedDate(getMorgen())}>Für Morgen</button>
            </div>
            <div className="form-group">

                <label>
                    Eigenes Datum wählen: 
                    <input type="date"
                    className="form-control"
                    style={{ maxWidth: "250px" }}
                    value={selectedDate}
                    onChange={(e)=> setSelectedDate(e.target.value)}>
                        
                    </input>
                </label>
            </div>
        </div>

            <div className="d-flex justify-content-center">
            <div className="btn-group mb-4 text-center" role="group">
                <button className={`btn btn-outline-primary ${filter === "alle" ? "active" : ""}`}
                onClick={()=> setFilter("alle")}>
                    Alle</button>
                <button className={`btn btn-outline-primary ${filter === "offen" ? "active" : ""}`}
                onClick={()=> setFilter("offen")}>
                    Nur Offene</button>
                <button className={`btn btn-outline-primary ${filter === "erledigt" ? "active" : ""}`}
                onClick={()=>setFilter("erledigt")}>
                    Nur Erledigte</button>
            </div>
            </div>
            <TaskListDate filter= {filter} selectedDate ={selectedDate}/>
            <div className="text-center mt-5">
                <Link to="/task/new" className="btn btn-success">
                Neue Aufgabe anlegen</Link>
            </div>
        </div>
        </div>
    )

}
export default TaskMain;