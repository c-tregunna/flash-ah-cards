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
            Hello ${userName.value}. Let's get started learning some ${subjectName.value}. Have fun`
    }
})

document.getElementById("clear-btn").addEventListener('click', function() {
    location.reload()
    localStorage.clear()
 })

 welcomeText.textContent = `
        Hello ${userName.value}. Let's get started learning some ${subjectName.value}. Have fun`







