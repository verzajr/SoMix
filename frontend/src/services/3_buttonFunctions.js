import { API_GeneralSearch, API_ArtistSearch, API_AlbumSearch, API_TrackSearch } from "./4_sourceAPI.js";
import processGeneralSearchResults from "./5_generalSearchDataProcessing.js";
/* 
function getSearchResultsFromLocalStorage(searchValue){
   
    console.log('meu search value', searchValue);

    const generalSearchResult = JSON.parse(localStorage.getItem(searchValue));
    console.log('resultado de general', generalSearchResult);
    return generalSearchResult;
    
} */

/* function APIresultsCallback(result){
    let searchValue = localStorage.getItem("searchValue");
    console.log("API Callback", searchValue);
    processGeneralSearchResults(searchValue,result);
}; */

export async function handleSearchClick() {

    const searchFieldValue = document.getElementById("searchField").value; // gets value from search field
    const lowerCaseSearchFieldValue= searchFieldValue.toLowerCase();
    console.log(`Handling Search for "${lowerCaseSearchFieldValue}"...`);

    let resultsDataReady=localStorage.getItem("API_Data_Ready");
    
    if (!resultsDataReady){
        API_GeneralSearch(lowerCaseSearchFieldValue, processGeneralSearchResults); // calls API function to search the API repository and gets a Json with results
    };
    resultsDataReady=localStorage.getItem("API_Data_Ready");

    if (resultsDataReady==="Ready"){
        window.location.href = "#/search";
        localStorage.removeItem("API_Data_Ready");
    } else {
        handleSearchClick();
    };

};


/* export function handleSearchClick() {

    const searchFieldValue = document.getElementById("searchField").value; // gets value from search field
    const lowerCaseSearchFieldValue= searchFieldValue.toLowerCase();
    console.log(`Handling Search for "${lowerCaseSearchFieldValue}"...`);
    localStorage.setItem('searchValue', lowerCaseSearchFieldValue);

    DZ.api(`/search?q=${lowerCaseSearchFieldValue}`, function (response) {
        localStorage.setItem('searchResult', JSON.stringify(response));
        return response;
    });

    window.location.href = "#/search";
};
 */

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
