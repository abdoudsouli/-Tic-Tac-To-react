import { useState } from 'react';
import './App.css';
import Square from './Components/Square';


function App() {
  const [squares,setSquares]=useState(Array(9).fill(null));
   const [action,setAction]=useState('O');
  //['null','null'...]

  const tic = (i)=>{
    const newSquare = squares.slice()
    if(newSquare[i] !== null){
      alert('not empty')
    }else{
     if (action == 'X') {
      setAction("O")
     } else {
      setAction("X")
     }
    newSquare[i] = action
    setSquares(newSquare)
    }

  }

  return (
    <>
  <div className="container">
    <h2>Tic Tac Toe</h2>
    <div className="board">
      <Square onSquareClick={()=>tic(0)} value={squares[0]} />
      <Square onSquareClick={()=>tic(1)} value={squares[1]}/>
      <Square onSquareClick={()=>tic(2)} value={squares[2]}/>
      <Square onSquareClick={()=>tic(3)} value={squares[3]} />
      <Square onSquareClick={()=>tic(4)} value={squares[4]}/>
      <Square onSquareClick={()=>tic(5)} value={squares[5]}/>
      <Square onSquareClick={()=>tic(6)} value={squares[6]}/>
      <Square onSquareClick={()=>tic(7)} value={squares[7]}/>
      <Square onSquareClick={()=>tic(8)} value={squares[8]}/>
    </div>
    <button className="reset">Restart</button>
  </div>
    </>
  )
}

export default App
