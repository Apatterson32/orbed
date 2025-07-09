const canvas = document.getElementById('orbCanvas');
const ctx = canvas.getContext('2d');
const statusElem = document.getElementById('status');
const micButton = document.getElementById('micButton');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;
const BASE_RADIUS = 60;
const MAX_RADIUS = 140;

let audioContext, analyser, dataArray, source;
let volume = 0;
let audioInitialized = false;

// Draw the orb based on current volume (0.0 - 1.0)
function drawOrb(vol) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  // Map volume to radius and color
  const radius = BASE_RADIUS + vol * (MAX_RADIUS - BASE_RADIUS);
  const hue = 200 + Math.floor(vol * 160); // blue to magenta

  // Orb
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = `hsl(${hue}, 90%, 60%)`;
  ctx.shadowColor = `hsl(${hue}, 100%, 70%)`;
  ctx.shadowBlur = 60;
  ctx.fill();
  ctx.shadowBlur = 0;
}

// Get normalized volume from audio data
function getVolume(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    const val = (data[i] - 128) / 128;
    sum += val * val;
  }
  return Math.sqrt(sum / data.length);
}

// Animation loop
function animate() {
  if (audioInitialized && analyser && dataArray) {
    analyser.getByteTimeDomainData(dataArray);
    volume = getVolume(dataArray);
    drawOrb(volume);
  } else {
    drawOrb(0);
  }
  requestAnimationFrame(animate);
}

// Initialize audio (called on button click)
async function initAudio() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    dataArray = new Uint8Array(analyser.fftSize);
    source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);
    statusElem.textContent = "Microphone connected! Speak to see the orb react.";
    micButton.style.display = "none";
    audioInitialized = true;
  } catch (err) {
    statusElem.textContent = "Microphone access denied or unavailable.";
    micButton.disabled = false;
    console.error(err);
  }
}

// Only prompt for mic access on button click
micButton.addEventListener('click', () => {
  initAudio();
  micButton.disabled = true; // Disable after click to avoid repeated prompts
});

// Start everything
drawOrb(0); // Draw initial orb
animate();

#status {
  color: #ff5c5c;
  font-weight: bold;
}

