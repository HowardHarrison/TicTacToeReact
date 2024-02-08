import GameState from "./GameState"

export default function Reset({ gameState, onReset}) {
    if (gameState === GameState.inProgress) {
     return;
    }
    return (
        <button onClick={onReset} className="p-3 mt-5 sm:p-6 sm:mt-10 mx-5 w-36 sm:w-44 md:w-56 lg:w-64 xl:w-70 bg-blue-500 text-lg md:text-2xl xl:text-3xl font-bold rounded-lg">Reset</button>
    )
}