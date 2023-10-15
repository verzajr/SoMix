
export function API_GeneralSearch(searchValue, callback) {
    let result={};
    DZ.api(`/search?q=${searchValue}`, async function (response) {
        console.log("API response",response);
        result =  await response;
        console.log("API result",response);
        if (typeof callback === "function") {
           callback(searchValue, result);
        };
    });
};


export function API_ArtistSearch(artistID) {

    DZ.api(`/artist/${artistID}`, function (response) {
        localStorage.setItem(`searchResultsFor_${artistID}`, JSON.stringify(response));
    });

};

export function API_AlbumSearch(albumID) {

    DZ.api(`/album/${albumID}`, function (response) {
        localStorage.setItem(`searchResultsFor_${albumID}`, JSON.stringify(response));
    });

};

export function API_TrackSearch(trackID) {
    
    DZ.api(`/track/${trackID}`, function (response) {
        localStorage.setItem(`searchResultsFor_${trackID}`, JSON.stringify(response));
    });

};
