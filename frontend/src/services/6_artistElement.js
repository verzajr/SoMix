export function handlePlayer(event) {
    window.location.href = "#/player";
    
   /*  localStorage.setItem('evento', event.target.parentNode); */
    console.log('esse é o evento', event.target.parentNod);

}

const createCustomHTMLElement = (tagHTML, className, innerText) => {

    const e = document.createElement(tagHTML);
    e.className = className;
    e.innerText = innerText;
    if (tagHTML === 'option') {
        e.style = 'background-image:"../icons/options.png"'
    }
    if(innerText === 'Executar'){
        console.log('meu elemento executar', e);
        e.addEventListener('click', handlePlayer);
    }
    return e;
};

const createImageElement = (imageSource) => {

    const img = document.createElement('img');
    img.className = 'cardImage';
    img.src = imageSource;
    return img;
};


const createOptionsButtonElement = () => {

    const optionsButton = document.createElement('select');
    optionsButton.className = 'optionsButton';
    optionsButton.appendChild(createCustomHTMLElement('option', 'resultFrame', ''))
    optionsButton.appendChild(createCustomHTMLElement('option', 'resultFrame', 'Executar'))
    optionsButton.appendChild(createCustomHTMLElement('option', 'resultFrame', 'Adicionar aos favoritos'))
    optionsButton.appendChild(createCustomHTMLElement('option', 'resultFrame', 'Adicionar a uma playlist'))
    return optionsButton;
};


const createArtistCard = (artist, image) => {

    const artistCard = createCustomHTMLElement('div', 'resultFrame', "");
    artistCard.appendChild(createImageElement(image));
    artistCard.appendChild(createCustomHTMLElement('p', 'cardText', artist));
    artistCard.appendChild(createOptionsButtonElement());
    return artistCard;
}

const gatherCards = (resultsArray, referenceHTMLElement, cardType) => {
    console.log(`Gathering ${cardType} cards...`);
    if (cardType === 'Artists') {
        const allArtists = resultsArray.map((e) => ({ artist: e.artist.name, image: e.artist.picture }));
        allArtists.forEach((e) => referenceHTMLElement.appendChild(createArtistCard(e.artist, e.image)));
    };
    if (cardType === 'Albums') {
        const allAlbums = resultsArray.map((e) => ({ album: e.album.title, image: e.album.cover }));
        allAlbums.forEach((e) => referenceHTMLElement.appendChild(createArtistCard(e.album, e.image)));
    };
    if (cardType === 'Tracks') {
        const allTracks = resultsArray.map((e) => ({ track: e.title, image: e.album.cover }));
        allTracks.forEach((e) => referenceHTMLElement.appendChild(createArtistCard(e.track, e.image)));
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

export { renderArtistCards, renderAlbumCards, renderTrackCards };
