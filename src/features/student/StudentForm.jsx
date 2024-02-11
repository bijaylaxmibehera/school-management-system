import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentAsync, updateStudentSync } from "./studentSlice";
import { useLocation, useNavigate } from "react-router";

export const StudentForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const student = location.state ? location.state : null;
  console.log(student)

  const initialState = student
    ? {
        name: student.name || "",
        age: student.age || 5,
        gender: student.gender || "male",
        grade: student.grade || "O",
        attendance: student.attendance || 0,
        marks: student.marks || 0,
        standard: student.standard || "I",
      }
    : {
        name: "",
        age: 5,
        gender: "male",
        grade: "O",
        attendance: 0,
        marks: 0,
        standard: "I",
      };

  const [formData, setFormData] = useState(initialState);
  const { name, age, gender, grade, attendance, marks, standard } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student) {
      dispatch(
        updateStudentSync({ id: student._id, updatedStudent: formData })
      );
      navigate(`/students/${student._id}`);
    } else {
      dispatch(addStudentAsync(formData));
      setFormData(initialState);
      navigate("/students");
    }
  };

  return (
    <>
      <h2>{student ? "Edit student" : "Add student"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="John"
            value={name}
            onChange={handleChange}
            name="name"
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleChange}
            name="age"
            min={5}
            required
          />
        </label>
        <div>
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              checked={gender === "others"}
              onChange={handleChange}
            />
            Others
          </label>
        </div>
        <div>
          <label>Standard: </label>
          <select value={standard} onChange={handleChange} required name="standard">
            <option value="I">Std I</option>
            <option value="II">Std II</option>
            <option value="III">Std III</option>
            <option value="IV">Std IV</option>
            <option value="V">Std V</option>
            <option value="VI">Std VI</option>
            <option value="VII">Std VII</option>
            <option value="VIII">Std VIII</option>
            <option value="IX">Std IX</option>
            <option value="X">Std X</option>
            <option value="XI">Std XI</option>
            <option value="XII">Std XII</option>
          </select>
        </div>
        <div>
          <label>Grade: </label>
          <select value={grade} onChange={handleChange} required name="grade">
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </div>
        <div>
          <label>Attendance: 
            <input 
             type="number"
             placeholder="10"
             value={attendance}
             onChange={handleChange}
             required
             name="attendance"
            />
          </label>
        </div>
        <div>
          <label>Marks: 
            <input 
             type="number"
             placeholder="10"
             value={marks}
             onChange={handleChange}
             required
             name="marks"
            />
          </label>
        </div>
        <button type="submit">{student ? "Update" : "Add"}</button>
      </form>
    </>
  );
};
