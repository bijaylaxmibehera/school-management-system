import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacherAsync, updateTeacherAsync } from "./teacherSlice";
import { useLocation, useNavigate } from "react-router";

export const TeacherForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teacher = location.state ? location.state : null;

  const [teacherData, setTeacherData] = useState({
    name: teacher ? teacher.name : "",
    subject: teacher ? teacher.subject : "",
    contact: teacher ? teacher.contact : 0,
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setTeacherData((prevState)=>({...prevState, [name]:value}));
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    if(teacher){
        dispatch(updateTeacherAsync({id:teacher._id, updatedTeacher:teacherData}));
        navigate(`/teachers`)
    }else{
        dispatch(addTeacherAsync(teacherData));
        navigate("/teachers");
    }
  }
  return (
    <>
      <h3>{teacher ? "Update" : "Add"} Teacher</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              placeholder="John Doe"
              value={teacherData.name}
              onChange={handleChange}
              name="name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Subject:
            <input
              type="text"
              placeholder="English"
              value={teacherData.subject}
              onChange={handleChange}
              name="subject"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Contact:
            <input
              type="number"
              placeholder="8916882905"
              value={teacherData.contact}
              onChange={handleChange}
              name="contact"
              required
            />
          </label>
        </div>
        <button type="submit">{teacher?"update":"add"}</button>
      </form>
    </>
  );
};
