import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSchoolStats,
  setTopStudent,
} from "../features/school/schoolSlice";

export const SchoolView = () => {
  const schoolStats = useSelector((state) => state.school);
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();


  useEffect(() => {
    const totalStudents = students.length;
    const totalAttendance = students.reduce(
      (total, currStd) => total + parseFloat(currStd.attendance),
      0
    );
    const averageAttendance = totalAttendance / totalStudents;
    const totalMarks = students.reduce(
      (total, currStd) => total + parseFloat(currStd.marks),
      0
    );

    const averageMarks = totalMarks / totalStudents;
    
    const topStudent = students.reduce(
      (acc, curr) => (curr.marks > (acc.marks ?? 0) ? curr : acc),
      ""
    );
    dispatch(
      updateSchoolStats({
        totalStudents,
        averageAttendance,
        averageMarks,
        topStudent,
      })
    );
    dispatch(setTopStudent(topStudent));
  }, [students, dispatch]);

  
  return (
    <>
     <h2>School view</h2>
     <p>Total Students: {schoolStats.totalStudents}</p>
     <p>Average Attendance: {schoolStats.averageAttendance.toFixed(2)}</p>
     <p>Average Marks: {schoolStats.averageMarks.toFixed(2)}</p>
     <p>Top student:{schoolStats.topStudent?schoolStats.topStudent.name:"-"}</p>
    </>
  );
};
