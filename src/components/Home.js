import React from "react";
import TaskDone from "./TaskDone";
import TaskNotDone from "./TaskNot";

const Home = () => {
  const tasksDone = [
    {
      title: "Học ReactJS",
      description: "Hoàn thành khóa học ReactJS cơ bản.",
      progress: 100,
      image: "https://via.placeholder.com/100", // Thay thế bằng link ảnh thực tế
    },
    {
      title: "Học JavaScript",
      description: "Nắm vững kiến thức JavaScript.",
      progress: 100,
      image: "https://via.placeholder.com/100",
    },
  ];

  const tasksNotDone = [
    {
      title: "Học Redux",
      description: "Bắt đầu học quản lý trạng thái với Redux.",
      progress: 40,
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Học TypeScript",
      description: "Làm quen với TypeScript trong dự án React.",
      progress: 20,
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div>
      <TaskDone tasks={tasksDone} />
      <TaskNotDone tasks={tasksNotDone} />
    </div>
  );
};

export default Home;
