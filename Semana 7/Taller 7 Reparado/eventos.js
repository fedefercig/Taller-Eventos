document.addEventListener('DOMContentLoaded', function() {

    const btn = document.getElementById("saludarButton");
    btn.addEventListener('click', function() {
        alert("¡Hola!");
        event.stopPropagation();
    });

    const btnDiv = document.getElementById("div");
    btnDiv.addEventListener('click', function() {
        alert("¡Hola!¡Soy el div!");
    });
});