import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  setGenderFilter,
  setStandardFilter,
  setSortBy,
} from "../features/student/studentSlice";
import { StudentList } from "../features/student/StudentList";

export const ClassView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const filterByStandard = useSelector(
    (state) => state.students.filterByStandard
  );
  const filterByGender = useSelector((state) => state.students.filterByGender);
  const sortBy = useSelector((state) => state.students.sortBy);

  const filteredStudentsByStandard = students.filter((student) => {
    if (filterByStandard === "All") {
      return true;
    } else {
      return student.standard === filterByStandard;
    }
  });

  const filteredStudents = filteredStudentsByStandard.filter((student) => {
    if (filterByGender === "All") {
      return true;
    } else {
      return student.gender === filterByGender;
    }
  });

  const sortStudents = (students, sortBy) => {
    switch (sortBy) {
      case "name":
        return students.sort((a, b) => a.name.localeCompare(b.name));
      case "age":
        return students.sort((a, b) => b.age - a.age);
      case "marks":
        return students.sort((a, b) => b.marks - a.marks);
      case "attendance":
        return students.sort((a, b) => b.attendance - a.attendance);
      default:
        return students;
    }
  };
  const sortedStudents = sortStudents(filteredStudents, sortBy);
  const handleStandardChange = (e) => {
    dispatch(setStandardFilter(e.target.value));
  };

  const handleGenderChange = (e) => {
    dispatch(setGenderFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);
  return (
    <>
      <h2>Class</h2>
      <div>
        <label htmlFor="standard">Standard:</label>
        <select onChange={handleStandardChange}>
          <option value="All">All</option>
          <option value="I"> I</option>
          <option value="II"> II</option>
          <option value="III"> III</option>
          <option value="IV"> IV</option>
          <option value="V"> V</option>
          <option value="VI"> VI</option>
          <option value="VII">VII</option>
          <option value="VIII"> VIII</option>
          <option value="IX"> IX</option>
          <option value="X"> X</option>
          <option value="XI"> XI</option>
          <option value="XII"> XII</option>
        </select>
      </div>
      <div>
        <label htmlFor="gender">Filter By Gender:</label>
        <select onChange={handleGenderChange}>
          <option value="All">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="sort">Sort by: </label>
        <select onChange={handleSortChange}>
          <option value="All">All</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="attendance">Attendance</option>
          <option value="marks">Marks</option>
        </select>
      </div>
      {sortedStudents.length === 0 ? (
        <p>No students found!!</p>
      ) : (
        <StudentList students={sortedStudents} />
      )}
    </>
  );
};
