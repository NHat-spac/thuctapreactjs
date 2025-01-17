import React from "react";
import './TaskDone.css';

const courses = [
  {
    imgSrc: "https://static.vecteezy.com/system/resources/previews/014/933/524/non_2x/task-board-icon-outline-work-project-vector.jpg",
    title: "Task 1",
    week: "Tuần 1",
    progress: 100,
  },
  {
    imgSrc: "https://static.vecteezy.com/system/resources/previews/014/933/524/non_2x/task-board-icon-outline-work-project-vector.jpg",
    title: "Task 2",
    week: "Tuần 2",
    progress: 100,
  },
  {
    imgSrc: "https://thumbs.dreamstime.com/b/diagnosis-clipboard-vector-icon-health-care-illustration-symbol-analysis-sign-logo-diagnosis-clipboard-vector-icon-health-care-157746541.jpg",
    title: "Task 3",
    week: "Tuần 3",
    progress: 100,
  },
];

function CourseList() {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.imgSrc} alt={course.title} />
          <div className="course-info">
            <h3>{course.title}</h3>
            <p>{course.week}</p> {/* Thay thế description thành tuần thứ mấy */}
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${course.progress}%` }}></div>
            </div>
            <p className="progress-text">{course.progress}% hoàn thành</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
