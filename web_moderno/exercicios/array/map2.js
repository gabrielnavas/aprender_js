const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retorna um array apenas com os preços

const paraObjeto = (json) => JSON.parse(json)
const pegaPreco = produto => produto.preco

const precos = carrinho.map(paraObjeto).map(pegaPreco)

console.log(precos)
 