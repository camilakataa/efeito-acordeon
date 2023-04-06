const DuvidasERespostas = document.querySelectorAll(".duvida");

DuvidasERespostas.forEach(function(duvida) {
    duvida.addEventListener("click", function() {
        const duvidaAtivaAtual = document.querySelector(".ativa");

        if (duvidaAtivaAtual) {
            duvidaAtivaAtual.classList.remove("ativa");
        }

        duvida.classList.add("ativa")

        if (duvidaAtivaAtual) {
            duvidaAtivaAtual.classList.remove("ativa");
        }
    });
});