// Components
const homeComponent = {
    render :() => {
        return`
        <img class="logo" src="./images/logoColor.png" alt="Página inicial"> <!-- adding application logo -->
        <div class="orangeLine"></div>
        <div class="rightTile">
            <button class="button" onClkick=signUpButtonRoute() type="submit">Cadastro</button> <!-- adding sign in button -->
            <script>
                signUpButtonRoute() {
                    window.location = "/signup";
                }
            </script>
            <button class="button" onClick=loginButtonRoute() type="submit">Login</button> <!-- adding login button -->
            <script>
            loginButtonRoute() {
                window.location = "/login";
            }
            </script>       
            </div>
        <img class="homePhoto" src="./images/fonoHalf.png"> <!-- adding home picture of half a fonograph -->
        <div class="welcome">   
            <div class="welcomeText">Bem vindo ao Somix!<br>Onde você mesmo cria suas playlists favoritas.</div>
        </div>
    <div class="search">
        <input class="searchField" type="search" id="searchField_id" name="searchField_name" maxlength=80>
        <button type="submit" class="searchButton">
            <img src="./icons/searchIcon.png" width="30" style="vertical-align: middle">
        </button>
    </div>`
        ;
    }
};

const loginComponent = {
    render :() => {
        return`
        <img class="logo" src="./images/logoColor.png" alt="Página inicial"> <!-- adding application logo -->
        <div class="welcomeText">Login</div>
        <div class="orangeLine"></div>`
        
        ;
    }
};

const signUpComponent = {
    render :() => {
        return`
        <img class="logo" src="./images/logoColor.png" alt="Página inicial"> <!-- adding application logo -->
        <div class="welcomeText">Sign Up</div>
        <div class="orangeLine"></div>`
        
        ;
    }
};

//Routes
const routes = [
{path: "/", component: homeComponent, },
{path: "/login", component: loginComponent, },
{path: "/signup", component: signUpComponent, },
];


//Parses the location string to get the desired path
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//Finds the path string on the predefined routes
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
    const path = parseLocation();
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    document.getElementById('app').innerHTML = component.render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);