import React from 'react';
import { Routes,Route,NavLink } from 'react-router-dom';
import { StudentView } from './components/StudentView';
import { TeacherView } from './components/TeacherView';
import { SchoolView } from './components/SchoolView';
import { ClassView } from './components/ClassView';
import './App.css';
import { Home } from './components/Home';
import { StudentForm } from './features/student/StudentForm';
import { StudentDetails } from './features/student/StudentDetail';
import { TeacherForm } from './features/teacher/TeacherForm';
import { TeacherDetails } from './features/teacher/TeacherDetail';

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
              <NavLink to="/teachers">teachers</NavLink>
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
        <Route path='/teachers' element={<TeacherView/>}/>
        <Route path='/classes' element={<ClassView/>}/>
        <Route path='/school' element={<SchoolView/>}/>
        <Route path='/students/add' element={<StudentForm/>}/>
        <Route path='/students/edit/:id' element={<StudentForm/>}/>
        <Route path='/students/:id' element={<StudentDetails/>}/>
        <Route path='/teachers/add' element={<TeacherForm/>}/>
        <Route path='/teachers/:id' element={<TeacherDetails/>}/>
        <Route path='/teachers/edit/:id' element={<TeacherForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
