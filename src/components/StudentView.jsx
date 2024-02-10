import React,{useEffect} from "react";
import { StudentList } from "../features/student/StudentList";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchStudents } from "../features/student/studentSlice";

export const StudentView=()=>{
    const dispatch=useDispatch();
    const students=useSelector((state)=>state.students.students);
    const status=useSelector((state)=>state.students.status);
    const error=useSelector((state)=>state.students.error);
    
    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchStudents());
        }
    },[status,dispatch])
    return (
        <div>
          <h1>Student View</h1>
          {status==='loading' && <p>Loading...</p>}
          {error && <p>Error:{error}</p>}
          <StudentList students={students}/>
        </div>
    )
}