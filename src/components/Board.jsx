import Strike from "./Strike";
import Tile from "./Tile";


export default function Board({ tiles ,onTileClick, playerTurn, strikeClass }) {
    return(
        <div className="max-w-[720px] max-h-[720px] relative grid grid-cols-3 grid-rows-3 mx-auto cursor-pointer mt-2">
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(0)} value={tiles[0]} className='border-r-4 border-b-4 border-solid border-blue-500'/>
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(1)} value={tiles[1]} className='border-r-4 border-b-4 border-solid border-blue-500'/>
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(2)} value={tiles[2]} className='border-b-4 border-solid border-blue-500'/>
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(3)} value={tiles[3]} className='border-r-4 border-b-4 border-solid border-blue-500'/>
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(4)} value={tiles[4]} className='border-r-4 border-b-4 border-solid border-blue-500'/>
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(5)} value={tiles[5]} className='border-b-4 border-solid border-blue-500'/>
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(6)} value={tiles[6]} className='border-r-4 border-solid border-blue-500'/>
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(7)} value={tiles[7]} className='border-r-4 border-solid border-blue-500'/>
         <Tile playerTurn={playerTurn} onClick={() => onTileClick(8)} value={tiles[8]}/>
         <Strike strikeClass={strikeClass}/>
        </div>
    )
}