export default function Loser({playAgain}){
    return(
        <div>
            <h1>You Lose!!</h1>
            <button onClick={playAgain}>Play Again</button>
        </div>
    )
}