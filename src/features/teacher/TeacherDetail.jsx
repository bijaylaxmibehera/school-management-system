import React from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { deleteTeachersAsync } from "./teacherSlice";

export const TeacherDetails=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const teacher=useSelector((state)=>state.teachers.teachers.find((teacher)=>teacher._id===id));

    const handleDeleteTeacher=(id)=>{
        dispatch(deleteTeachersAsync(id))
    }
    return (
        <>
        {teacher?(
            <>
             <h2>Teacher Details</h2>
             <div>
                <p><span>Name: </span>{teacher.name}</p>
                <p><span>Subject: </span>{teacher.subject}</p>
                <p><span>Contact: </span>{teacher.contact}</p>
                <Link to={`/teachers/edit/${id}`} state={teacher}>
                    <button>Edit</button>
                </Link>
                <button onClick={()=>handleDeleteTeacher(id)}>Delete</button>
             </div>
            </>
        ):(
            <p>Teacher not found</p>
        )}
        </>
    )
}
