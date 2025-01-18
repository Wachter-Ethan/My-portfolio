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

// footer
