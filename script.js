const talkBtn = document.getElementsByClassName("letsTalk")
const root = document.getElementById("root")

function showOptions(){
    root.innerHTML= "clicked"
    

    
}
talkBtn.addEventListener("click", showOptions)