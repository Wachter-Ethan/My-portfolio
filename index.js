function btn_CV() {
    var section = document.getElementById("action_btn");
    
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        document.getElementsByClassName("btn_CV")[0].innerHTML = "↑";
    } else {
        section.style.display = "none";
        document.getElementsByClassName("btn_CV")[0].innerHTML = "Cliquez ici pour voire mon CV.";
    }
}

function img_projet_1() {
    let menu = document.getElementById("page_menu");
    let projet_1 = document.getElementById("projet_cine");

    if (menu.classList.contains("page_menu_on")) {
        menu.classList.remove("page_menu_on");
        menu.classList.add("page_menu_off");
        projet_1.classList.remove("projet_cine_off")
        projet_1.classList.add("projet_cine_on")
    } else {
        menu.classList.remove("page_menu_off");
        menu.classList.add("page_menu_on");
        projet_1.classList.remove("projet_cine_on")
        projet_1.classList.add("projet_cine_off")
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}