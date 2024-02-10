import React from "react";
import { Link } from "react-router-dom";

export const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <Link to={`/students/${student._id}`}>
              <p>Name: {student.name}</p>
              <p>Age: {student.age}</p>
              <p>Grade: {student.grade}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
