
export function processGeneralSearchResults(searchValue,generalSearchJson){
    let generalSeachData = generalSearchJson.data;
    gatherSearchResults_Artists(searchValue,generalSeachData);
    gatherSearchResults_Albums(searchValue,generalSeachData);
    gatherSearchResults_Tracks(searchValue,generalSeachData);
};

function gatherSearchResults_Artists(searchValue,results){
    let upperCaseSearchValue = searchValue.toUpperCase();
    console.log("search value",upperCaseSearchValue);
    const artistsIDarray = new Array();
    for (let i=0 ; i< results.length; i++){
        let artistName = results[i].artist.name;
        let artistID = results[i].artist.id;
        let upperCaseArtistName = artistName.toUpperCase();
        let artistIDcheck=true;
        if (upperCaseArtistName.includes(upperCaseSearchValue)){
            if (artistsIDarray.length==0){
                artistsIDarray.push(artistID);
                artistIDcheck=false;
            };
            for (let j=0 ; j<artistsIDarray.length; j++){
                if (artistsIDarray[j] == artistID){
                    artistIDcheck=false;
                    };
                };
            if (artistIDcheck==true){
                artistsIDarray.push(artistID);
            };
        };
    };
    console.log("artists",artistsIDarray);
};

function gatherSearchResults_Albums(searchValue,results){
    let upperCaseSearchValue = searchValue.toUpperCase();
    console.log("search value",upperCaseSearchValue);
    const albumsIDarray = new Array();
    for (let i=0 ; i< results.length; i++){
        let albumTitle = results[i].album.title;
        let albumID = results[i].album.id;
        let upperCaseAlbumTitle = albumTitle.toUpperCase();
        let albumIDcheck=true;
        console.log("album name",upperCaseAlbumTitle);
        if (upperCaseAlbumTitle.includes(upperCaseSearchValue)){
            if (albumsIDarray.length==0){
                albumsIDarray.push(albumID);
                console.log("matching result",upperCaseAlbumTitle)
                albumIDcheck=false;
                };
            for (let j=0 ; j<albumsIDarray.length; j++){
                if (albumsIDarray[j] == albumID){
                    albumIDcheck=false;
                    };
                };
            if (albumIDcheck==true){
                albumsIDarray.push(albumID);
                console.log("matching result",upperCaseAlbumTitle);
            };
        };
    };
    console.log("albums",albumsIDarray);
};

function gatherSearchResults_Tracks(searchValue,results){
    let upperCaseSearchValue = searchValue.toUpperCase();
    console.log("search value",upperCaseSearchValue);
    const tracksIDarray = new Array();
    for (let i=0 ; i< results.length; i++){
        let trackTitle = results[i].title;
        let trackID = results[i].id;
        let upperCaseTrackTitle = trackTitle.toUpperCase();
        let trackIDcheck=true;
        console.log("track name",upperCaseTrackTitle);
        if (upperCaseTrackTitle.includes(upperCaseSearchValue)){
            if (tracksIDarray.length==0){
                tracksIDarray.push(trackID);
                console.log("matching result",upperCaseTrackTitle)
                trackIDcheck=false;
                };
            for (let j=0 ; j<tracksIDarray.length; j++){
                if (tracksIDarray[j] == trackID){
                    trackIDcheck=false;
                    };
                };
            if (trackIDcheck==true){
                tracksIDarray.push(trackID);
                console.log("matching result",upperCaseTrackTitle);
            };
        };
    };
    console.log("tracks",tracksIDarray);
};
