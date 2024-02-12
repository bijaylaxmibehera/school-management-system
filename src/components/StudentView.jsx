import React, { useEffect } from "react";
import { StudentList } from "../features/student/StudentList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../features/student/studentSlice";

export const StudentView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const status = useSelector((state) => state.students.status);
  const error = useSelector((state) => state.students.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);
  return (
    <div>
      <h2>Students view</h2>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          {status === "error" ? (
            error
          ) : students.length === 0 ? (
            <p>No students found</p>
          ) : (
            <StudentList students={students} />
          )}
        </div>
      )}
      <Link to={`/students/add`}>Add student</Link>
    </div>
  );
};
