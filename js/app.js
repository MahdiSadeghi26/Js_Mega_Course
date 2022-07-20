// ** variables **
// container containes courses
const courses=document.querySelector('.container')

// ** event Listeners **
eventListeners()
function eventListeners() {
    courses.addEventListener('click',buyCourse)
}

//** functions **
function buyCourse(e) {
    e.preventDefault()
    if (e.target.classList.contains('buyButton')) {
        const course=e.target.parentElement.parentElement
        getCourseInfo(course)
    }
}
function getCourseInfo(course) {
    console.log(course)
}
