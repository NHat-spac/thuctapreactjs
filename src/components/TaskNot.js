import React from "react";
import './TaskNot.css';

const freeCourses = [
  {
    imgSrc: "https://th.bing.com/th/id/R.584d18473302914034e39a1ed9ee4a98?rik=orZLXsOSO%2b8LcQ&pid=ImgRaw&r=0",
    title: "Task 1",
    week: "Tuần 1",
    progress: 30,  
  },
  {
    imgSrc: "https://th.bing.com/th/id/OIP.phSOjfry0ne-X3b7jDuMzAAAAA?rs=1&pid=ImgDetMain",
    title: "Task 2",
    week: "Tuần 2",
    progress: 64,
  },
  {
    imgSrc: "https://static.vecteezy.com/system/resources/previews/025/769/899/original/checklist-icon-for-graphic-and-web-design-vector.jpg",
    title: "Task 3",
    week: "Tuần 3",
    progress: 78,
  },
  {
    imgSrc: "https://thumbs.dreamstime.com/b/clipboard-line-icon-checklist-symbol-web-site-app-design-clipboard-line-icon-checklist-symbol-web-site-app-design-266570462.jpg",
    title: "Task 4",
    week: "Tuần 4",
    progress: 81,
  },
];

function FreeCourses() {
  return (
    <div className="free-courses">
      <div className="section-title">
        <h4>Nhiệm vụ chưa hoàn thành</h4>
      </div>
      <div className="course-list">
        {freeCourses.map((course, index) => (
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
    </div>
  );
}

export default FreeCourses;
