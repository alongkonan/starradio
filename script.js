// Get audio player elements
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const volumeSlider = document.getElementById('volume-slider');
const connectionStatus = document.getElementById('connection-status');

// Initialize volume
audioPlayer.volume = volumeSlider.value / 100;

// Play button click handler
playBtn.addEventListener('click', () => {
    audioPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'flex';
    connectionStatus.textContent = 'Now streaming...';
    connectionStatus.style.color = '#4ade80';
});

// Pause button click handler
pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'flex';
    connectionStatus.textContent = 'Paused';
    connectionStatus.style.color = '#fbbf24';
});

// Volume slider change handler
volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value / 100;
});

// Audio player events
audioPlayer.addEventListener('play', () => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'flex';
});

audioPlayer.addEventListener('pause', () => {
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'flex';
});

audioPlayer.addEventListener('playing', () => {
    connectionStatus.textContent = 'Now streaming...';
    connectionStatus.style.color = '#4ade80';
});

audioPlayer.addEventListener('ended', () => {
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'flex';
});

audioPlayer.addEventListener('error', () => {
    connectionStatus.textContent = 'Connection error';
    connectionStatus.style.color = '#ef4444';
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'flex';
});

audioPlayer.addEventListener('waiting', () => {
    connectionStatus.textContent = 'Buffering...';
    connectionStatus.style.color = '#fbbf24';
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }
});

// Update song titles periodically (for radio.co embeds)
setInterval(() => {
    // The radio.co scripts will automatically update these
    // This is just to ensure the page stays responsive
}, 5000);

console.log('Star Radio Player loaded successfully');
