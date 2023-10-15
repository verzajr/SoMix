import { createCustomHTMLElement, createImageElement } from "../services/6_HTMLbuilder.js";
import { handleExecuteBtn } from "../services/3_buttonFunctions.js";
import processGeneralSearchResults from "../services/5_generalSearchDataProcessing.js";

function getSearchResultsFromLocalStorage(searchValue){
    
    console.log('meu search value', searchValue);

    const generalSearchResult = JSON.parse(localStorage.getItem('searchResult'));
    console.log('resultado de general', generalSearchResult);
    return generalSearchResult;
    
}

const createOptionsButtonElement = () => {

    const optionsButton = document.createElement('div');
    optionsButton.className = 'dropdown';

        const dropButton = optionsButton.appendChild(createCustomHTMLElement('button', 'dropbtn', ''));
        dropButton.appendChild(createCustomHTMLElement('i','fa fa-caret-down',''));

        const dropDownContent = optionsButton.appendChild(createCustomHTMLElement('div', 'dropdown-content',''));
            
            const executeButton = dropDownContent.appendChild(createCustomHTMLElement('a','resultFrame','Executar'));
            executeButton.addEventListener('click', handleExecuteBtn);

            const addFavoriteButton = dropDownContent.appendChild(createCustomHTMLElement('a','resultFrame','Adicionar aos favoritos'));
            addFavoriteButton.setAttribute('href', '#/favoritesongs')

            const addPlaylistBtn = dropDownContent.appendChild(createCustomHTMLElement('a','resultFrame','Adicionar a uma playlist'));
            addPlaylistBtn.setAttribute('href', '#/playlist')

    return optionsButton;
};


const createCard = (element, image, url) => {

    const resultCard = createCustomHTMLElement('div', 'resultFrame', "");
    resultCard.setAttribute('id',url)
    resultCard.appendChild(createImageElement(image));
    resultCard.appendChild(createCustomHTMLElement('p', 'cardText', element));
    resultCard.appendChild(createOptionsButtonElement());
    return resultCard;
}

const gatherCards = (resultsArray, referenceHTMLElement, cardType) => {
    console.log(`Gathering ${cardType} cards...`);
    if (cardType === 'Artists') {
        const allArtists = resultsArray.map((e) => ({ artist: e.artist.name, image: e.artist.picture, executionURL: e.artist.tracklist }));
        allArtists.forEach((e) => referenceHTMLElement.appendChild(createCard(e.artist, e.image, e.executionURL)));
    };
    if (cardType === 'Albums') {
        const allAlbums = resultsArray.map((e) => ({ album: e.album.title, image: e.album.cover, executionURL: e.album.tracklist }));
        allAlbums.forEach((e) => referenceHTMLElement.appendChild(createCard(e.album, e.image, e.executionURL)));
    };
    if (cardType === 'Tracks') {
        console.log('MY RESULTS', resultsArray);
        const allTracks = resultsArray.map((e) => ({ track: e.title, image: e.album.cover, executionURL: e.preview }));
        allTracks.forEach((e) => referenceHTMLElement.appendChild(createCard(e.track, e.image, e.executionURL)));
    };

}

const renderArtistCards = () => {
    const artistArray = JSON.parse(localStorage.getItem('searchResults_Artists'));
    const artistTiles = document.getElementById('artistTiles');//referecenHTMLElement
    gatherCards(artistArray, artistTiles, "Artists");
}

const renderAlbumCards = () => {
    const albumArray = JSON.parse(localStorage.getItem('searchResults_Albums'));
    const albumTiles = document.getElementById('albumTiles');//referecenHTMLElement
    gatherCards(albumArray, albumTiles, "Albums");
}

const renderTrackCards = () => {
    const trackArray = JSON.parse(localStorage.getItem('searchResults_Tracks'));
    const trackTiles = document.getElementById('trackTiles');//referecenHTMLElement
    gatherCards(trackArray, trackTiles, "Tracks");
}

function buildSearchPage(){
    const searchValue = localStorage.getItem('searchValue');
    const generalSearchResult = getSearchResultsFromLocalStorage(searchValue);
    processGeneralSearchResults(searchValue, generalSearchResult);

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