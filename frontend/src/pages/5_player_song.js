import { createCustomHTMLElement } from "../services/6_HTMLbuilder.js";

export function buildSongPlayerPage() {
    const sourceURL = localStorage.getItem('executionSourceURL');
    createPlayer(sourceURL);
};

function createPlayer(link) {
    const songPlayer = document.getElementsByClassName('songPlayer')[0];
    console.log(songPlayer);
    const htmlAudio = songPlayer.appendChild(createCustomHTMLElement('audio', 'audioPlayer',''));
    htmlAudio.setAttribute('controls',true);
    const source = htmlAudio.appendChild(createCustomHTMLElement('source','',''));
    source.setAttribute('src', link);
    source.setAttribute('type','audio/mpeg')
}




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
        </div>
        `
    }
};

