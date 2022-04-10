function openMenu(){
    let menu = document.getElementById('mobileMenu')
    let button = document.getElementById('openMenu')
    if (menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        button.style.position = "fixed";
        button.style.right = "20px"

    }
}