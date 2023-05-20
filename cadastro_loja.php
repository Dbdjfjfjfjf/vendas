<?php
// Verifica se os campos foram preenchidos
if (isset($_POST['nome_unidade']) && isset($_POST['data_entrada']) && isset($_POST['responsavel']) && isset($_POST['telefone']) && isset($_POST['login']) && isset($_POST['senha'])) {

    // Obtém os valores dos campos
    $nome_unidade = $_POST['nome_unidade'];
    $data_entrada = $_POST['data_entrada'];
    $responsavel = $_POST['responsavel'];
    $telefone = $_POST['telefone'];
    $login = $_POST['login'];
    $senha = $_POST['senha'];

    // Conexão com o banco de dados
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "cadastro-lojas";

    // Cria a conexão
    $conn = new mysqli($servername, $username, $password, $database);

    // Verifica se houve erro na conexão
    if ($conn->connect_error) {
        die("Erro na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Insere os dados na tabela
    $sql = "INSERT INTO lojas (nome_unidade, data_entrada, responsavel, telefone, login, senha)
            VALUES ('$nome_unidade', '$data_entrada', '$responsavel', '$telefone', '$login', '$senha')";

    if ($conn->query($sql) === TRUE) {
        echo "Cadastro da loja realizado com sucesso.";
    } else {
        echo "Erro ao cadastrar a loja: " . $conn->error;
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
}
?>
