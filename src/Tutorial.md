<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">Loopable Rock, Paper, Scissors</h3>

<div align="center">


</div>

---

<p align="center"> Tutorial for the Loopale rock,paper,scissors
    <br> 
</p>

This is the tutorial for the loopable rock paper scissors project, We are going to create a variant of the rock,paper,scissors game where moves are submitted in batches or rounds to help keep transaction cost low.

We will be using Reach to write the smart contract of the dapp and javascript to design the console application.With out further or do let's dive in.

```js
1 'reach 0.1'
2 const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3) 
3  
4 const winner = (handA, handB) => ((handA + (4 - handB)) % 3)
5
6 assert(winner(ROCK, PAPER) == B_WINS)
7 assert(winner(PAPER, ROCK) == A_WINS)
8 assert(winner(ROCK, ROCK) == DRAW)
9
10 forall(UInt, handA =>
11    forall(UInt, handB =>
12       assert(isOutcome(winner(handA, handB)))))
13
14 forall(UInt, (hand) =>
15    assert(winner(hand, hand) == DRAW))
```

* Line 1 is used to specify the version of [REACH](https://docs.reach.sh/tut/rps/#tut)
* From line 2 to 4 we create functions and variables we use within the program
* From line 6 to 15 ensures that all the the functions work using the assert function

The dapp we are creating consist of two players (player1 and player 2), we are going create the players in the smart contract in the code block below

```js
16 const Player_func = {
17    ...hasRandom,
18    getHand: Fun([], UInt),
19    seeOutcome: Fun([UInt], Null),
20    informTimeout: Fun([], Null)
21 }
```
* Line 16 to line 21 defines the functions the two players or participants have in common. We store this functions in a variable Player_func to be called later in the program.

The next step is to create the reach application and the participants of the application, when this is done we initalize the application, the code block below shows how it's done.
```js
1 export const main = Reach.App(() => {
2
3    init();
4
5 })
```
Note the code block above isn't part of the application, it's purpose is to show you how the reach app is created and initalized
* From line 1 to line 5 holds the reach application , but the reach application gets initalized on line 3.
Now let's get back to writing our dapp
```js
22 export const main = Reach.App(() => {
23    const Player1 = Participant('Player1', {
24        ...Player_func,
25        wager: UInt,
26        deadline: UInt
27    });
28    const Player2 = Participant('Player2', {
29        ...Player_func,
30        acceptWager: Fun([UInt], Null),
31    })
32
33    init()
34  })
```
* Line 22 to Line 31 creates the participants of the game and includes their functions
* On Line 33 we initalize the REACH application

Let's catch up to what we have done so far
* We created a function that will be used to get the winner of the game after each round, we also tested the function to ensure it works.
* We created a variable that was used to store the functions the two participants had in common.
* We created the the two participants of the game and their individual functions, we named the participants Player1 and Player2.

So we have done quite a lot you can pat yourself at the back. 

In the next stage of this tutorial we will be going through how the logic of the game is implemented

```js
35    Player1.only(() => {
36        const wager = declassify(interact.wager)
37    })
38    Player1.publish(wager)
39        .pay(wager)
40    commit()
41
42    Player2.only(() => {
43        interact.acceptWager(wager)
44    })
45    Player2.pay(wager)
```
* From Line 35 to Line 37 we use the '.only()' method to access functions availabe for only player1, in this case we access the wager function.
* On Line 38 and Line 39 we publish this wager and also pay it, then we commit on the next line
* From Line 42 to Line 44 we access the acceptWager function , to enable player2 accept the wager proposed by player1 above. Player2 pays this wager on Line 45.

If you notice we didn't commit after payment, well that's because we are about to use a while loop, and while loop must be used in a consensus step.

```js
46    var [p1, p2] = [0, 0]
47    invariant(balance() == (2 * wager));
48    while ((p1 + p2) < 3) {
49        commit()
    }
```
Before we start applying the logic in the the while loop, let's understand how the while loop works in Reach
* On Line 46 we use var to make the variable names in the list mutable, variales are immutable in reach by default.
We make this variable names mutable so we can update the variable content within the while loop and still use them outside the loop

* On Line 47 we ceate an invariant block, note whatever condition you put in the invariant block must be true for the while loop to be functional, in this case we check if the balance in the contract is equal to the amount of wager paid by the players 
* On Line 48 we start the while with a couple of conditions.in this case the condition we set ensures the game has 3 rounds, by incrementing the p1 and p2 variables after certain conditions, this will be explained better as we continue.
* On line 49 we commit, this puts the while loop inside the consensus step.

Note the code block below goes into the while loop
```js
50    Player1.only(() => {
51            const _Player1hand = interact.getHand()
52            const [_commitplayer1, _saltplayer1] = makeCommitment(interact, _Player1hand)
53            const commitplayer1 = declassify(_commitplayer1)
        })
54        Player1.publish(commitplayer1)
55        commit()
56        unknowable(Player2, Player1(_Player1hand, _saltplayer1))
57
58        Player2.only(() => {
59            const Player2hand = declassify(interact.getHand())
60        })
61        Player2.publish(Player2hand)
62        commit()
```
* From line 50 to line 53, we use the gethand function to get player1 hand, this is done on line 51, On line 52 we make a commitment not to display our hands yet, we declassify this commitment and publish it on lines 53 and 54.
* We commit on line 55.
* On line 56 we use a very interesting reach function 'Unknowable'. Here we use this function to ensure player2 doesn't know player1's hand yet
* From line 58 to line 60 we use the getHand function to get player2's hand, we publish this hand and commit on lines 61 and line 62.

```js
63        Player1.only(() => {
64            const saltplayer1 = declassify(_saltplayer1)
65            const Player1hand = declassify(_Player1hand)
66        })
67        Player1.publish(saltplayer1, Player1hand)
68
69        checkCommitment(commitplayer1, saltplayer1, Player1hand)
```
* From line 63 to line 66 we declassify both the other part of the commitment of player1 and player1's hand and publish them on line 67
* Line 69 we use the 'checkCommitment' function to ensure player1 is honest and didn't tamper with the commitment after publishing

```js
70        const outcome = winner(Player1hand, Player2hand)
71        each([Player1, Player2], () => {
72            interact.seeOutcome(outcome)
73        })
74        if (outcome == A_WINS) {
75            [p1, p2] = [p1 + 1, p2];
76            continue;
77        } else {
78            if (outcome == B_WINS) {
79                [p1, p2] = [p1, p2 + 1];
80                continue;
81            } else {
82                [p1, p2] = [p1, p2];
83                continue;
84            }
85        }
```

* On Line 70 we use the winner function we create earlier in the program to get the outcome of the round, taking the player hands as argument
* From Line 71 to Line 73 we use the seeOutcome function to display the outcome of the round to the players.
* From Line 74 to Line 85 we use if and else state to handle a certain logic, before this logic is explained note that the if and else statement work the same way in reach as it works in other programming languages. So to handle this logic we used nested if and else statements to handle the 3 possible outcomes of the game and increment p1 and p2 in respect to this different outcome.

The while loop code block was broken down above to explain every part of it, below is the full while loop code block

```js
46    var [p1, p2] = [0, 0]
47    invariant(balance() == (2 * wager));
48    while ((p1 + p2) < 3) {
49        commit()
50
51        Player1.only(() => {
52            const _Player1hand = interact.getHand()
53            const [_commitplayer1, _saltplayer1] = makeCommitment(interact, _Player1hand)
54            const commitplayer1 = declassify(_commitplayer1)
55        })
56        Player1.publish(commitplayer1)
57        commit()
58        unknowable(Player2, Player1(_Player1hand, _saltplayer1))

59        Player2.only(() => {
60            const Player2hand = declassify(interact.getHand())                        
61        })
62        Player2.publish(Player2hand)
63        commit()
64
65        Player1.only(() => {
66            const saltplayer1 = declassify(_saltplayer1)
67            const Player1hand = declassify(_Player1hand)
68        })
69        Player1.publish(saltplayer1, Player1hand)
70
71        checkCommitment(commitplayer1, saltplayer1, Player1hand)
72        const outcome = winner(Player1hand, Player2hand)
73        each([Player1, Player2], () => {
74            interact.seeOutcome(outcome)
75        })
76        if (outcome == A_WINS) {
77            [p1, p2] = [p1 + 1, p2];
78            continue;
79        } else {
80            if (outcome == B_WINS) {
81                [p1, p2] = [p1, p2 + 1];
82                continue;
83            } else {
84                [p1, p2] = [p1, p2];
85                continue;
86            }
87        }
88    }
89    transfer(2 * wager).to(p1 > p2 ? Player1 : Player2);
90    commit();
```

* On line 89 we transfer the wager staked by the two players to the winner of the game and commit on line 90

We are done wrirting the REACH backend code, let's start writing the javascript frontend code.

```js
1 import { loadStdlib } from '@reach-sh/stdlib';
2 import * as backend from './build/index.main.mjs';
3 import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
4 const stdlib = loadStdlib(process.env);

5 const startingBalance = stdlib.parseCurrency(100);
6 const acc = await stdlib.newTestAccount(startingBalance);

7 const fmt = (x) => stdlib.formatCurrency(x, 4);
8 const getBalance = async () => fmt(await stdlib.balanceOf(acc));
9 const HAND = ['Rock', 'Paper', 'Scissors'];
10 const HANDS = {
    'Rock': 0, 'rock': 0, 'R': 0, 'r': 0,
    'Paper': 1, 'paper': 1, 'P': 1, 'p': 1,
    'Scissors': 2, 'scissors': 2, 'S': 2, 's': 2,
11 };
```

* From Line 1 to Line 3 we import important libraries used in the program
* On line 4 we call one of the libs and store it in a variable, this variables will be used in the program.
* On line 5 and 6 we create Test Accounts for the players and fund them with 100algo each.
* On line 7 and 8 we create 2 function which will enable us format the currency into 4 decimal places, and also get the account balance of each player.
* On line 10 and 11 we create a variable annd store the moves and also map this moves to numbers

```js
const Player = {}
```
In the code block above we create a variable name player, in this variable we are going to store all the functions all the players have in common.

```js
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
```
* We create the random function which uses the hasRandom from the reach standard library to enable each frontend generate random numbers
* The getHand function is used to get the players hand for each round.

```js
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

 
    informTimeOut: () => {
        console.log("There was a timeout");
    }
```
* The seeOutcome is used to check the outcome of each round and display it to the players
* The informTimeOut function was created to informTimeout to each player


Below is the full code block
```js
12 const Player = {
13    random: () => stdlib.hasRandom.random(),
14
15    getHand: async () => {
16        const hand = await ask(`What hand will you play?`, (x) => {
17            const hand = HANDS[x];
18            if (hand === undefined) {
19                throw Error(`Not a valid hand ${hand}`);
20            }
21            return hand;
22        });
23        console.log(`You played ${HAND[hand]}`);
23        return hand;
25    },
26
27    seeOutcome: (outcome) => {
28        const outcomeDecimal = parseInt(outcome);
29        switch (outcomeDecimal) {
30            case 0:
31                console.log("Player2 wins this round");
32                break;
33            case 1:
34                console.log("Nobody wins this round");
35                break;
36            case 2:
37                console.log("Player1 wins this round");
38            default:
39                break;
40        }
41    },
42
43    informTimeOut: () => {
44        console.log("There was a timeout");
45    }
46 };
```


```js
47 const Player1 = {
48    ...Player,
49    wager: 10,
50    deadline: 100
51 };
52
53 const Player2 = {
54    ...Player,
55    acceptWager: async (wager) => {
56        const accept = await ask(`Do you accept the wager of ${fmt(stdlib.parseCurrency(wager))}`, yesno)
57        if (accept) {
58            return
59        }
60        else {
61            process.exit();
62        }
63    }
64 };
```
* From line 47 to line 51 we create a variable name Player1, this variable contains all the functions of player1 in the game.
* From line 53 to line 64 we do the same thing by storing all the functions availabe to player2 in the game.

Before we go any futher lets catch with what we have done so far
* We imported necessary libraries, created test accounts and funded them using some inbuilt functions from the reach standard library (stdlib)
* We stored the moves the players can make in a variable and also mapped varity of this moves to numbers.
* We defined all the functions the two players have in common and stored them in a variable we named Player
* And finally we created tow variables player1 and player2 that stores both common and unique functions of the players respectively. 

Now we are all caught up lets get to use this functions and variable names we have created in the logic of the game.

We are going to create an asynchronous function and name it program, this will contain all the logic of the game.
```js
const program = async () => {

}
```
In the above code blocks we created the program function which would contain all the logic of the game, this logic will be explained step by step as we go further.
Note code blocks below belong to the program function
```js
 const isPlayer1 = await ask(
        `Do you want to deploy the contract?`,
        yesno
    )
    const who = isPlayer1 ? 'Player1' : 'Player2';

    console.log(`Starting as ${who}`);
```
* The code block above is used to confirm if the person interacting with the contract is player1 and player2, if they are player1, they become a deployer, else an attacher

```js
let ctc = null;
    if (isPlayer1) {
        ctc = acc.contract(backend);
        backend.Player1(ctc, Player1);
        console.log('Deploying contract...');

        const info = JSON.stringify(await ctc.getInfo(), null, 1)
        console.log(info);
    }
    else {
        const info = await ask(
            `Please paste the contract information of the contract you want to subscribe to:`,
            JSON.parse
        );
        ctc = acc.contract(backend, info);
        backend.Player2(ctc, Player2);
        console.log("Successfully connected");
    }
```
* The code block above uses the output stored in the isPlayer1 variable to deploy the contract. So in the case its player1 the contract gets deployed, where as if it the player 2 the application as for a contract information to attach the player to.

The full code block of how the program function looks

```js
65 const program = async () => {
66    const isPlayer1 = await ask(
67        `Do you want to deploy the contract?`,
68        yesno
69    )
70    const who = isPlayer1 ? 'Player1' : 'Player2';
71
72    console.log(`Starting as ${who}`);
73
74    let ctc = null;
75    if (isPlayer1) {
76        ctc = acc.contract(backend);
77        backend.Player1(ctc, Player1);
78        console.log('Deploying contract...');
79
80        const info = JSON.stringify(await ctc.getInfo(), null, 1)
81        console.log(info); 
82    }
83    else {
84        const info = await ask(
85            `Please paste the contract information of the contract you want to subscribe to:`,
86            JSON.parse
87        );
88        ctc = acc.contract(backend, info);
89        backend.Player2(ctc, Player2);
90        console.log("Successfully connected");
91    }
92 }
93 await program();
94
95 const after = await getBalance()
96 console.log('Your balance is: ' + after)
```
* On line 93 we run the program 
* On Line 95 and 96 we get the account balance of the players and print it out on the console.

