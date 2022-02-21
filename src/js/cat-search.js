//vars
const selectBtn = document.querySelectorAll('.select-btn')

// function
selectBtn.forEach(el => {
    el.addEventListener("click",()=>{
        el.classList.toggle("select-btn-on");
    })
})