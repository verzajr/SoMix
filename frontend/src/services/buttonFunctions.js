import { API_GeneralSearch, API_ArtistSearch, API_AlbumSearch, API_TrackSearch } from "./sourceAPI.js";
import { processGeneralSearchResults } from "./generalSearchDataProcessing.js";
export default async function handleSearchClick() {

    console.log("entered handleSearchClick");
    
    const searchFieldValue = document.getElementById("searchField").value; // gets value from seach field
    const generalSearchResult = await API_GeneralSearch(searchFieldValue); // calls API function to search the API repository and gets a Json with results
    processGeneralSearchResults(searchFieldValue,generalSearchResult); // calls function to process the Json and gets arrays with info to show on the screen

};

function storeGeneralSearchResult(value){
    localStorage.setItem("generalSearchJson", value);
};