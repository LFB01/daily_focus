import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import React, {useState} from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm.js';
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login.js";
import TaskMain from "./components/TaskMain.js";
import TaskCard from "./components/TaskCard.js";
import TaskWeekView from "./components/TaskWeekView.js";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path ="/tasks" element={<TaskMain/>} > </Route>
        <Route path ="/register" element ={<RegisterForm/>}></Route>
        <Route path ="/task/new" element ={<TaskForm/>}></Route>
        <Route path = "/task/week" element ={<TaskWeekView/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
