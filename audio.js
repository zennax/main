
        function playAudio() {
            const audioPlayer = document.getElementById('audio-player');
            const audioSelect = document.getElementById('audioSelect');

            audioSelect.addEventListener('change', function() {
                const selectedOption = audioSelect.options[audioSelect.selectedIndex];
                const audioSource = selectedOption.value;

                audioPlayer.src = audioSource;

                audioPlayer.play();
            });

            audioPlayer.addEventListener('ended', function() {
                const selectedIndex = audioSelect.selectedIndex;

                if (selectedIndex < audioSelect.options.length - 1) {
                    audioSelect.selectedIndex = selectedIndex + 1;

                    audioSelect.dispatchEvent(new Event('change'));
                }
            });
        }

        window.addEventListener('load', playAudio);