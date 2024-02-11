import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentAsync } from "./studentSlice";

export const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const student = useSelector((state) =>
    state.students.students.find((std) => std._id === id)
  );

  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
    navigate("/students");
  };
  return (
    <>
      {student ? (
        <>
        <h2>Student Details</h2>
        <div>
          <p>
            <span>Name:</span>
            {student.name}
          </p>
          <p>
            <span>Age:</span>
            {student.age}
          </p>
          <p>
            <span>Standard:</span>
            {student.standard}
          </p>
          <p>
            <span>Gender:</span>
            {student.gender}
          </p>
          <p>
            <span>Grade:</span>
            {student.grade}
          </p>
          <p>
            <span>Attendance: </span>
            {student.attendance}
          </p>
          <p>
            <span>Marks: </span>
            {student.marks}
          </p>
          <Link to={`/students/edit/${id}`} state={student}>
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </>
      ) : (
        <p>Student not found</p>
      )}
    </>
  );
};
