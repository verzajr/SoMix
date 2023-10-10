// imports page builder functions
import renderArtistCards from "./services/6_artistElement.js";
//imports event listener functions 

import handleSearchClick from "./services/3_buttonFunctions.js";

//imports routes from the routes service

import routes from "./services/1_routes.js";

//clears local storage
localStorage.clear


//Parses the location string to get the desired path
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//Finds the path string on the predefined routes
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

// Calls page building functions
function pagebuilder(path){
    switch (path){
        case "/search": renderArtistCards();
        console.log("Building Artist Cards");
        break;
    }
}


//bundles the two functions and renders the new app object
const router = () => {
    const path = parseLocation();
    console.log(`Path change to ${path}`);
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    document.getElementById('app').innerHTML = component.render();
    console.log(`Page ${path} rendered`);
    pagebuilder(path);
};



//listens to changes on the URL path
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

//Event Listeners
window.onload=function() {
document.getElementById('searchButton').addEventListener("click",handleSearchClick);


};

