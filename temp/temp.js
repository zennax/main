const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const playlist = document.getElementById('playlist');
const playlistItems = playlist.getElementsByTagName('li');

playPauseBtn.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('input', setProgress);
volume.addEventListener('input', setVolume);

for (let i = 0; i < playlistItems.length; i++) {
    playlistItems[i].addEventListener('click', function () {
        const songSrc = this.getAttribute('data-src');
        changeSong(songSrc);
        togglePlayPause();
    });
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9658;'; // Play symbol
    }
}

function updateProgress() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.value = percentage;

    // Update track duration display
    const durationDisplay = document.getElementById('duration');
    durationDisplay.innerHTML = formatTime(audio.duration);
}

function setProgress() {
    const newTime = (progress.value / 100) * audio.duration;
    audio.currentTime = newTime;
}

function setVolume() {
    audio.volume = volume.value / 100;
}

function changeSong(songSrc) {
    audio.src = songSrc;
    audio.load();
}