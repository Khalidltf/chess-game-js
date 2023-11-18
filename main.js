import "./style.css";

const gameBoard = document.getElementById("gameboard");
const playerDisplay = document.getElementById("player");
const infoDisplay = document.getElementById("info__display");

const width = 8;
const startPieces = [
  rook, knight, bishop, queen, king, bishop, knight, rook,
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  rook, knight, bishop, queen, king, bishop, knight, rook
];

function createBoard() {

  startPieces.forEach((startPiece, i) => {
    const square = document.createElement('div')
    square.classList.add('square')
    square.setAttribute('square-id', i)
    square.innerHTML = startPiece
    square.firstChild && square.firstChild.setAttribute('draggable', true)
    const row =  Math.floor((63 - i)/ 8) + 1
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0? 'beige': 'blue')
    } else {
      square.classList.add(i % 2 === 0? 'blue': 'beige')
    }

    if (i <= 15) {
      square.firstChild.classList.add('black')
    }

    if (i >= 48) {
      square.firstChild.classList.add('gray')
    }

    gameBoard.append(square)
  })
}

createBoard()

const allSquares = document.querySelectorAll('#gameboard .square')
allSquares.forEach(square => {
  square.addEventListener('dragstart', dragStart)
  square.addEventListener('dragover', dragOver)
  square.addEventListener('drop', dragDrop)
})

let startPositionId
let draggedElement
function dragStart(e) {
  startPositionId = e.target.parentNode.getAttribute('square-id')
  draggedElement = e.target
}

function dragOver(e) {
  e.preventDefault()
}

function dragDrop() {
  
}
