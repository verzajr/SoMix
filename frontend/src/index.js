//imports event listener functions 

import handleSearchClick from "./services/buttonFunctions.js";

//imports routes from the routes service

import routes from "./services/routes.js";

//clears local storage
localStorage.clear

//Parses the location string to get the desired path
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//Finds the path string on the predefined routes
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

//bundles the two functions and renders the new app object
const router = () => {
    const path = parseLocation();
    console.log(path);
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    document.getElementById('app').innerHTML = component.render();
};

//listens to changes on the URL path
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

//Event Listeners
window.onload=function() {
document.getElementById('searchButton').addEventListener("click",handleSearchClick);

};

