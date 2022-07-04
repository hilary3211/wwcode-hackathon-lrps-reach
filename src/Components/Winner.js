export default function Winner({winner, playAgain}){
    return(
        <div>
            {
                winner ? <h1>You win</h1> : <h1>There was a draw!</h1>
            }
            <button onClick={playAgain}>Play Again</button>
            
        </div>
    )
}