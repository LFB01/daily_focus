import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import API_URL from "../config/api";

function RegisterForm(){
    const navigate = useNavigate();

    const [userName, setUsername] =useState('');
    const [password, setPassword] =useState('');

    function handleSubmit(event){
        event.preventDefault();

        const user = {
            username: userName,
            password: password
        };

        fetch(`${API_URL}/user/register`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)

        })
        .then (response => {
            if(!response.ok){
                throw new Error("Fehler beim Senden.")
            }
            return response.json;
        })
        .then (data =>{
            console.log("Registrierung: ", data); 
            localStorage.setItem("userSecret", data.secret)
            navigate("/tasks");
            alert("Registrierung erfolgreich!")
        })
        .catch(error => {
            console.error("Fehler:", error);
            alert("Fehler bei der Registrierung.");
          });
    }

    return(
        <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
            <div className="bg-white p-5 rounded shadow-sm text-center p-4 mb-3">
                <h1>Willkommen bei Daily Focus Tasks</h1>
                <p>Registrieren Sie hier ein neues Nutzerkonto.</p>
            
        <form onSubmit={handleSubmit} className='container mt-5' style={{ maxWidth: "500px" }}>
            <h2 className='text-center mb-4'>Registrieren Sie sich:</h2>
            <div className="mb-3 w-100">
                <label className='form-label'>Geben Sie Ihren Nutzernamen ein.</label>
                <input 
                value={userName}
                onChange={(e)=> setUsername(e.target.value)}
                className='form-control'
                required/>
            </div>

            <div className="mb-3 w-100">
                <label className='form-label'>Geben Sie Ihr Passwort ein.</label>
                <input 
                type='password'
                value ={password}
                onChange={(e)=> setPassword(e.target.value)}
                className='form-control'
                required/>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">Registrieren</button>
            <Link to="/login">Zurück zum Login</Link>
        </form>
        </div>
        </div>

    )

}

export default RegisterForm;