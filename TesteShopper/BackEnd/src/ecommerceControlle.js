const dbSequelize = require('./db');

const ecommerceController = {
  async listaProdutos(req, res) {
    try {
      const produtos = await dbSequelize.query('SELECT * FROM products', {
        type: dbSequelize.QueryTypes.SELECT
      });
      res.json(produtos);
    } catch (error) {
      console.error('Erro na consulta de produtos:', error);
      res.status(500).json({ error: 'Erro na consulta de produtos' });
    }
  },

  async listaPacks(req, res) {
    try {
      const packs = await dbSequelize.query('SELECT * FROM packs', {
        type: dbSequelize.QueryTypes.SELECT
      });
      res.json(packs);
    } catch (error) {
      console.error('Erro na consulta de packs:', error);
      res.status(500).json({ error: 'Erro na consulta de packs' });
    }
  },

  async atualizarProduto(req, res) {
    const { codigo, novoPreco } = req.body;

    try {
      const produtoExistente = await dbSequelize.query(
        `SELECT * FROM products WHERE code = ${codigo}`,
        { type: dbSequelize.QueryTypes.SELECT }
      );

      if (!produtoExistente || produtoExistente.length === 0) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      const precoMenorQueCusto = await dbSequelize.query(
        `SELECT code, cost_price, sales_price FROM products WHERE ${novoPreco} > cost_price and code = ${codigo}`,
        { type: dbSequelize.QueryTypes.SELECT }
      );

      if (precoMenorQueCusto.length > 0) {
        const verificarSeEstaNoLimite = precoMenorQueCusto[0].sales_price;
        const valorMaximoPermitido = verificarSeEsta

      
      console.log('TEstando novo preço se é > que o custo do produto : ');
      if(novoPreco >= valorMinimoPermitido && novoPreco <= valorMaximoPermitido){
        console.log("testando os 10%")
        await dbSequelize.query(`UPDATE products SET sales_price = ${novoPreco} WHERE code = ${codigo}`);
        res.json({ msg: 'Valor do produto atualizado com sucesso.'  });
      }
      else{
        res.json({ msg: 'Valor do produto NÂO foi atualizado pq é maior ou menor que os 10%.'  });
      }
      
    }



    else{
      
      res.json({ msg: 'Valor do produto NÂO foi atualizado.'  });

    }
    
    
    // const dadosAtt = await dbSequelize.query(`SELECT sales_price FROM products WHERE code = ${codigo}`);

    // const dadosDes = await dbSequelize.query(`SELECT * FROM products WHERE code = ${codigo}`);
    // Atualize o valor do produto
    // res.json({dadosAtt});
}


};

module.exports = ecommerceControlle;
