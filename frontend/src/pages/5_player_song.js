import { createCustomHTMLElement } from "../services/6_HTMLbuilder.js";

export function buildSongPlayerPage() {
    const sourceURL = localStorage.getItem('executionSourceURL');
    createPlayer(sourceURL);
    createButtonsAndPlaylist(sourceURL);
};


function callPlayButton(audio) {
    audio.play();
    console.log("Playing song...");
    document.getElementsByClassName('playButton')[0].style.display = "none";
    document.getElementsByClassName('pauseButton')[0].style.display = "inline-block";

}

function callPauseButton(audio) {
    audio.pause();
    console.log("Song paused.");
    document.getElementsByClassName('pauseButton')[0].style.display = "none";
    document.getElementsByClassName('playButton')[0].style.display = "inline-block";
}


function createPlayer(link) {
    const songPlayer = document.getElementsByClassName('songPlayer')[0];
    const htmlAudio = songPlayer.appendChild(createCustomHTMLElement('audio', 'audioPlayer', ''));
    const source = htmlAudio.appendChild(createCustomHTMLElement('source', '', ''));
    source.setAttribute('src', link);
    source.setAttribute('type', 'audio/mpeg');

    //building control buttons
    const audioControls = document.getElementById("audioControls");
    const playButton = audioControls.appendChild(createCustomHTMLElement('button', 'playButton', ''));
    playButton.addEventListener('click', () => { callPlayButton(htmlAudio) });
    const pauseButton = audioControls.appendChild(createCustomHTMLElement('button', 'pauseButton', ''));
    pauseButton.addEventListener('click', () => { callPauseButton(htmlAudio) });
    document.getElementsByClassName('pauseButton')[0].style.display = "none";
};

function createButtonsAndPlaylist(link) {
    let now_playing = document.querySelector(".now-playing");
    let track_art = document.querySelector(".track-art");
    let track_name = document.querySelector(".track-name");
    let track_artist = document.querySelector(".track-artist");


    let seek_slider = document.querySelector(".seek_slider");
    let volume_slider = document.querySelector(".volume_slider");
    let curr_time = document.querySelector(".current-time");
    let total_duration = document.querySelector(".total-duration");

    // Specify globally used values
    let track_index = 0;
    let updateTimer;

    let curr_track = link;

    // Define the list of tracks that have to be played
    let track_list = [];

    function playTrack(audio) {
        callPlayButton(audio)
    }

    function loadTrack(track_index) {
        // Clear the previous seek timer
        clearInterval(updateTimer);
        resetValues();

        // Load a new track
        curr_track.src = track_list[track_index].path;
        curr_track.load();

        // Update details of the track
        track_art.style.backgroundImage =
            "url(" + track_list[track_index].image + ")";
        track_name.textContent = track_list[track_index].name;
        track_artist.textContent = track_list[track_index].artist;
        now_playing.textContent =
            "PLAYING " + (track_index + 1) + " OF " + track_list.length;

        // Set an interval of 1000 milliseconds
        // for updating the seek slider
        updateTimer = setInterval(seekUpdate, 1000);

        // Move to the next track if the current finishes playing
        // using the 'ended' event
        curr_track.addEventListener("ended", nextTrack);

    }


    // Function to reset all values to their default
    function resetValues() {
        curr_time.textContent = "00:00";
        total_duration.textContent = "00:00";
        seek_slider.value = 0;
    }

 
    function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;

        // Load and play the new track
        loadTrack(track_index);
        playTrack();
    }

    function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;

        // Load and play the new track
        loadTrack(track_index);
        playTrack();
    }
    function seekTo() {
        // Calculate the seek position by the
        // percentage of the seek slider 
        // and get the relative duration to the track
        let seekto = curr_track.duration * (seek_slider.value / 100);

        // Set the current track position to the calculated seek position
        curr_track.currentTime = seekto;
    }

    function setVolume() {
        // Set the volume according to the
        // percentage of the volume slider set
        curr_track.volume = volume_slider.value / 100;
    }

    function seekUpdate() {
        let seekPosition = 0;

        // Check if the current track duration is a legible number
        if (!isNaN(curr_track.duration)) {
            seekPosition = curr_track.currentTime * (100 / curr_track.duration);
            seek_slider.value = seekPosition;

            // Calculate the time left and the total duration
            let currentMinutes = Math.floor(curr_track.currentTime / 60);
            let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(curr_track.duration / 60);
            let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

            // Add a zero to the single digit time values
            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

            // Display the updated duration
            curr_time.textContent = currentMinutes + ":" + currentSeconds;
            total_duration.textContent = durationMinutes + ":" + durationSeconds;
        }
    }
    // Load the first track in the tracklist
    /* loadTrack(track_index); */

}


export const executeSongComponent = {

    render: () => {
        return `
        <head>
  
            <!-- Load FontAwesome icons -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"><!-- Load the custom CSS style file -->

        </head>

        <a href="#/"><img class="logo" src="./images/logoColor.png" alt="Página inicial"></a> <!-- adding application logo -->
        <div class="rightTile">
            <nav>
            <a href="#/signup"><button class="button" type="button">Cadastro</button></a> <!-- adding sign in button -->
            <a href="#/login"><button class="button" type="button">Login</button></a> <!-- adding login button -->
            </nav>
        </div>
        <div class="orangeLine"></div>
        <img class="songPlayerBackground" src="./images/fono.png">
        <div class="songPlayer">
            <div id='audioControls'>
                <div class="details">
                    <div class="now-playing">PLAYING x OF y</div>
                    <div class="track-art"></div>
                    <div class="track-name">Track Name</div>
                    <div class="track-artist">Track Artist</div>
                </div>

                <div class="buttons">     <!-- Define the section for displaying track buttons -->
                    <div class="prev-track" onclick="prevTrack()">
                        <i class="fa fa-step-backward fa-2x"></i>
                    </div>

                    <div class="next-track" onclick="nextTrack()">
                        <i class="fa fa-step-forward fa-2x"></i>
                    </div>
                </div>

                <div class="slider_container">    <!-- Define the section for displaying the seek slider-->
                    <div class="current-time">00:00</div>
                    <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                    <div class="total-duration">00:00</div>
                </div>

                <div class="slider_container">   <!-- Define the section for displaying the volume slider-->
                    <i class="fa fa-volume-down"></i>
                    <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
                    <i class="fa fa-volume-up"></i>
                </div>
            </div>
        </div>
        `
    }
};
