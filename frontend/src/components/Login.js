import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import { Link } from "react-router-dom";
import API_URL from "../config/api";

function Login(){

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        const secret = localStorage.getItem("secret");
        if (secret) {
          navigate("/tasks"); 
        }
      }, []);

    function handleSubmit(event){
        event.preventDefault();
        console.log(username);


    const user = {
        username: username,
        password: password,

    };


    


    fetch(`${API_URL}/user/login`, {
        method: "POST", 
        headers: {"Content-type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok){
            throw new Error("Fehler beim Senden");
        }
        return response.json();
    })
    .then(data =>{
        console.log("Antwort vom Server:", data);
        localStorage.setItem("secret", data.secret);
        localStorage.setItem("username", data.username);
        navigate("/tasks");

    })
    .catch(error => {
        console.log("Fehler beim Senden", error);
        alert("Fehler beim Login!");
    })
}


return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="bg-white p-5 rounded shadow-sm text-center p-4 mb-3" >
        <h1>Willkommen bei Daily Focus Tasks</h1>
        <p>Loggen Sie sich hier mit Ihrem bestehenden Nutzerkonto ein.</p>
      

      <form onSubmit={handleSubmit} className='container mt-5' style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Log-In</h2>

        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Passwort:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>

        <p className="mt-3 text-center">Noch kein Account?</p>
        <div className="text-center">
          <Link to="/register">Hier registrieren</Link>
        </div>
      </form>
    </div>
    </div>
  );
}


export default Login;