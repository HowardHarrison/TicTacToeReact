import GameState from "./GameState"

export default function Reset({ gameState, onReset}) {
    if (gameState === GameState.inProgress) {
     return;
    }
    return (
        <button onClick={onReset} className="p-6 mt-10 bg-blue-500 text-white w-full text-lg">Reset</button>
    )
}