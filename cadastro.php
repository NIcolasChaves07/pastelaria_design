<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar usuário</title>
    <link rel="stylesheet" href="./css/cadastro.css">
</head>
<body>
    <div class="content__cadastro">
        <div class="content__right">
            <form action="" class="form__cadastro">
                <div class="contentElements">
                    <label for="nome">Nome de Usuário</label>
                    <input type="text" name="nome" id="nome" class="inputElements">
                </div>
                <div class="contentElements">
                    <label for="emial">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="ex: example@gmail.com" class="inputElements">
                </div>
                <div class="contentElements">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" id="senha" class="inputElements">
                    <div class="campoErroSenha"><p></p></div>
                </div>
            
                <!-- Div da mensagem de erro -->
                <div class="campoErroInputs"><p></p></div>
                <!-- /Div da mensagem de erro -->
                
                <div class="contentElements">
                    <button type="submit" id="btnContinue" class="btnContinue">Continue</button>
                </div>
            </form>

            <form action="" class="form__endereco">
                <h3 class="textContinue">Endereço de entrega</h3>

                <div class="endereco__elements">
                    <label for="endereco" class="labelEn">Nome da rua</label>
                <input type="text" name="endereco" id="endereco" class="inputEn">
                </div>

                <div class="endereco__elements">
                    <label for="numero" class="labelEn">Número da Residência</label>
                    <input type="number" name="numeroEn" id="numeroEn" class="inputEn">
                </div>

                <div class="endereco__elements">
                    <label for="baurri" class="labelEn">Bairro</label>
                    <input type="text" name="bairroEn" id="bairroEn" class="inputEn">
                </div>

                <div class="endereco__element">
                    <button type="submit" class="btnCadastro">Cadastrar</button>
                </div>
            </form>

            <div class="campoErroMensagem">
                <p class="textErro"></p>
            </div>
        </div>

        <div class="content__left">
            <img src="./icons/pastel-products1.png" alt="" class="imagemCadastro">
        </div>
    </div>

    <script src="./js/cadastro.js"></script>
</body>
</html>