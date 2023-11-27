const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', (req, res) => {
  res.json({ message: 'API do servidor Express' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Aqui você pode acessar os dados recebidos, por exemplo:
  const nome = formData.nome;
  const email = formData.email;
  const mensagem = formData.mensagem;

  // Faça o que quiser com esses dados, como salvá-los em um banco de dados ou realizar alguma ação
  // Neste exemplo, apenas retornaremos os dados recebidos
  res.json({
    nome,
    email,
    mensagem,
    message: 'Dados do formulário recebidos com sucesso!'
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});