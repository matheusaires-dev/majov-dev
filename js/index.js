class ToggleActive {
    constructor(id){
        document.getElementById(`open-${id}`).addEventListener("click", function () {
            document.getElementById(id).classList.toggle("active");
        });

        document.getElementById(`close-${id}`).addEventListener("click", function () {
            document.getElementById(id).classList.toggle("active");
        });
    }
}


new ToggleActive("menu")