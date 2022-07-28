import addToCart from "./addToCart";

// getting course Info selected buy user
export default function getCourseInfo(course) {
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
