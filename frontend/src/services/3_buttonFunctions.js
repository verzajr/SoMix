import { API_GeneralSearch, API_ArtistSearch, API_AlbumSearch, API_TrackSearch } from "./4_sourceAPI.js";
import processGeneralSearchResults from "./5_generalSearchDataProcessing.js";

export function handleSearchClick() {

    const searchFieldValue = document.getElementById("searchField").value; // gets value from search field
    console.log(`Handling Search for "${searchFieldValue}"...`);
    API_GeneralSearch(searchFieldValue); // calls API function to search the API repository and gets a Json with results
    const generalSearchResult = JSON.parse(localStorage.getItem(`searchResultsFor_${searchFieldValue}`));
    console.log(generalSearchResult);
    processGeneralSearchResults(searchFieldValue, generalSearchResult);// calls function to process the Json and gets arrays with info to show on the screen
    window.location.href = "#/search";
};

export function handleExecuteBtn(event) {
    window.location.href = "#/songplayer";
    const { target } = event;
    const dropButton=target.parentNode;
    const optionsButton=dropButton.parentNode;
    const resultCard = optionsButton.parentNode;
   /*  console.log('meu result card', resultCard); */
    const sourceURL=resultCard.id;
    console.log(`Source URL ${sourceURL}`)
    localStorage.setItem('executionSourceURL',sourceURL);
}
