let totalGeral = 0;
limpar();

function adicionar(){
 // nome do produto, valor e quantidade
 let produto = document.getElementById('produto').value;
 let nomeProduto = produto.split('-')[0];
 let valorUnitario = produto.split('R$')[1];
 let quantidade = document.getElementById('quantidade').value;
 
 
 //calcular preço e subtotal
 let preco = quantidade * valorUnitario;
 let carrinho = document.getElementById('lista-produtos');
 //carrinho
 carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
 <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`
 //valor geral
 totalGeral = totalGeral + preco;
 let campoTotal = document.getElementById('valor-total');
 campoTotal.textContent = `R$ ${totalGeral}`;
 document.getElementById('quantidade').value = '';

}
function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}