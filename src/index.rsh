'reach 0.1';
const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3)

const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3)

const winner = (handA, handB) => ((handA + (4 - handB)) % 3)


assert(winner(ROCK, PAPER) == B_WINS)
assert(winner(PAPER, ROCK) == A_WINS)
assert(winner(ROCK, ROCK) == DRAW)

forall(UInt, handA =>
    forall(UInt, handB =>
        assert(isOutcome(winner(handA, handB)))))

forall(UInt, (hand) =>
    assert(winner(hand, hand) == DRAW))

const Player_func = {
    ...hasRandom,
    getHand: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
    const Player1 = Participant('Player1', {
        ...Player_func,
        wager: UInt,
        deadline: UInt
    });
    const Player2 = Participant('Player2', {
        ...Player_func,
        acceptWager: Fun([UInt], Null),
    });

    init();

    Player1.only(() => {
        const wager = declassify(interact.wager)
    })
    Player1.publish(wager)
        .pay(wager)
    commit()

    Player2.only(() => {
        interact.acceptWager(wager)
    })
    Player2.pay(wager)
    var [p1, p2] = [0, 0]
    invariant(balance() == (2 * wager));
    while ((p1 + p2) < 3) {
        commit()

        Player1.only(() => {
            const _Player1hand = interact.getHand()
            const [_commitplayer1, _saltplayer1] = makeCommitment(interact, _Player1hand)
            const commitplayer1 = declassify(_commitplayer1)
        })
        Player1.publish(commitplayer1)
        commit()
        unknowable(Player2, Player1(_Player1hand, _saltplayer1))

        Player2.only(() => {
            const Player2hand = declassify(interact.getHand())
        })
        Player2.publish(Player2hand)
        commit()

        Player1.only(() => {
            const saltplayer1 = declassify(_saltplayer1)
            const Player1hand = declassify(_Player1hand)
        })
        Player1.publish(saltplayer1, Player1hand)

        checkCommitment(commitplayer1, saltplayer1, Player1hand)
        const outcome = winner(Player1hand, Player2hand)
        each([Player1, Player2], () => {
            interact.seeOutcome(outcome)
        })
        if (outcome == A_WINS) {
            [p1, p2] = [p1 + 1, p2];
            continue;
        } else {
            if (outcome == B_WINS) {
                [p1, p2] = [p1, p2 + 1];
                continue;
            } else {
                [p1, p2] = [p1, p2];
                continue;
            }
        }
    }
    transfer(2 * wager).to(p1 > p2 ? Player1 : Player2);
    commit();
})