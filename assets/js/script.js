document.addEventListener('DOMContentLoaded', function () {
    const loading = document.getElementById('loading');
    const container = document.querySelector('.container');
  
    setTimeout(function () {
      loading.style.display = 'none';
      container.style.opacity = '1';
    }, 1500); // Tempo de exibição da página de loading
  });

  const authorInfo = document.querySelector('.author-info');
const authorBtn = document.getElementById('authorBtn');
authorBtn.addEventListener('click', toggleAuthorInfo);

function toggleAuthorInfo() {
  if (authorInfo.style.display === 'none') {
    authorInfo.style.display = 'block';
  } else {
    authorInfo.style.display = 'none';
  }
}
  
  let timer;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let totalSeconds = 0;
  let paused = false;
  
  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const stopBtn = document.getElementById('stopBtn');
  const resetBtn = document.getElementById('resetBtn');
  const timerDisplay = document.getElementById('timer');
  const statusDisplay = document.getElementById('status');
  const progressBar = document.getElementById('progressBar');
  
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  stopBtn.addEventListener('click', stopTimer);
  resetBtn.addEventListener('click', resetTimer);
  
  document.addEventListener('keydown', handleKeyPress);
  
  function startTimer() {
    if (paused) {
      paused = false;
    } else {
      totalSeconds = 0;
    }
  
    timer = setInterval(updateTimer, 1000);
    toggleButtons(true);
    setStatus('Cronômetro em andamento');
  }
  
  function pauseTimer() {
    clearInterval(timer);
    paused = true;
    toggleButtons(false);
    setStatus('Cronômetro pausado');
  }
  
  function stopTimer() {
    clearInterval(timer);
    toggleButtons(false);
    setStatus('Cronômetro parado');
  }
  
  function resetTimer() {
    totalSeconds = 0;
    updateDisplay();
    setStatus('Cronômetro zerado');
  }
  
  function updateTimer() {
    totalSeconds++;
    updateDisplay();
  }
  
  function updateDisplay() {
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = totalSeconds % 60;
  
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    timerDisplay.innerText = formattedTime;
  
    const progressBarWidth = (totalSeconds / (60 * 30)) * 100; // Ajustado para 30 minutos
    progressBar.style.width = progressBarWidth + '%';
  }
  
  function pad(value) {
    return value < 10 ? `0${value}` : value;
  }
  
  function toggleButtons(running) {
    startBtn.disabled = running;
    pauseBtn.disabled = !running;
    stopBtn.disabled = !running;
    resetBtn.disabled = running;
  }
  
  function handleKeyPress(event) {
    switch (event.key) {
      case 's':
        startTimer();
        break;
      case 'p':
        pauseTimer();
        break;
      case 't':
        stopTimer();
        break;
      case 'r':
        resetTimer();
        break;
    }
  }
  
  function setStatus(message) {
    statusDisplay.innerText = message;
  }  