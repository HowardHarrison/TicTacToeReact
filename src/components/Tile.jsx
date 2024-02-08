

export default function Tile({ className, value ,onClick, playerTurn}) {
    let hoverClass = null;
    if (value == null && playerTurn != null){
        hoverClass =`${playerTurn.toLowerCase()}-hover`;
    }
    return(
        <div onClick={onClick} className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex justify-center items-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold ${className} ${hoverClass}`}>
         {value}
        </div>
    )
}