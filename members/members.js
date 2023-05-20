// Array para armazenar os membros
let members = [];

// Verifica se há membros armazenados localmente
if (localStorage.getItem("members")) {
  // Se houver membros armazenados localmente, recupera-os e atualiza o array members
  members = JSON.parse(localStorage.getItem("members"));
  updateMemberList();
}

// Função para adicionar membros
function addMember(event) {
  // Impede o envio do formulário
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let classNumber = document.getElementById("class").value;

  // Cria um objeto de membro com os valores do formulário
  let member = {
    name: name,
    age: age,
    email: email,
    phone: phone,
    classNumber: classNumber
  };

  // Adiciona o membro ao array
  members.push(member);

  // Limpa os valores dos campos do formulário
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("class").value = "";

  // Armazena o array members localmente
  localStorage.setItem("members", JSON.stringify(members));

  // Atualiza a lista de membros
  updateMemberList();
}

// Função para atualizar a lista de membros
function updateMemberList() {
  // Obtém o elemento <ul> da lista de membros
  let memberList = document.getElementById("member-list");

  // Limpa a lista de membros
  memberList.innerHTML = "";

  // Itera sobre os membros e adiciona cada um à lista
  for (let i = 0; i < members.length; i++) {
    let member = members[i];
    let listItem = document.createElement("li");
    let heading = document.createElement("h3");
    heading.innerText = member.name;
    let paragraph1 = document.createElement("p");
    paragraph1.innerText = "Idade: " + member.age;
    let paragraph2 = document.createElement("p");
    paragraph2.innerText = "E-mail: " + member.email;
    let paragraph3 = document.createElement("p");
    paragraph3.innerText = "Telefone: " + member.phone;
    let paragraph4 = document.createElement("p");
    paragraph4.innerText = "Turma: " + member.classNumber;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.addEventListener("click", function() {
      members.splice(i, 1);
      localStorage.setItem("members", JSON.stringify(members));
      updateMemberList();
    });
    listItem.appendChild(heading);
    listItem.appendChild(paragraph1);
    listItem.appendChild(paragraph2);
    listItem.appendChild(paragraph3);
    listItem.appendChild(paragraph4);
    listItem.appendChild(deleteButton);
    memberList.appendChild(listItem);
  }
}

// Adiciona um listener para o evento de envio do formulário
document.getElementById("member-form").addEventListener("submit", addMember);
