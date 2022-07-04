import { useState } from "react";
import './index.scss';

const initialSelected = new Array(3);
initialSelected.fill(false);

export function PlayTurn({guess, played, round, outcome, isAlice}){
    const [ hand, setHand ] = useState(undefined);
    const [ selected, setSelected ] = useState(initialSelected)

    const onChange = event => {
        const value = parseInt(event.target.id);
        const copy = new Array(11);
        copy.fill(false);
        copy[value] = true;
        setSelected(copy);
        setHand(value);
    }

    const handleSubmit = () => {
        guess(hand);
        played();
    }

    return(
        <div>
            {
                round > 1  &&
                    <>
                        <h3>
                            {
                               outcome === 0 ? isAlice ? 'You lost the last round':  'You won the last round' : null
                            }

                            {
                                outcome === 1 && 'Nobody won the last round'
                            }

                            {
                                outcome === 2 ? isAlice ? 'You won the last round' :  'You lost the last round' : null
                            }
                        </h3>
                    </> 
            }

            <h3>Play Turn</h3>

            {
                hand !== undefined && !isNaN(hand) &&
                <button onClick={handleSubmit}>Submit Hand</button>
            }

            <div className="card-container">
                <img 
                    className={ selected[0] === true ? `card selected` : `card`}  
                    id={0}
                    onClick={onChange}
                    alt="rock" 
                    src={require("../images/rock.png")}
                />

                <img 
                    className={ selected[1] === true ? `card selected` : `card`}  
                    id={1}
                    onClick={onChange}
                    alt="paper" 
                    src={require("../images/paper.png")}
                />

                <img 
                    className={ selected[2] === true ? `card selected` : `card`}  
                    id={2}
                    onClick={onChange}
                    alt="scissors" 
                    src={require("../images/scissors.png")}
                />
            </div>
            
        </div>
    )
}