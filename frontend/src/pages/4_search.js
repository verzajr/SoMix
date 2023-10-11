// imports page builder functions
import { renderArtistCards, renderAlbumCards, renderTrackCards } from "../services/6_artistElement.js";


function buildSearchPage(){
    renderArtistCards();
    console.log("Building Artist Cards");
    renderAlbumCards();
    console.log("Building Album Cards");
    renderTrackCards();
    console.log("Building Track Cards");
};

const searchResultsComponent = {
    
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
        <div class="artistResultsTile">
        <div class="resultTileTitle">Artistas</div>
            <div id="artistTiles"></div> 
        </div>
        <div class="albumResultsTile">
        <div class="resultTileTitle">Álbuns</div>
            <div id="albumTiles"></div> 
        </div>
        <div class="songResultsTile">
        <div class="resultTileTitle">Músicas</div>
            <div id="trackTiles"></div> 
        </div>
        `
    }
};
export { searchResultsComponent, buildSearchPage };