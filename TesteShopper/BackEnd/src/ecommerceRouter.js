const express = require('express');
const ecommerceControlle = require('./ecommerceControlle');

const router = express.Router();

// Middleware para análise de JSON no corpo das requisições
router.use(express.json());

// Rota para listar todos os produtos
router.get('/todosproducts', ecommerceControlle.listaproducts);

// Rota para listar todos os pacotes
router.get('/todospacks', ecommerceControlle.listapacks);

// Rota para atualizar o preço de um produto
router.put('/atualizarpreco', ecommerceControlle.atualizarProduto);

module.exports = router;
