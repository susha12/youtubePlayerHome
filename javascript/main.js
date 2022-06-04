let iconsNav = document.querySelector(".icons.nav");
let mainLeft = document.querySelector(".main_left");
iconsNav.onclick = ()=>{
    mainLeft.classList.toggle("active");
    console.log("yes")
}