const homeComponent = {
    render :() => {
        return`
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

const loginComponent = {
    render :() => {
        return`
        <a href="#/"><img class="logo" src="./images/logoColor.png" alt="Página inicial"></a> <!-- adding application logo -->
        <div class="rightTile">
            <nav>
            <a href="#/"><button class="logOutButton" type="button">Sair</button></a> <!-- adding log out button -->
            </nav>
        </div>
        <div class="orangeLine"></div>
        <img class="homePhoto" src="./images/fonoHalf.png"> <!-- adding home picture of half a fonograph -->
        <form class="loginForm">
            <input class="formField" type="text" id="username" name="username" placeholder="Usuário"><br>
            <input class="formField" type="password" id="pwd" name="pwd" placeholder="Senha"><br>
            <button class="button" type="button" id="loginButton" name="loginButton">Login</button>
        </form>`
        ;
    }
};

const signUpComponent = {
    render :() => {
        return`
        <a href="#/"><img class="logo" src="./images/logoColor.png" alt="Página inicial"></a> <!-- adding application logo -->
        <div class="rightTile">
            <nav>
            <a href="#/"><button class="logOutButton" type="button">Sair</button></a> <!-- adding log out button -->
            </nav>
        </div>
        <div class="orangeLine"></div>
        <img class="homePhoto" src="./images/fonoHalf.png"> <!-- adding home picture of half a fonograph -->
        <form class="loginForm">
            <input class="formField" type="text" id="username" name="username" placeholder="Usuário"><br>
            <input class="formField" type="password" id="pwd" name="pwd" placeholder="Senha"><br>
            <button class="button" type="button" id="signUpButton" name="signUpButton">Cadastrar</button>
        </form>`
        ;
    }
};

const searchResultsComponent = {
    render :() => {
        return`
        <a href="#/"><img class="logo" src="./images/logoColor.png" alt="Página inicial"></a> <!-- adding application logo -->
        <div class="rightTile">
            <nav>
            <a href="#/signup"><button class="button" type="button">Cadastro</button></a> <!-- adding sign in button -->
            <a href="#/login"><button class="button" type="button">Login</button></a> <!-- adding login button -->
            </nav>
        </div>
        <div class="orangeLine"></div>
        <img class="homePhoto" src="./images/fonoHalf.png"> <!-- adding home picture of half a fonograph -->
        <div class="artistResultsTile">
        <div class="resultTileTitle">Artistas</div>
        <div id="artistTiles"></div>
            <script type="module">
                const artists=localStorage.getItem("searchResults_Artists");
                console.log("Rendering Artist Tiles",artists.length);
                artistTiles="";
                for (let i=0; i<artists.length;i++){
                    console.log(i);
                    artistTiles = artistTiles + '<div class="resultFrame"><img class="artistCover" src="' + artists[i].artist.picture_small + '">' + artists[i].artist.name + '<img class="optionsButton" src="./icons/options.png"></div>';
                };
                console.log(artists[i].artist.picture_small,artists[i].artist.name);
                document.getElementById("artistTiles").innerHTML = artistTiles;
            </script>
        </div>
        <div class="albumResultsTile">
        <div class="resultTileTitle">Álbuns</div>
            <div class="resultFrame">Álbum 1</div>
            <div class="resultFrame">Álbum 2</div>
            <div class="resultFrame">Álbum 3</div>
        </div>
        <div class="songResultsTile">
        <div class="resultTileTitle">Músicas</div>
            <div class="resultFrame">Música 1</div>
            <div class="resultFrame">Música 2</div>
            <div class="resultFrame">Música 3</div>
        </div>
        `
    }
};


export {homeComponent,loginComponent,signUpComponent,searchResultsComponent};
