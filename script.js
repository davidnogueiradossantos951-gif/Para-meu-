function entrarNaHistoria() {
    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
}
function entrarNaHistoria() {
    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
}

function controlarMusica() {
    const musica = document.getElementById("musica");
    const botao = document.getElementById("botao-musica");

    if (musica.paused) {
        musica.play();
        botao.innerHTML = "🔊";
    } else {
        musica.pause();
        botao.innerHTML = "🎵";
    }
}
