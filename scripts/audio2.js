
function playAudio() {
    const audioPlayer2 = document.getElementById('audio-player2');
    const audioSelect2 = document.getElementById('audioSelect2');

    audioSelect2.addEventListener('change', function() {
        const selectedOption = audioSelect2.options[audioSelect2.selectedIndex];
        const audioSource = selectedOption.value;

        audioPlayer2.src = audioSource;

        audioPlayer2.play();
    });

    audioPlayer2.addEventListener('ended', function() {
        const selectedIndex = audioSelect2.selectedIndex;

        if (selectedIndex < audioSelect2.options.length - 1) {
            audioSelect2.selectedIndex = selectedIndex + 1;

            audioSelect2.dispatchEvent(new Event('change'));
        }
    });

    // Add event listener for spacebar to pause/resume
    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            if (audioPlayer2.paused) {
                audioPlayer2.play();
            } else {
                audioPlayer2.pause();
            }
        }
    });
}

window.addEventListener('load', playAudio);