const userName = document.getElementById("user-name")
const subjectName = document.getElementById("subject-dropdown")
const modal = document.querySelector(".modal")
const submitBtn = document.getElementById("submit")
const welcomeText = document.getElementById("welcome-message")


// store user name in local storage
if(window.localStorage) {
    userName.value = localStorage.getItem("user-name")
    subjectName.value = localStorage.getItem("subject-dropdown")
}

submitBtn.addEventListener('click', function() {
        localStorage.setItem("user-name", userName.value)
        localStorage.setItem("subject-dropdown", subjectName.value)
        if("user-name" in localStorage){
            modal.style.height = "0px"
            modal.style.overflow = "hidden"
             welcomeText.textContent = `
        Hello ${userName.value}. Do you really want to test your knowledge on ${subjectName.value}? Na, didn't think so. Instead, why not pick from the far more interesting subjects below. Have fun`    }
})

document.getElementById("clear-btn").addEventListener('click', function() {
    modal.style.height = "100vh"
    localStorage.clear()
    welcomeText.textContent = ""
    // console.log(subjectName)
    // subjectName.classList.add("hide")
 })








