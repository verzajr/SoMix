import { handleExecuteBtn } from "../services/3_buttonFunctions.js";
import { createCustomHTMLElement } from "../services/6_HTMLbuilder.js";

export function buildSongPlayerPage() {


    let trackID = localStorage.getItem('trackID');

    let currentSong = JSON.parse(localStorage.getItem(`searchResultsFor_${trackID}`));

    if (typeof (currentSong) !== Array) {

        trackID = [trackID];
        currentSong = [currentSong];
    };

    console.log('current song object', currentSong);
    console.log('trackID', trackID);

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
    const playButton = document.getElementById("playButton");
    playButton.addEventListener('click', () => { callPlayButton(htmlAudio) });
    const pauseButton = document.getElementById("pauseButton");
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

    track_art.setAttribute("src", `${currentSong[0].album.cover_xl}`);

    function secondsToMinutes(seconds) {
        function twoDigits(number) {
            if (number <= 9) {
                number = "0" + number;
            }
            return number;
        }
        let minute = twoDigits(Math.round((seconds % 3600) / 60));
        let second = twoDigits((seconds % 3600) % 60);

        let final = minute + ":" + second;

        return final;
    }



    track_name.innerHTML = currentSong[0].title;
    track_artist.innerHTML = currentSong[0].artist.name;
    now_playing.innerHTML = "playing 1 of 1";


    total_duration.innerHTML = secondsToMinutes(currentSong[0].duration)
    curr_time.innerHTML = htmlAudio.currentTime[0];


    const showRangeProgress = (rangeInput) => {
        const audioControls = document.getElementById('audioControls');
        if (rangeInput === seek_slider) {
            audioControls.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        } else {
            audioControls.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
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
                    <img class="track-art"></img>
                    <div class="track-name">Track Name</div>
                    <div class="track-artist">Track Artist</div>
                </div>
                <div class="slider_container">
                    <span class="current-time" class="time">0:00</span>
                    <input type="range" class="seek_slider" max="100" value="0">
                    <span class="total_duration" class="time">0:00</span>
                    <output id="volume_output">100</output>
                    <input type="range" class="volume_slider" max="100" value="100">
                </div>

                <div class="buttons" id="controlButtons">     <!-- Define the section for displaying track buttons -->
                <div class="prev-track" onclick="prevTrack()">
                    <i class="fa fa-step-backward fa-2x"></i>
                    <img src="../icons/rewindbutton.png">
                </div>
                <button class="playButton" id="playButton">
                    <img class="playButton" src="../icons/playbutton.png>
                </button>
                <button class="pauseButton" id="pauseButton">
                    <img class="pauseButton" src="../icons/pausebutton.png>
                </button>
                <div class="next-track" onclick="nextTrack()">
                    <i class="fa fa-step-forward fa-2x"></i>
                    <img src="../icons/fasforwardbutton.png">
                </div>
            </div>
            </div>
        </div>
        `
    }
};
