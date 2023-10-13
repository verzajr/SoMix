import { createCustomHTMLElement } from "../services/6_HTMLbuilder.js";

export function buildSongPlayerPage() {
    const sourceURL = localStorage.getItem('executionSourceURL');
    createPlayer(sourceURL);
};


function callPlayButton(audio){
   audio.play();
   console.log("Playing song...");
   document.getElementsByClassName('playButton')[0].style.display="none";
   document.getElementsByClassName('pauseButton')[0].style.display="inline-block";

}

function callPauseButton(audio){
    audio.pause();
    console.log("Song paused.");
    document.getElementsByClassName('pauseButton')[0].style.display="none";
    document.getElementsByClassName('playButton')[0].style.display="inline-block";
}


function createPlayer(link) {
    const songPlayer = document.getElementsByClassName('songPlayer')[0];
        const htmlAudio = songPlayer.appendChild(createCustomHTMLElement('audio', 'audioPlayer',''));
            const source = htmlAudio.appendChild(createCustomHTMLElement('source','',''));
            source.setAttribute('src', link);
            source.setAttribute('type','audio/mpeg');
            
            //building control buttons
            const audioControls = document.getElementById("audioControls");
                const playButton = audioControls.appendChild(createCustomHTMLElement('button','playButton',''));
                    playButton.addEventListener('click', () => {callPlayButton(htmlAudio)});
                const pauseButton = audioControls.appendChild(createCustomHTMLElement('button','pauseButton',''));
                    pauseButton.addEventListener('click',() => {callPauseButton(htmlAudio)});
                document.getElementsByClassName('pauseButton')[0].style.display="none";
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
        <img class="homePhoto" src="./images/fonoHalf.png"> <!-- adding home picture of half a fonograph -->
        <div class="songPlayer">
            <div id='audioControls'>
        </div>
        `
    }
};

