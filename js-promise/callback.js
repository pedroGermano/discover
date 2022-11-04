// Funções aceitam qualquer tipo de dado com argumento
function imprimirDado(dado){
  console.log('outras tarefas')
  console.log(dado())
}

// imprimirDado(1)
// imprimirDado('texto')

imprimirDado(function (){
  return 'Olá mundo'
})