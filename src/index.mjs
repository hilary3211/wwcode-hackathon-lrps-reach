import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

//create test account
const startingBalance = stdlib.parseCurrency(100);
const acc = await stdlib.newTestAccount(startingBalance);

//Set up functions for checking balance
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance()
console.log('Your starting balance is: ' + before)

//define hand participants can play 
const HAND = ['Rock', 'Paper', 'Scissors'];
const HANDS = {
    'Rock': 0, 'rock': 0, 'R': 0, 'r': 0,
    'Paper': 1, 'paper': 1, 'P': 1, 'p': 1,
    'Scissors': 2, 'scissors': 2, 'S': 2, 's': 2,
};

//Define common interface for both players
const Player = {
    //...hasRandom
    random: () => stdlib.hasRandom.random(),

    //function that gets called when its player's turn to deal a hand
    getHand: async () => {
        const hand = await ask(`What hand will you play?`, (x) => {
            const hand = HANDS[x];
            if (hand === undefined) {
                throw Error(`Not a valid hand ${hand}`);
            }
            return hand;
        });
        console.log(`You played ${HAND[hand]}`);
        return hand;
    },

    //function that gets called when player sees outcome of a round
    seeOutcome: (outcome) => {
        const outcomeDecimal = parseInt(outcome);
        switch (outcomeDecimal) {
            case 0:
                console.log("Player2 wins this round");
                break;
            case 1:
                console.log("Nobody wins this round");
                break;
            case 2:
                console.log("Player1 wins this round");
            default:
                break;
        }
    },

    //functin that gets called after a timeout
    informTimeOut: () => {
        console.log("There was a timeout");
    }
};

//Define interface for Player1
const Player1 = {
    ...Player,  //add common player interface to Player1's interface

    wager: 10,  //set wager

    deadline: 100 //set duration of deadline
};


//Define interface for Player2
const Player2 = {
    ...Player,  //add common player interface to Player2's interface

    //function that lets Player2 accept or reject a wager.
    acceptWager: async (wager) => {
        const accept = await ask(`Do you accept the wager of ${fmt(stdlib.parseCurrency(wager))}`, yesno)
        if (accept) {
            return
        }
        else {
            process.exit();
        }
    }
};

//Where the actual game starts
const program = async () => {

    //Asks player if he wants to deploy. A 'no' means he becomes an attacher
    //isPlayer1 is a boolean. 'true' if deployer, 'false' if attacher
    const isPlayer1 = await ask(
        `Do you want to deploy the contract?`,
        yesno
    )
    const who = isPlayer1 ? 'Player1' : 'Player2';

    console.log(`Starting as ${who}`);

    //Contract gets initialized here
    let ctc = null;
    if (isPlayer1) {
        //deploy contract as Player1 and display contract info
        ctc = acc.contract(backend);
        backend.Player1(ctc, Player1);
        console.log('Deploying contract...');

        const info = JSON.stringify(await ctc.getInfo(), null, 1) //fetch contract info
        console.log(info); //display info
    }
    else {
        //if Player2, ask for contract info and attach to contract as Player2
        //best for Player2 to manually type the contract info in one line.. E get why
        const info = await ask(
            `Please paste the contract information of the contract you want to subscribe to:`,
            JSON.parse
        );
        ctc = acc.contract(backend, info);
        backend.Player2(ctc, Player2);
        console.log("Successfully connected");
    }

    //After contract deployment, the reach file calls the players' interact functions where needed
}

await program();

const after = await getBalance()
console.log('Your balance is: ' + after)
