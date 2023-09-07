const express = require('express');
const dbSequelize = require('./db');
const ecommerceRouter = require('./ecommerceRouter');

const app = express();
const PORT = 9000;

// Middleware para análise de JSON no corpo das requisições
app.use(express.json());

// Sincronização com o banco de dados usando o Sequelize
async function syncDatabase() {
  try {
    await dbSequelize.sync();
    console.log('Modelos sincronizados com sucesso com o banco de dados');
    startServer();
  } catch (error) {
    console.error('Erro ao sincronizar modelos com o banco de dados:', error);
  }
}

// Inicialização do servidor Express
function startServer() {
  app.use('/ecommerce', ecommerceRouter);

  // Rota de teste
  app.get('/teste', (req, res) => {
    res.send('Testando OK');
  });

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

// Iniciar a sincronização com o banco de dados e iniciar o servidor
syncDatabase();
