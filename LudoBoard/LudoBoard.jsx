
import {useState} from 'React';
export default function LudoBoard() {

let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

let updateBlue = () => {
setMoves ((prevMoves) => {
return{...prevMoves, blue: prevMoves.blue + 1}; }); 
};

let updateYellow = () => {
setMoves ((prevMoves) => {
return{...prevMoves, yellow: prevMoves.yellow + 1}; }); 
};


 return (
   <div>
      <p>Game Begins!</p>
      <div className="board">
      <p>Blue moves = {moves.blue}</p>
      <button style={{ backgroundColor: "blue"}} onClick={updateBlue}>
      </button>

      
      <p>Yellow moves = {moves.yellow}</p>
      <button
      style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>
      </button>
    
      <p>Green moves = {moves.green}</p>

      <button style={{ backgroundColor: "green" }}>+1</button>

      <p>Red moves = {moves.red}</p>
         <button style={{ backgroundColor: "red" }}>+1</button>
      </div>

   </div>
 );

