

export default function Tile({ className, value ,onClick, playerTurn}) {
    let hoverClass = null;
    if (value == null && playerTurn != null){
        hoverClass =`${playerTurn.toLowerCase()}-hover`;
    }
    return(
        <div onClick={onClick} className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center text-2xl md:text-4xl font-bold ${className} ${hoverClass}`}>
         {value}
        </div>
    )
}