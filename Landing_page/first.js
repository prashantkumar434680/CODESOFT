// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songList = document.querySelectorAll('.playlist ul li');
    const audioPlayer = new Audio();
    let currentSongIndex = 0;

    function loadSong(index) {
        const song = songList[index];
        audioPlayer.src = song.getAttribute('data-src');
        document.querySelector('.current-song h3').textContent = song.textContent;
        document.querySelector('.current-song p').textContent = 'Artist Name'; // Update artist name as needed
        audioPlayer.play();
    }

    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
        loadSong(currentSongIndex);
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songList.length;
        loadSong(currentSongIndex);
    });

    songList.forEach((song, index) => {
        song.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(index);
        });
    });

    // Load the first song by default
    loadSong(currentSongIndex);
});
