<?php

use LDAP\ResultEntry;

    header("Content-Type: application/json");

    //Conexão com o banco de dados
    $conn = new PDO("mysql:host=localhost;dbname=pastel_rato", "root", "");

    //Funcões

    //funções de cadastro de usuários
    function cadastrarUsuario($conn, $data){
        $stmtV = $conn->prepare("SELECT * FROM usuario WHERE email = ?");
        $stmtV->execute([$data['email']]);

        if($stmtV->rowCount() > 0){
            echo json_encode(["status" => "erro", "mensagem" => "E-mail ou senha já estão em uso!"]);
            return;
        }

        $stmt = $conn->prepare("INSERT INTO usuario(nome, email, senha, endereco) VALUES(?, ?, ?, ?)");
        $stmt->execute([
            $data['nome'],
            $data['email'],
            password_hash($data['senha'], PASSWORD_DEFAULT),
            $data['endereco']
        ]);
        echo json_encode(["status" => "ok", "mensagem" => "Sucesso no cadastro do novo usuário!"]);
    }

    function listaProdutos($conn){
        $stmt = $conn->query("SELECT * FROM produto");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }

    function buscarProdutos($conn, $id){
        $stmt = $conn->prepare("SELECT * FROM produto WHERE pk_produto = ?");
        $stmt->execute([$id]);
        echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
    }

    function adicionarPedido($conn, $data){
        $stmt = $conn->prepare("INSERT INTO pedidos (cliente, produto, quantidade,  total, endereco) VALUES(?, ?, ?, ?, ?)");
        $stmt->execute([$data['cliente'], $data['produto'], $data['quantidade'], $data['total'], $data['endereco']]);
        echo json_encode(["status" => "sucesso"]);
    }

    //Roteamento simples;
    $action = $_GET['action'] ??'';
    switch ($action) {
        case 'cadastrarUsuario':
            $data = json_decode(file_get_contents('php://input'), true);
            cadastrarUsuario($conn, $data);
            break;
        case 'listarProdutos':
            listaProdutos($conn);
            break;
        case 'buscarProdutos':
            buscarProdutos($conn, $_GET['id']);
            break;
        case 'adicionarPedidos':
            $data = json_decode(file_get_contents('php://input'), true);
            adicionarPedido($conn, $data);
            break;
        default: 
            echo json_encode(["erro" => "Ação inválida"]);
    }

?>