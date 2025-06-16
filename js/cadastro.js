const buscar = (element) => document.querySelector(element);
const buscarAll = (elements) => document.querySelectorAll(elements);

function telasCadastro() {
    const form = buscar(".form__cadastro");
    const form2 = buscar(".form__endereco");

    const btnContinue = buscar(".btnContinue");

    const elementsEnd = buscarAll(".endereco__elements");

    btnContinue.addEventListener("click", (event) => {
        form.style.display = "none";
        form2.style = "display:flex;flex-direction:column;";

        elementsEndereco.style.display = "flex";
    })
}

function enviarCadastro() {
    const url = "http://localhost/pastelaria_design/backend/api.php?action=cadastrarUsuario";
    console.log("Url chamada: ", url);

    const formC = buscar(".form__endereco");
    const form = buscar(".form__endereco");
    const nome = formC.querySelector("#nome").value;
    const email = formC.querySelector("#email").value;
    const senha = formC.querySelector("#senha").value;
    const endereco = form.querySelector("#endereco").value;
    const numeroEn = form.querySelector("#numeroEn").value;
    const bairroEn = form.querySelector("#bairroEn").value;

    const campoErroMensagem = buscar(".campoErroMensagem p");

    let dadosCadastro = {
        nome,
        email,
        senha,
        endereco,
        numeroEn,
        bairroEn
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosCadastro)
    })
    .then(res => res.json())
    .then(resposta => {
        console.log("Resposta do servidor: ", resposta);

        if(resposta.status === "sucesso"){
            console.log("Resposta: ", resposta.mensagem);
            location.href = "http://localhost/pastelaria_design/index.php";
        } else {
            campoErroMensagem.innerHTML = resposta.mensagem;
        }
    })
}

telasCadastro();