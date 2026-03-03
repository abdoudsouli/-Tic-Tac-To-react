import { useEffect, useState } from 'react';
import './App.css';
import Square from './Components/Square';


function App() {
  const [squares,setSquares]=useState(Array(9).fill(null));
   const [action,setAction]=useState('X');
   const [win,setWin]=useState(null);
  //['null','null'...]

  const tic = (i)=>{
    const newSquare = squares.slice()
    if(newSquare[i] !== null){
      alert('Alrady checked')
    }else{
    setAction(action === 'X' ? 'O' : 'X');
    newSquare[i] = action
    setSquares(newSquare)
    console.log('tic')
    }
  }

 const check_win = () => {

  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      setWin(squares[a] + " is Winner");
    }
  }
};

useEffect(() => {
  check_win()
}, [squares]);

  return (
    <>
  <div className="container">
    <h2>{win}</h2>
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
