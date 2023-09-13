//imports the HTML components from the pageComponets service
import {homeComponent,signUpComponent,loginComponent,searchResultsComponent} from "./pageComponents.js";

//makes the paths available to be imported by index.js
export default [
    {path: "/", component: homeComponent},
    {path: "/login", component: loginComponent},
    {path: "/signup", component: signUpComponent},
    {path: "/search", component: searchResultsComponent},
    ];
    