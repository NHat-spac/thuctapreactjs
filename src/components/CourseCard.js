import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, learners, lessons, time }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="course-info">
        <span> {learners}</span>
        <span> {lessons}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default CourseCard;
