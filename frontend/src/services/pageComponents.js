const homeComponent = {
    render :() => {
        return`
        <a href="#/"><img class="logo" src="./images/logoColor.png" alt="Página inicial"></a> <!-- adding application logo -->
        <div class="orangeLine"></div>
        <div class="rightTile">
            <nav>
            <a href="#/signup"><button class="button" type="button">Cadastro</button></a> <!-- adding sign in button -->
            <a href="#/login"><button class="button" type="button">Login</button></a> <!-- adding login button -->
            </nav>
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
        <a href="#/"><img class="logo" src="./images/logoColor.png" alt="Página inicial"></a> <!-- adding application logo -->
        <div class="welcomeText">Login</div>
        <div class="orangeLine"></div>`
        
        ;
    }
};

const signUpComponent = {
    render :() => {
        return`
        <a href="#/"><img class="logo" src="./images/logoColor.png" alt="Página inicial"></a> <!-- adding application logo -->
        <div class="welcomeText">Sign Up</div>
        <div class="orangeLine"></div>`
        
        ;
    }
};

export {homeComponent,loginComponent,signUpComponent};