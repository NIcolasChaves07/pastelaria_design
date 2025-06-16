<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pastel do Zé Rato</title>
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    </head>
    <body>
        <div class="overlay" id="overlay"></div>

        <header class="case-pastelaria">
            <div class="case-cadastro">
                <button class="btnCadastrar">Cadastre-se</button>
                <button class="btnLogin">Login</button>
            </div>
        
            <h1 class="title-page">Pastel do Zé Rato</h1>
            <p class="paragraph-iniPage">Delícias que vão te fazer pular de alegria!</p>
            <button id="openCart">🛒 Carrinho</button>
        </header>

   

        <div class="banner">
            <img src="./icons/pastel.png" alt="Pastel fofo">
        </div>

        <section class="produtos">
            <div class="produto">
                <img src="" class="img-produto" />
                <div class="nomeP"><h3 class="nome-produto">--</h3></div>
                <div class="descP"><p class="desc-produto">--</p></div>
                <div class="precoP"><span class="preco-produto">R$ --</span></div>
                <button class="adicionar" data-id="0">+</button>
            </div>
        </section>

        <aside class="carrinho" id="carrinho">
            <h2>Seu Carrinho</h2>
            <div class="listaCarrinho">
                <div class="item-carrinho">
                    <div class="cabecalho-carrinho">
                        <button><i class="bi bi-trash btnRemoverPCart"></i></button>
                        <img src="" class="img-carrinho" />
                    </div>
                    <h4 class="nome-carrinho"></h4>
                    <p class="desc-carrinho"></p>
                    <span class="precoCarrinho">Total: R$ 0.00</span>
                    <div class="componentesExtras">
                        <div class="quantificator">
                            <button class="btnadd">+</button>
                            <div class="quantidadeP">1</div>
                            <button class="btnSub">-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="totalProductsCart">Total: <span id="totalProducts">R$ 0.00</span></div>
            <button class="finalizarPedido">Finalizar Pedido</button>
            <button id="fecharCarrinho">Fechar</button>
        </aside>

        <!--Preciso desenvolver o banco de dados que vai armazenar os produtos.-->
        <!--Preciso desevolver a api que vai gerenciar o backend do projeto-->
        <!--Preciso desenvolver o modal dos produtos na hora do pedido.-->
        <!--Preciso fazer os campos dos métodos de pagamento-->
        <!--Preciso desenvolver um sistema de validação da compra e do pagamento-->
        <!--Preciso fazer os botões adicionais do carrinho após o efetuamento da compra.-->

        <script src="./js/main.js"></script>
    </body>
</html>