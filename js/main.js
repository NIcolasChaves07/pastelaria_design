// Funções universais de busca.
const buscar = (element) => document.querySelector(element);
const buscarAll = (elements) => document.querySelectorAll(elements); // corrigido

//Variável global do carrinho
let carrinho = [];

//Variável global de quantidades dos produtos
let quantidade = 1;

//Função de abertura do carrinho.
function abrirCarrinho() {
    const abrirCarrinho = buscar("#openCart");
    const carrinhoAside = buscar(".carrinho");
    const overlay = buscar(".overlay");

    if (abrirCarrinho && carrinhoAside && overlay) {
        abrirCarrinho.addEventListener("click", () => {
            carrinhoAside.classList.add("aberto");
            overlay.classList.add("ativo");
        });
    } else {
        console.warn("Algum elemento não foi encontrado no DOM.");
    }
}

//Função de fechamento do carrinho
function fecharCarrinho() {
    const fecharCarrinho = buscar("#fecharCarrinho");
    const carrinhoAside = buscar(".carrinho");
    const overlay = buscar(".overlay");

    fecharCarrinho.addEventListener("click", () => {
        carrinhoAside.classList.remove("aberto");
        overlay.classList.remove("ativo");
    })
}

function abrirCarrinhoBtnAdicionar() {
    const carrinhoB = buscar(".carrinho");

    carrinhoB.classList.add("aberto");
}

function listarProdutos() {
    const url = "http://localhost/pastelaria_design/backend/api.php?action=listarProdutos";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("Dados recebidos: ", data);

            const container = buscarAll(".produtos"); //Container principal
            container.innerHTML = "";

            data.forEach(produto => {
                const div = document.createElement("div");
                div.classList.add("produto");

                div.innerHTML = `
                    <img class="img-produto" src="http://localhost/pastelaria_design/icons/${produto.img}">
                    <h2 class"nome-produto">${produto.nome}</h2>
                    <p class="desc-produto">${produto.descricao}</p>
                    <span class="preco-produto">${produto.preco}</span>
                    <button class="adicionar">Adicionar</button>
                `;

                container.appendChild(div);
            })
            adicionarAoCarrinho(data);
            atualizarCarrinhoVIsual();
        })
}

function adicionarAoCarrinho(data) {
    const botoesAdicionar = buscarAll(".adicionar");

    botoesAdicionar.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            const produto = data[index];

            const area_precoCart = buscar("#totalCarrinho");

            // if (!produto) {
            //     console.warn("Produto com id inválido:", id);
            //     return;
            // }

            //Concertar os itens do objeto produtoCart.

            const produtoCart = {
                imgCart: `http://localhost/pastelaria_design/${produto.img}`,
                nomeCart: produto.nome,
                descCart: produto.descricao,
                precoCart: parseFloat(produto.preco.replace(".", ","))
            };

            carrinho.push(produtoCart);

            //Abre o carrinho após o clique do botão de adicionar
            abrirCarrinhoBtnAdicionar();

            //Inicia o efeito de overlay
            const overlay = buscar(".overlay");
            overlay.classList.add("ativo");

            //Atualiza o carrinho
            atualizarCarrinhoVIsual();
        });
    });
}

//Atualizar o carrinho
function atualizarCarrinhoVIsual() {
    const listaCarrinho = buscar(".listaCarrinho");
    const totalCarrinho = buscarAll("#totalCarrinho");

    let totalProductsCart = buscar(".totalProductsCart");

    if (!listaCarrinho || !totalCarrinho) {
        console.log("Elementos do carrinho não encontrados");
        return;
    }

    listaCarrinho.innerHTML = "";

    let totalGeral = 0;

    carrinho.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item-carrinho");

        //Quantidade de cada item
        let quantidadeItem = 1;

        div.innerHTML = `
            <div class="cabecalho-carrinho">
                <i class="bi bi-trash btnRemoverPCart"></i>
                <img src="${item.imgCart}" class="img-carrinho" />
            </div>
            <h4 class="nome-carrinho">${item.nomeCart}</h4>
            <p class="desc-carrinho">${item.descCart}</p>
            <span class="precoCarrinho">Total: R$ ${item.precoCart.toFixed(2).replace(".", ",")}</span>
            <div class="componentesExtras">
                <div class="quantificator">
                    <button class="btnadd">+</button>
                    <div class="quantidadeP">1</div>
                    <button class="btnSub">-</button>
                </div>
            </div>
        `;

        listaCarrinho.appendChild(div);

        //Função do botão de aumentar a quantidade de um elemento
       const btnAdd = div.querySelector(".btnadd");
       const btnsub = div.querySelector(".btnSub");
       const quantidadeArea = div.querySelector(".quantidadeP");
       const precoModificado = div.querySelector(".precoCarrinho");

        const atualizarTotalCarrinho = () => {
            const produtoTotalItem = quantidadeItem * item.precoCart;
            precoModificado.textContent = `Total: R$ ${produtoTotalItem.toFixed(2).replace(".", ",")}`;

            //Recalcula o toal geral do carrinho
            let novoTotal = 0;
            const todosItens = listaCarrinho.querySelectorAll(".item-carrinho");

            todosItens.forEach((el, i) => {
                const qnt = parseInt(el.querySelector(".quantidadeP").textContent);
                const precoUni = carrinho[i].precoCart;
                novoTotal += qnt * precoUni;
            });

            const totalFormatado = `R$ ${novoTotal.toFixed(2).replace(".", ",")}`;
            totalCarrinho.forEach(el => el.textContent = totalFormatado);
            if(totalProductsCart) totalProductsCart.textContent = `Total: ${totalFormatado}`;
        }

       btnAdd.addEventListener("click", () => {
            quantidadeItem++;
            quantidadeArea.textContent = quantidadeItem;
            atualizarTotalCarrinho();
       });

       //Função que diminui a quantidade de um elemento
       btnsub.addEventListener("click", () => {
            if (quantidadeItem > 1) {
                quantidadeItem--;
                quantidadeArea.textContent = quantidadeItem;
                atualizarTotalCarrinho();
            }
        });

        //função de deletar item
        const deletaItem = (div, nomeProduto) => {
            const btnRemoveItemCart = div.querySelector(".btnRemoverPCart");

            btnRemoveItemCart.addEventListener("click", () => {
                const index = carrinho.findIndex(item => item.nomeCart === nomeProduto);
                
                if(index !== -1){
                    carrinho.splice(index, 1);
                    atualizarCarrinhoVIsual();
                }
            })
        }

        //Soma o tptal padrão
        totalGeral += item.precoCart;

        //chama a função de delete de um produto
        deletaItem(div, item.nomeCart);
    });

    const totalFormatado = `R$ ${totalGeral.toFixed(2).replace(".", ",")}`;
    totalCarrinho.forEach(el => el.textContent = totalFormatado);
    if (totalProductsCart) totalProductsCart.textContent = `Total: ${totalFormatado}`;
}

//Função que envia os dados da compra


//Função de execução de todo o código.
function rodaTodoCodigo() {
    abrirCarrinho();
    fecharCarrinho();
    listarProdutos();
    adicionarAoCarrinho();
    atualizarCarrinhoVIsual();
}

rodaTodoCodigo();
