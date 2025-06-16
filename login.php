<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
    <div class="content__header">
        <h3 class="textHeader">Login</h3>
    </div>

    <div class="content__login">
        <div class="content__right">
            <form action="" class="form__login">
                <div class="loginElements">
                    <label for="email">E-mail</label>
                    <input type="mail" name="email" class="inputsStyles">
                </div>

                <div class="loginElements">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" class="inputsStyles">
                </div>

                <div class="loginElements">
                    <button type="submit">Log-in</button>
                </div>
            </form>
        </div>

        <div class="content__left">
            <img src="./icons/pastel.png" alt="">
        </div>
    </div>

    <script src="./js/login.js"></script>
</body>
</html>