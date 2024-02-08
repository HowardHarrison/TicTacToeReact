import GameState from "./GameState"

export default function Reset({ gameState, onReset}) {
    if (gameState === GameState.inProgress) {
     return;
    }
    return (
        <button onClick={onReset} className="p-3 mt-5 sm:p-6 sm:mt-10 mx-10 w-48 sm:w-60 bg-blue-500 text-xl">Reset</button>
    )
}