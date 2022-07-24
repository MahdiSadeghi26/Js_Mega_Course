// ** variables **
// container containes courses
const courses = document.querySelector(".container");
// shopping cart content
const shoppingCartContent = document.querySelector("#shoppingCart tbody");

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
  // creating obj and imooring course info in obj
  const courseInfo = {
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".newPrice").textContent,
    id: course.querySelectorAll("a")[1].getAttribute("date-id"),
  };
  // adding course to the cart
  addToCart(courseInfo);
}
// course info funciton
function addToCart(cInfo) {
  // create tr tag
  const row = document.createElement("tr");
  // bulid html template
  row.innerHTML = `
  <tr>
    <td>
      <img src='${cInfo.image} 'width="85px">  
    </td>
    <td width="inherit">
        ${cInfo.title}
    </td>
    <td>  
        ${cInfo.price}
    </td>
    <td>
        <a class='remove' href='#'>X</a>
    </td>
  </tr>
  `;
  shoppingCartContent.appendChild(row);
}
