

export default function processGeneralSearchResults(searchValue, generalSearchJson){

    console.log("Processing General Search...");

    let generalSeachData = generalSearchJson.data;
    const artists = gatherSearchResults_Artists(searchValue, generalSeachData);
    const albums = gatherSearchResults_Albums(searchValue, generalSeachData);
    const tracks = gatherSearchResults_Tracks(searchValue, generalSeachData);
    localStorage.setItem("searchResults_Artists", artists);
    localStorage.setItem("searchResults_Albums", albums);
    localStorage.setItem("searchResults_Tracks", tracks);
};

function gatherSearchResults_Artists(searchValue, results){
    let upperCaseSearchValue = searchValue.toUpperCase();
    console.log("Gathering Artists...");
    const artistsArray = new Array();
    for (let i=0 ; i< results.length; i++){
        let artistName = results[i].artist.name;
        let artistID = results[i].artist.id;
        let upperCaseArtistName = artistName.toUpperCase();
        let needsAdded=true;
        if (upperCaseArtistName.includes(upperCaseSearchValue)){
            if (artistsArray.length==0){
                artistsArray.push(results[i]);
                needsAdded=false;
            };
            for (let j=0 ; j<artistsArray.length; j++){
                if (artistsArray[j].artist.id == artistID){
                    needsAdded=false;
                    };
                };
            if (needsAdded==true){
                artistsArray.push(results[i]);
            };
        };
    };
    return artistsArray;
};

function gatherSearchResults_Albums(searchValue, results){
    let upperCaseSearchValue = searchValue.toUpperCase();
    console.log("Gathering Albums...");
    const albumsArray = new Array();
    for (let i=0 ; i< results.length; i++){
        let albumTitle = results[i].album.title;
        let albumID = results[i].album.id;
        let upperCaseAlbumTitle = albumTitle.toUpperCase();
        let needsAdded=true;
        if (upperCaseAlbumTitle.includes(upperCaseSearchValue)){
            if (albumsArray.length==0){
                albumsArray.push(results[i]);
                needsAdded=false;
                };
            for (let j=0 ; j<albumsArray.length; j++){
                if (albumsArray[j].album.id == albumID){
                    needsAdded=false;
                    };
                };
            if (needsAdded==true){
                albumsArray.push(results[i]);
            };
        };
    };
    return albumsArray;
};

function gatherSearchResults_Tracks(searchValue,results){
    let upperCaseSearchValue = searchValue.toUpperCase();
    console.log("Gathering Tracks...");
    const tracksArray = new Array();
    for (let i=0 ; i< results.length; i++){
        let trackTitle = results[i].title;
        let trackID = results[i].id;
        let upperCaseTrackTitle = trackTitle.toUpperCase();
        let needsAdded=true;
        if (upperCaseTrackTitle.includes(upperCaseSearchValue)){
            if (tracksArray.length==0){
                tracksArray.push(results[i]);
                needsAdded=false;
                };
            for (let j=0 ; j<tracksArray.length; j++){
                if (tracksArray[j] == results[i]){
                    needsAdded=false;
                    };
                };
            if (needsAdded==true){
                tracksArray.push(results[i]);
            };
        };
    };
    return tracksArray;
};