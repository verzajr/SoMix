import { handleExecuteBtn } from "../services/3_buttonFunctions.js";
import { createCustomHTMLElement } from "../services/6_HTMLbuilder.js";

export function buildSongPlayerPage() {
    /* const url = localStorage.getItem('Execute_url');
    createPlayer(url); */
    
    let trackID = localStorage.getItem('trackID');
/*     let trackIMAGE = localStorage.getItem('trackIMAGE'); */
    let currentSong = JSON.parse(localStorage.getItem(`searchResultsFor_${trackID}`));

    if (typeof (currentSong) !== Array) {
/*         trackIMAGE = [trackIMAGE]; */
        trackID = [trackID];
        currentSong = [currentSong];
    };

    console.log('current song object', currentSong);
    console.log('trackID', trackID);
/*     console.log('trackIMAGE', trackIMAGE); */

    createPlayer(currentSong);
    createButtonsAndPlaylist(currentSong);
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

function createButtonsAndPlaylist(currentSong) {
    const htmlAudio = document.getElementsByClassName('audioPlayer');
    let now_playing = document.querySelector(".now-playing");
    let track_art = document.querySelector(".track-art");
    let track_name = document.querySelector(".track-name");
    let track_artist = document.querySelector(".track-artist");


    let seek_slider = document.querySelector(".seek_slider");
    let volume_slider = document.querySelector(".volume_slider");
    let curr_time = document.querySelector(".current-time");
    let total_duration = document.querySelector(".total-duration");

    track_art.src = currentSong[0].album.cover_xl;
    track_name.innerHTML = currentSong[0].title;
    track_artist.innerHTML=currentSong[0].artist.name;
    now_playing.innerHTML="playing 1 of 1";
    let total_duration_min = currentSong[0].duration%60;
    let total_duration_sec = Number(60/((currentSong[0].duration) - (currentSong[0].duration%60)));
    total_duration.innerHTML= total_duration_min + ":" + total_duration_sec;
    curr_time.innerHTML=htmlAudio.currentTime;

    
    const showRangeProgress = (rangeInput) => {
        const htmlAudio = document.getElementsByClassName('audioPlayer');
        if(rangeInput === seek_slider) {
          htmlAudio.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        } else {
          htmlAudio.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        }
    }
    
    seek_slider.addEventListener('input', (e) => {
        showRangeProgress(e.target);
    });
    volume_slider.addEventListener('input', (e) => {
        showRangeProgress(e.target);
    });
};

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
                    <input type="range" min="1" max="100" value="0" class="seek_slider">
                    <div class="total-duration">00:00</div>
                </div>

                <div class="slider_container">   <!-- Define the section for displaying the volume slider-->
                    <i class="fa fa-volume-down"></i>
                    <output id="volume-output">100</output>
                    <input type="range" min="1" max="100" value="99" class="volume_slider">
                    <i class="fa fa-volume-up"></i>
                </div>
            </div>
        </div>
        `
    }
};
