function toggleAudio() {
    var audioDiv = document.querySelector('#hidden'); // Select the audio2 div
    if (audioDiv.style.display === 'none') {
        audioDiv.style.display = 'flex'; // Display the element
    } else {
        audioDiv.style.display = 'none'; // Hide the element
    }
}