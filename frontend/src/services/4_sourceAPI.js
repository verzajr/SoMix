
export async function API_GeneralSearch(searchValue) {

    localStorage.removeItem('searchResults');

    DZ.api(`/search?q=${searchValue}`, function (response) {
        localStorage.setItem('searchResults', JSON.stringify(response))
    });
};


export function API_ArtistSearch(artistID) {

    DZ.api(`/artist/${artistID}`, function (response) {
        localStorage.setItem(`${artistID}`, JSON.stringify(response))
    });

};

export function API_AlbumSearch(albumID) {

    DZ.api(`/album/${albumID}`, function (response) {
        localStorage.setItem(`${albumID}`, JSON.stringify(response))
    });

};

export function API_TrackSearch(trackID) {
    
    DZ.api(`/track/${trackID}`, function (response) {
        localStorage.setItem(`${trackID}`, JSON.stringify(response))
    });

};
