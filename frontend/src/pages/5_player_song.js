import { handleExecuteBtn } from "../services/3_buttonFunctions.js";
import { createCustomHTMLElement } from "../services/6_HTMLbuilder.js";

export function buildSongPlayerPage() {
    /* const url = localStorage.getItem('Execute_url');
    createPlayer(url); */
    
    let trackID = localStorage.getItem('trackID');
    let trackIMAGE = localStorage.getItem('trackIMAGE');
    let currentSong = JSON.parse(localStorage.getItem(`searchResultsFor_${trackID}`));

    if (typeof (currentSong) !== Array) {
        trackIMAGE = [trackIMAGE];
        trackID = [trackID];
        currentSong = [currentSong];
    };

    console.log('current song object', currentSong);
    console.log('trackID', trackID);
    console.log('trackIMAGE', trackIMAGE);

    createPlayer(currentSong);
    createButtonsAndPlaylist(currentSong, trackIMAGE);
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

/* function createPlayer(url) {
  
    const songPlayer = document.getElementsByClassName('songPlayer')[0];
    const htmlAudio = songPlayer.appendChild(createCustomHTMLElement('audio', 'audioPlayer', ''));
    const source = htmlAudio.appendChild(createCustomHTMLElement('source', '', ''));
    source.setAttribute('src', url);
    source.setAttribute('type', 'audio/mpeg');

    //building control buttons
    const audioControls = document.getElementById("audioControls");
    const playButton = audioControls.appendChild(createCustomHTMLElement('button', 'playButton', ''));
    playButton.addEventListener('click', () => { callPlayButton(htmlAudio) });
    const pauseButton = audioControls.appendChild(createCustomHTMLElement('button', 'pauseButton', ''));
    pauseButton.addEventListener('click', () => { callPauseButton(htmlAudio) });
    document.getElementsByClassName('pauseButton')[0].style.display = "none";
};
 */

function createPlayer(currentSong) {

    const songPlayer = document.getElementsByClassName('songPlayer')[0];
    const htmlAudio = songPlayer.appendChild(createCustomHTMLElement('audio', 'audioPlayer', ''));
    const source = htmlAudio.appendChild(createCustomHTMLElement('source', '', ''));
    const url = currentSong[0].preview;
    source.setAttribute('src', url);
    source.setAttribute('type', 'audio/mpeg');

    //building control buttons
    const audioControls = document.getElementById("audioControls");
    const playButton = audioControls.appendChild(createCustomHTMLElement('button', 'playButton', ''));
    playButton.addEventListener('click', () => { callPlayButton(htmlAudio) });
    const pauseButton = audioControls.appendChild(createCustomHTMLElement('button', 'pauseButton', ''));
    pauseButton.addEventListener('click', () => { callPauseButton(htmlAudio) });
    document.getElementsByClassName('pauseButton')[0].style.display = "none";
};

function createButtonsAndPlaylist(currentSong, trackIMAGE) {
    let now_playing = document.querySelector(".now-playing");
    let track_art = document.querySelector(".track-art");
    let track_name = document.querySelector(".track-name");
    let track_artist = document.querySelector(".track-artist");


    let seek_slider = document.querySelector(".seek_slider");
    let volume_slider = document.querySelector(".volume_slider");
    let curr_time = document.querySelector(".current-time");
    let total_duration = document.querySelector(".total-duration");

    let updateTimer;

    let curr_track = document.getElementsByClassName('audioPlayer');

    // Define the list of tracks that have to be played
    let track_list = currentSong;

    function playTrack(audio) {
        callPlayButton(audio)
    } 
    
    function seekUpdate(curr_track) {
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

    // Clear the previous seek timer
    clearInterval(updateTimer);

    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;

        curr_track = document.getElementsByClassName('audioPlayer');
        const song = track_list[0];

        curr_track.src = song.preview;
    
        track_art.style.backgroundImage = "url(" + trackIMAGE[0] + ")";
        track_name.textContent = song.title;

        now_playing.textContent = "Playing 1 song of 1";

        updateTimer = setInterval(seekUpdate, 1000);

        callPlayButton();

       
        /* const prevButton = document.getElementsByClassName('prev-track');
        prevButton.addEventListener('click', () => {
            if (index >= 0 && index <= track_list.length)
                index -= 1;
            else index = 0;
        });

        const nextButton = document.getElementsByClassName('next-track');
        nextButton.addEventListener('click', () => {
            if (index < track_list.length - 1)
                index += 1;
            else index = 0;
        }); */

        function setVolume() {
            curr_track.volume = volume_slider.value / 100
        }

        function seekTo() {
            const song_seekto = curr_track.duration * (seek_slider.value / 100);
            curr_track.currentTime = song_seekto}
        }

        seek_slider.addEventListener('click', seekTo);

        volume_slider.addEventListener('click', setVolume);

        curr_time.addEventListener('click', seekUpdate(curr_track));
        total_duration.addEventListener('click', seekUpdate(curr_track));


        curr_track.addEventListener("ended", () => {
            curr_time.textContent = "00:00";
            total_duration.textContent = "00:00";
            seek_slider.value = 0;
            if (index < track_list.length - 1)
                index += 1;
            else index = 0;
        });

};

/* for (let index = 0; index < track_list.length; index++) {
    curr_track = document.getElementsByClassName('audioPlayer');
    const song = track_list[index];

    curr_track.src = song.preview;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + trackIMAGE[index] + ")";
    track_name.textContent = song.title;

    now_playing.textContent = "Playing " + (track_index + 1) + " song of " + track_list.length;

    updateTimer = setInterval(seekUpdate, 1000);

    playTrack();

   
    const prevButton = document.getElementsByClassName('prev-track');
    prevButton.addEventListener('click', () => {
        if (index >= 0 && index <= track_list.length)
            index -= 1;
        else index = 0;
    });

    const nextButton = document.getElementsByClassName('next-track');
    nextButton.addEventListener('click', () => {
        if (index < track_list.length - 1)
            index += 1;
        else index = 0;
    });

    seek_slider.addEventListener('click', () => {  
    const song_seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = song_seekto});

    volume_slider.addEventListener('click', () => { curr_track.volume = volume_slider.value / 100 });

    curr_time.addEventListener('click', seekUpdate(curr_track));
    total_duration.addEventListener('click', seekUpdate(curr_track));


    curr_track.addEventListener("ended", () => {
        curr_time.textContent = "00:00";
        total_duration.textContent = "00:00";
        seek_slider.value = 0;
        if (index < track_list.length - 1)
            index += 1;
        else index = 0;
    });
}; */


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
