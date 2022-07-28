import buyCourse from "./functions/buyCourse";

// container containes courses
const courses = document.querySelector(".container");

// ** event Listeners **
export default function eventListeners() {
  // bu
  courses.addEventListener("click", buyCourse);
}
