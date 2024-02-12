import React, { useEffect } from "react";
import { TeachersList } from "../features/teacher/TeachersList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../features/teacher/teacherSlice";

export const TeacherView = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.teachers);
  const status = useSelector((state) => state.teachers.status);
  const error = useSelector((state) => state.teachers.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachers());
    }
  }, [teachers, dispatch]);
  return (
    <>
      <h2>Teachers view</h2>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          {status === "error" ? (
            error
          ) : teachers.length === 0 ? (
            <p>No Teachers found</p>
          ) : (
            <TeachersList teachers={teachers} />
          )}
        </div>
      )}
      <Link to={`/teachers/add`}>Add Teacher</Link>
    </>
  );
};
