import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("secret");
        localStorage.removeItem("username");
        navigate("/login");
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
            <div className="container-fluid justify-content-between align-items-center d-flex">
                <span className="navbar-brand">Daily Focus</span>
                <div className="d-flex gap-3 align-items-center flex-wrap">
                    <Link to="/task/week" className="nav-link nav-box">Die nächsten 7 Tage anzeigen</Link>
                    <Link to="/task/new" className="nav-link nav-box">Neue Aufgabe Anlegen</Link>
                    <Link to="/tasks" className="nav-link nav-box">Zu deinen Aufgaben</Link>
                    <button onClick={handleLogout} className="btn btn-outline-danger">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;