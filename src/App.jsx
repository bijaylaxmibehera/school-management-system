import React from 'react';
import { Routes,Route,NavLink } from 'react-router-dom';
import { StudentView } from './components/StudentView';
import { TeacherView } from './components/TeacherView';
import { SchoolView } from './components/SchoolView';
import { ClassView } from './components/ClassView';
import './App.css';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <NavLink to="/">School Management System</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/students">students</NavLink>
            </li>
            <li>
              <NavLink to="/teacher">teacher</NavLink>
            </li>
            <li>
              <NavLink to="/classes">class</NavLink>
            </li>
            <li>
              <NavLink to="/school">school</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<StudentView/>}/>
        <Route path='/teacher' element={<TeacherView/>}/>
        <Route path='/classes' element={<ClassView/>}/>
        <Route path='/school' element={<SchoolView/>}/>

      </Routes>
    </div>
  );
}

export default App;