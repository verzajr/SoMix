//imports the HTML components from the pageComponets service
import { homeComponent } from "../pages/1_home.js";
import { loginComponent } from "../pages/2_login.js";
import { signUpComponent } from "../pages/3_signup.js";
import { searchResultsComponent } from "../pages/4_search.js";
import { executeSongComponent } from "../pages/5_player_song.js";


//makes the paths available to be imported by index.js
export default [
    {path: "/", component: homeComponent},
    {path: "/login", component: loginComponent},
    {path: "/signup", component: signUpComponent},
    {path: "/search", component: searchResultsComponent},
    {path: "/songplayer", component: executeSongComponent},
    {path: "/favoritesongs", component: executeSongComponent},
    {path: "/playlist", component: executeSongComponent},
    ];
    