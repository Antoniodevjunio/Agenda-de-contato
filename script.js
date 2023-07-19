const formContato = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');
const tbodyContatos = tabelaContatos.querySelector('tbody');

formContato.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputNome = document.getElementById('nome');
  const inputTelefone = document.getElementById('telefone');

  const nome = inputNome.value;
  const telefone = inputTelefone.value;

  const linha = document.createElement('tr');
  const colunaNome = document.createElement('td');
  const colunaTelefone = document.createElement('td');

  colunaNome.textContent = nome;
  colunaTelefone.textContent = telefone;

  linha.appendChild(colunaNome);
  linha.appendChild(colunaTelefone);

  tbodyContatos.appendChild(linha);

  inputNome.value = '';
  inputTelefone.value = '';
});
