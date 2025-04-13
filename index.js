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
        projet_1.classList.remove("projet_cine_off");
        projet_1.classList.add("projet_cine_on");
    } else {
        menu.classList.remove("page_menu_off");
        menu.classList.add("page_menu_on");
        projet_1.classList.remove("projet_cine_on");
        projet_1.classList.add("projet_cine_off");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function img_projet_2() {
    let menu = document.getElementById("page_menu");
    let projet_2 = document.getElementById("projet_pyxel");

    if (menu.classList.contains("page_menu_on")) {
        menu.classList.remove("page_menu_on");
        menu.classList.add("page_menu_off");
        projet_2.classList.remove("projet_pyxel_off")
        projet_2.classList.add("projet_pyxel_on")
    } else {
        menu.classList.remove("page_menu_off");
        menu.classList.add("page_menu_on");
        projet_2.classList.remove("projet_pyxel_on");
        projet_2.classList.add("projet_pyxel_off");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function img_projet_3() {
    let menu = document.getElementById("page_menu");
    let projet_3 = document.getElementById("projet_flask");

    if (menu.classList.contains("page_menu_on")) {
        menu.classList.remove("page_menu_on");
        menu.classList.add("page_menu_off");
        projet_3.classList.remove("projet_flask_off");
        projet_3.classList.add("projet_flask_on");
    } else {
        menu.classList.remove("page_menu_off");
        menu.classList.add("page_menu_on");
        projet_3.classList.remove("projet_flask_on");
        projet_3.classList.add("projet_flask_off");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function img_projet_4() {
    let menu = document.getElementById("page_menu");
    let projet_4 = document.getElementById("projet_jeu_snake");

    if (menu.classList.contains("page_menu_on")) {
        menu.classList.remove("page_menu_on");
        menu.classList.add("page_menu_off");
        projet_4.classList.remove("projet_jeu_snake_off");
        projet_4.classList.add("projet_jeu_snake_on");
    } else {
        menu.classList.remove("page_menu_off");
        menu.classList.add("page_menu_on");
        projet_4.classList.remove("projet_jeu_snake_on");
        projet_4.classList.add("projet_jeu_snake_off");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function retour_menu() {
    let menu = document.getElementById("page_menu");
    let projet_3 = document.getElementById("projet_flask");
    let projet_2 = document.getElementById("projet_pyxel");
    let projet_4 = document.getElementById("projet_jeu_snake");
    let projet_1 = document.getElementById("projet_cine");

    if (menu.classList.contains("page_menu_off")) {
        menu.classList.remove("page_menu_off");
        menu.classList.add("page_menu_on");
        projet_3.classList.remove("projet_flask_on");
        projet_3.classList.add("projet_flask_off");
        projet_2.classList.remove("projet_pyxel_on");
        projet_2.classList.add("projet_pyxel_off");
        projet_1.classList.remove("projet_cine_on");
        projet_1.classList.add("projet_cine_off");
        projet_4.classList.remove("projet_jeu_snake_on");
        projet_4.classList.add("projet_jeu_snake_off");

    } else {
        menu.classList.remove("page_menu_on");
        menu.classList.add("page_menu_off");
        projet_3.classList.remove("projet_flask_off");
        projet_3.classList.add("projet_flask_on");
        projet_2.classList.remove("projet_pyxel_off");
        projet_2.classList.add("projet_pyxel_on");
        projet_1.classList.remove("projet_cine_off");
        projet_1.classList.add("projet_cine_on");
        projet_4.classList.remove("projet_jeu_snake_off");
        projet_4.classList.add("projet_jeu_snake_on");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}