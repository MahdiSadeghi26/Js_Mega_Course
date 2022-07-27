import getCourseInfo from "./getCourseInfo";

export default function buyCourse(e) {
  e.preventDefault();
  //selecting buy Button and parent element
  if (e.target.classList.contains("buyButton")) {
    const course = e.target.parentElement.parentElement;
    // sending course to getCourseInfo function to getting information
    getCourseInfo(course);
  }
}
