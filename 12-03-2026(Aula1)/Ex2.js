let idade = 60
let preco = 100

if (idade > 60 && preco > 100) {
    let precoFinal = preco - (preco * 0.20)
    console.log(`Seu desconto foi aplicado com sucesso! Agora o preço é ${precoFinal}`)
} else {
    console.log(`Não foi possível aplicar o desconto de 20% o preço é ${preco}`)
}