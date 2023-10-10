import { API_GeneralSearch, API_ArtistSearch, API_AlbumSearch, API_TrackSearch } from "./4_sourceAPI.js";
import processGeneralSearchResults from "./5_generalSearchDataProcessing.js";



export default async function handleSearchClick() {

    const searchFieldValue = document.getElementById("searchField").value; // gets value from search field
    console.log(`Handling Search for "${searchFieldValue}"...`);
    const generalSearchResult = await API_GeneralSearch(searchFieldValue); // calls API function to search the API repository and gets a Json with results
    processGeneralSearchResults(searchFieldValue, generalSearchResult);// calls function to process the Json and gets arrays with info to show on the screen
    window.location.href="#/search";
};
