//imports routes from the routes service

import routes from "./services/1_routes.js";
import { buildHomePage } from "./pages/1_home.js";
import { buildSearchPage } from "./pages/4_search.js";
import { buildSongPlayerPage } from "./pages/5_player_song.js";

//clears local storage
localStorage.clear


//Parses the location string to get the desired path
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//Finds the path string on the predefined routes
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

// Calls page building functions
function pagebuilder(path) {
    switch (path) {
        case "/":
            buildHomePage();
            break;
        case "/search": 
            buildSearchPage();
            break;
        case "/songplayer":
            buildSongPlayerPage();
            break;
    }
}


//bundles the two functions and renders the new app object
const router = () => {
    const path = parseLocation();
    console.log(`Path change to ${path}`);
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    document.getElementById('app').innerHTML = component.render();
    pagebuilder(path);
    console.log(`Page ${path} rendered`);

};

//listens to changes on the URL path
window.addEventListener('hashchange', router);
window.addEventListener('load', router);





