

export default function Tile({ className, value ,onClick, playerTurn}) {
    let hoverClass = null;
    if (value == null && playerTurn != null){
        hoverClass =`${playerTurn.toLowerCase()}-hover`;
    }
    return(
        <div onClick={onClick} className={`w-24 h-24 flex justify-center items-center text-4xl font-bold ${className} ${hoverClass}`}>
         {value}
        </div>
    )
}