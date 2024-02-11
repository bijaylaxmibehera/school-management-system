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
            {student.name} (Age: {student.age}, Standard {student.standard})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
