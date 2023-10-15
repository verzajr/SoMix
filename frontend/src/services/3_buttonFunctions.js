import { API_GeneralSearch, API_ArtistSearch, API_AlbumSearch, API_TrackSearch } from "./4_sourceAPI.js";
import processGeneralSearchResults from "./5_generalSearchDataProcessing.js";

export async function handleSearchClick() {

    const searchFieldValue = document.getElementById("searchField").value; // gets value from search field
    const lowerCaseSearchFieldValue= searchFieldValue.toLowerCase();
    console.log(`Handling Search for "${lowerCaseSearchFieldValue}"...`);
    await API_GeneralSearch(lowerCaseSearchFieldValue, processGeneralSearchResults); // calls API function to search the API repository and gets a Json with results


};

function changeDirection() {
    window.location.href = "#/songplayer";
    console.log('it used HREF reference');
}

export async function handleExecuteBtn(event) {
    const { target } = event;
    const dropButton=target.parentNode;
    const optionsButton=dropButton.parentNode;
    const resultCard = optionsButton.parentNode;
    const ownerCard = resultCard.parentNode;
    console.log('este é o ownerCard', ownerCard);

    /* const url = resultCard.id;
    localStorage.setItem('Execute_url',url); */

    const trackID = resultCard.id;
    console.log(`trackID is ${trackID}`)
    localStorage.setItem('trackID',`${trackID}`);

    const trackIMAGE = resultCard.name;
    console.log(`trackIMAGE is ${trackIMAGE}`)
    localStorage.setItem('trackIMAGE',`${trackIMAGE}`);


    const mySong = await API_TrackSearch(trackID);

    console.log('Found a song ------', mySong);

    
    changeDirection();
};
