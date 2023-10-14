
export function API_GeneralSearch(searchValue) {

    DZ.api(`/search?q=${searchValue}`, function (response) {
        localStorage.setItem(searchValue, JSON.stringify(response));
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
