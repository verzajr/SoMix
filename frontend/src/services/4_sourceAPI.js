
export async function API_GeneralSearch(searchValue, callback) {
    console.log("API comm started");
    let result = {};
    await DZ.api(`/search?q=${searchValue}`, function (response) {
        console.log("API response", response);
        result = response;
        console.log("API result", result);
        if (typeof callback === "function") {
            callback(searchValue, result);
        };
    });
};


export async function API_ArtistSearch(artistID) {

    await DZ.api(`/artist/${artistID}`, function (response) {
        localStorage.setItem(`searchResultsFor_${artistID}`, JSON.stringify(response));
    });

};

export async function API_AlbumSearch(albumID) {

    await DZ.api(`/album/${albumID}`, function (response) {
        localStorage.setItem(`searchResultsFor_${albumID}`, JSON.stringify(response));
    });

};

export async function API_TrackSearch(trackID) {

    await DZ.api(`/track/${trackID}`, function (response) {
        localStorage.setItem(`searchResultsFor_${trackID}`, JSON.stringify(response));
        window.location.href = "#/songplayer";
    });



};
