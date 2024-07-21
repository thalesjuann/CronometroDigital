const btnIni = document.querySelector('.btnIni');
const btnPar = document.querySelector('.btnPar');
const btnRes = document.querySelector('.btnRes');
const ms = document.querySelector('.ms');
const s = document.querySelector('.s');
const m = document.querySelector('.m');

let milis = 0, seg = 0, min = 0, intervalo;

function formatTime(unit) {
    return unit.toString().padStart(2, '0');
}

function updateDisplay() {
    ms.innerHTML = formatTime(milis);
    s.innerHTML = formatTime(seg);
    m.innerHTML = formatTime(min);
}

function tick() {
    milis++;
    if (milis >= 100) {
        milis = 0;
        seg++;
    }
    if (seg >= 60) {
        seg = 0;
        min++;
    }
    updateDisplay();
}

function iniciar() {
    clearInterval(intervalo);
    intervalo = setInterval(tick, 10);
}

function parar() {
    clearInterval(intervalo);
}

function resetar() {
    clearInterval(intervalo);
    milis = seg = min = 0;
    updateDisplay();
}

btnIni.addEventListener('click', () => {
    iniciar();
    btnIni.textContent = "Iniciar";
});
btnPar.addEventListener('click', () => {
    parar();
    if (milis === 0 && seg === 0 && min === 0) {
        btnIni.textContent = "Iniciar";
    } else {
        btnIni.textContent = "Retomar";
    }
});
btnRes.addEventListener('click', () => {
    resetar();
    btnIni.textContent = "Iniciar";
});