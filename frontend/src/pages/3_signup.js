const signUpComponent = {
    render: () => {
        return `
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
export {signUpComponent};
