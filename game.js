// Iniciar minhas variáveis
let board = ['','','','','','','','','']
let playerTime = 0;
let simbolos = ['o','x']
let gameOver = false
let squares = document.querySelectorAll('.square')

 squares.forEach((square)=>{
    square.addEventListener('click', ondeClicou)
 })

 function ondeClicou(event){
    let square = event.target
    let posicao = square.id
    
    if(movimento(posicao)){
        
        setTimeout(()=> {
            alert('O jogo acabou - O Vencedor foi o jogador ' + playerTime)
        }, 10)
    }
    updateSquares(posicao)
 }
 
 function movimento(posicao) {
    if(gameOver){
        return;
    }
    if(board[posicao] == ''){
    board[posicao] = simbolos[playerTime]

    gameOver = vitoria()
    if(gameOver == false){
        playerTime = (playerTime == 0) ? 1 : 0
    }
}
    return gameOver;
}
function updateSquares(posicao){
   let square = document.getElementById(posicao.toString())
   let simbolo = board[posicao]
   square.innerHTML = `<div class='${simbolo}'></div>`
}
function vitoria(){
    let posVitoria = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,5],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < posVitoria.length; i++){
        let seq = posVitoria[i];
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]
       
        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            
            return true
        }
    }
    return false
}