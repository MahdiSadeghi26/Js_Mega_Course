// ** variables **
// container containes courses
const courses = document.querySelector(".container");

// ** event Listeners **
eventListeners();
function eventListeners() {
  // bu
  courses.addEventListener("click", buyCourse);
}

//** functions **
// detecting course from buy Button
function buyCourse(e) {
  e.preventDefault();
  //selecting buy Button and parent element
  if (e.target.classList.contains("buyButton")) {
    const course = e.target.parentElement.parentElement;
    // sending course to getCourseInfo function to getting information
    getCourseInfo(course);
  }
}
// getting course Info selected buy user
function getCourseInfo(course) {
  console.log(course);
  // creating obj and imooring course info in obj
  const courseInfo={
    image:course.querySelector('img'),
    title:course.querySelector('h4').textContent,
    price:course.querySelector('.newPrice').textContent,
    id:course.querySelectorAll('a')[1].getAttribute('date-id')
  }
  // adding course to the cart
  console.log(courseInfo);
}
// course info funciton
function courseInfo() {
  
}
