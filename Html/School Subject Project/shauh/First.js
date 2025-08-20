
const buttonCourse = document.querySelector(".check");
const courseCheck = document.querySelector(".course-reading");

function buttonCheckCourse(){
    if(courseCheck.classList.contains("course-reading")){
        courseCheck.classList.remove("course-reading")
    }
    else{
        courseCheck.classList.add("course-reading");
    }
}
buttonCourse.addEventListener("click", buttonCheckCourse);






