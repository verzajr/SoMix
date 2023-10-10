const createCustomHTMLElement = (tagHTML, className, innerText) => {
    console.log('createCustomElement...');
    const e = document.createElement(tagHTML);
    e.className = className;
    e.innerText = innerText;
    if (tagHTML==='option'){
        e.style='background-image:"../icons/options.png"'
    }
    return e;
};

const createImageElement = (imageSource) => {
    console.log('createImageElement...');
    const img = document.createElement('img');
    img.className = 'artistCover';
    img.src = imageSource;
    return img;
  };

  const createOptionsButtonElement = () => {
    console.log('createOptionsButtonElement...');
    const optionsButton = document.createElement('select');
    optionsButton.className = 'optionsButton';
    optionsButton.appendChild(createCustomHTMLElement('option','resultFrame',''))
    optionsButton.appendChild(createCustomHTMLElement('option','resultFrame','Executar'))
    optionsButton.appendChild(createCustomHTMLElement('option','resultFrame','Adicionar aos favoritos'))
    optionsButton.appendChild(createCustomHTMLElement('option','resultFrame','Adicionar a uma playlist'))
    return optionsButton;
  };

const createArtistCard = (artist, image) => {
    console.log('createArtistCard...');
/*     const { name, picture_small } = artist; */
    const artistCard = createCustomHTMLElement('div', 'resultFrame', artist);
    artistCard.appendChild(createImageElement(image));
    artistCard.appendChild(createOptionsButtonElement());
    return artistCard;
}

const gatherArtistCards = (artistsArray) => {
    console.log('entrou na funçao');
    const artistItems = document.getElementById('artistTiles');
    console.log(`Artist Items ${artistItems}`);
    const allArtists = artistsArray.map((e) => ({ artist: e.artist.name, image: e.artist.picture_small }));
    allArtists.forEach((e) => artistItems.appendChild(createArtistCard(e.artist, e.image)));
}

const renderArtistCards = () => {
const artistArray = JSON.parse(localStorage.getItem('searchResults_Artists'));
console.log(artistArray[0].artist.name);
gatherArtistCards(artistArray);
}

export default renderArtistCards;
