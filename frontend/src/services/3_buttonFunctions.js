import { API_GeneralSearch, API_ArtistSearch, API_AlbumSearch, API_TrackSearch } from "./4_sourceAPI.js";
import processGeneralSearchResults from "./5_generalSearchDataProcessing.js";

export async function handleSearchClick() {

    const searchFieldValue = document.getElementById("searchField").value; // gets value from search field
    const lowerCaseSearchFieldValue= searchFieldValue.toLowerCase();
    console.log(`Handling Search for "${lowerCaseSearchFieldValue}"...`);
    await API_GeneralSearch(lowerCaseSearchFieldValue); // calls API function to search the API repository and gets a Json with results
    window.location.href = "#/search";
    const generalSearchResult = getSearchResultsFromLocalStorage(lowerCaseSearchFieldValue);
    processGeneralSearchResults(lowerCaseSearchFieldValue, generalSearchResult);// calls function to process the Json and gets arrays with info to show on the screen 
};

async function getSearchResultsFromLocalStorage(searchValue){
    const localStorageKey=searchValue;
    const generalSearchResult = await JSON.parse(localStorage.getItem(localStorageKey));
    console.log(generalSearchResult);
    return generalSearchResult;
    
}


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
