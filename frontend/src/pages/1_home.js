
//imports event listener functions 
import handleSearchClick from "../services/3_buttonFunctions.js";



function buildHomePage(){
                //Event Listeners
                document.getElementById('searchButton').addEventListener("click", handleSearchClick);
                document.addEventListener('keydown', function (e) {
                    if (e.key == "Enter") {
                        document.getElementById("searchButton").click();
                    }
                });
};

const homeComponent = {
    render: () => {
        return `
        <a href="#/"><img class="logo" src="./images/logoColor.png" alt="Página inicial"></a> <!-- adding application logo -->
        <div class="rightTile">
            <nav>
            <a href="#/signup"><button class="button" type="button">Cadastro</button></a> <!-- adding sign in button -->
            <a href="#/login"><button class="button" type="button">Login</button></a> <!-- adding login button -->
            </nav>
        </div>
        <div class="orangeLine"></div>
        <img class="homePhoto" src="./images/fonoHalf.png"> <!-- adding home picture of half a fonograph -->
        <div class="welcome">   
            <div class="welcomeText">Bem vindo ao Somix!<br>Onde você mesmo cria suas playlists favoritas.</div>
        </div>
    <div class="search">
        <input class="formField" type="search" id="searchField" name="searchField" maxlength=80 placeholder="pesquisar">
        <button class="searchButton" type="button" id="searchButton" name="searchButton">
            <img src="./icons/searchIcon.png" width="30" style="vertical-align: middle">
        </button>
    </div>`
            ;
    }
};
export {homeComponent,buildHomePage};
