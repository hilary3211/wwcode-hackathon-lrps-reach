// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1, ctc0, ctc2],
      4: [ctc0, ctc1, ctc0, ctc2, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1, ctc2],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2],
      10: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v297 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v297],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v297, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v301], secs: v303, time: v302, didSend: v55, from: v300 } = txn1;
      
      sim_r.txns.push({
        amt: v301,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v301], secs: v303, time: v302, didSend: v55, from: v300 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.waitForAttacher(), {
    at: './index.rsh:56:35:application',
    fs: ['at ./index.rsh:56:35:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)', 'at ./index.rsh:56:35:application call to "liftedInteract" (defined at: ./index.rsh:56:35:application)'],
    msg: 'waitForAttacher',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v311, time: v310, didSend: v68, from: v309 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.newRound(), {
    at: './index.rsh:65:28:application',
    fs: ['at ./index.rsh:65:28:application call to [unknown function] (defined at: ./index.rsh:65:28:function exp)', 'at ./index.rsh:65:28:application call to "liftedInteract" (defined at: ./index.rsh:65:28:application)'],
    msg: 'newRound',
    who: 'Alice'
    });
  
  const v318 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:69:44:application',
    fs: ['at ./index.rsh:68:15:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v319 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:70:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:68:15:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v320 = stdlib.digest(ctc2, [v319, v318]);
  
  const txn3 = await (ctc.sendrecv({
    args: [v300, v301, v309, v320],
    evt_cnt: 1,
    funcNum: 2,
    lct: v310,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v323], secs: v325, time: v324, didSend: v90, from: v322 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v323], secs: v325, time: v324, didSend: v90, from: v322 } = txn3;
  ;
  const v326 = stdlib.addressEq(v300, v322);
  stdlib.assert(v326, {
    at: './index.rsh:73:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v331], secs: v333, time: v332, didSend: v100, from: v330 } = txn4;
  ;
  const v334 = stdlib.addressEq(v309, v330);
  stdlib.assert(v334, {
    at: './index.rsh:81:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn5 = await (ctc.sendrecv({
    args: [v300, v301, v309, v323, v331, v319, v318],
    evt_cnt: 2,
    funcNum: 4,
    lct: v332,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v338, v339], secs: v341, time: v340, didSend: v110, from: v337 } = txn5;
      
      ;
      const v345 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v331);
      const v346 = stdlib.add(v339, v345);
      const v347 = stdlib.mod(v346, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v338, v339], secs: v341, time: v340, didSend: v110, from: v337 } = txn5;
  ;
  const v342 = stdlib.addressEq(v300, v337);
  stdlib.assert(v342, {
    at: './index.rsh:89:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v343 = stdlib.digest(ctc2, [v338, v339]);
  const v344 = stdlib.digestEq(v323, v343);
  stdlib.assert(v344, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:91:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v345 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v331);
  const v346 = stdlib.add(v339, v345);
  const v347 = stdlib.mod(v346, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
  stdlib.protect(ctc1, await interact.seeOutcome(v347), {
    at: './index.rsh:95:28:application',
    fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  stdlib.protect(ctc1, await interact.newRound(), {
    at: './index.rsh:99:28:application',
    fs: ['at ./index.rsh:99:28:application call to [unknown function] (defined at: ./index.rsh:99:28:function exp)', 'at ./index.rsh:99:28:application call to "liftedInteract" (defined at: ./index.rsh:99:28:application)'],
    msg: 'newRound',
    who: 'Alice'
    });
  
  const v356 = stdlib.protect(ctc0, await interact.getHand1(), {
    at: './index.rsh:103:46:application',
    fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
    msg: 'getHand1',
    who: 'Alice'
    });
  const v357 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:104:60:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v358 = stdlib.digest(ctc2, [v357, v356]);
  
  const txn6 = await (ctc.sendrecv({
    args: [v300, v301, v309, v347, v358],
    evt_cnt: 1,
    funcNum: 5,
    lct: v340,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:107:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v361], secs: v363, time: v362, didSend: v145, from: v360 } = txn6;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v361], secs: v363, time: v362, didSend: v145, from: v360 } = txn6;
  ;
  const v364 = stdlib.addressEq(v300, v360);
  stdlib.assert(v364, {
    at: './index.rsh:107:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 6,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v369], secs: v371, time: v370, didSend: v155, from: v368 } = txn7;
  ;
  const v372 = stdlib.addressEq(v309, v368);
  stdlib.assert(v372, {
    at: './index.rsh:115:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn8 = await (ctc.sendrecv({
    args: [v300, v301, v309, v347, v361, v369, v357, v356],
    evt_cnt: 2,
    funcNum: 7,
    lct: v370,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:123:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn8) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v376, v377], secs: v379, time: v378, didSend: v165, from: v375 } = txn8;
      
      ;
      const v383 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v369);
      const v384 = stdlib.add(v377, v383);
      const v385 = stdlib.mod(v384, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v376, v377], secs: v379, time: v378, didSend: v165, from: v375 } = txn8;
  ;
  const v380 = stdlib.addressEq(v300, v375);
  stdlib.assert(v380, {
    at: './index.rsh:123:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v381 = stdlib.digest(ctc2, [v376, v377]);
  const v382 = stdlib.digestEq(v361, v381);
  stdlib.assert(v382, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:125:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v383 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v369);
  const v384 = stdlib.add(v377, v383);
  const v385 = stdlib.mod(v384, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
  stdlib.protect(ctc1, await interact.seeOutcome(v385), {
    at: './index.rsh:131:28:application',
    fs: ['at ./index.rsh:130:9:application call to [unknown function] (defined at: ./index.rsh:130:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  stdlib.protect(ctc1, await interact.newRound(), {
    at: './index.rsh:135:28:application',
    fs: ['at ./index.rsh:135:28:application call to [unknown function] (defined at: ./index.rsh:135:28:function exp)', 'at ./index.rsh:135:28:application call to "liftedInteract" (defined at: ./index.rsh:135:28:application)'],
    msg: 'newRound',
    who: 'Alice'
    });
  
  const v394 = stdlib.protect(ctc0, await interact.getHand2(), {
    at: './index.rsh:141:46:application',
    fs: ['at ./index.rsh:140:15:application call to [unknown function] (defined at: ./index.rsh:140:19:function exp)'],
    msg: 'getHand2',
    who: 'Alice'
    });
  const v395 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:142:60:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:140:15:application call to [unknown function] (defined at: ./index.rsh:140:19:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v396 = stdlib.digest(ctc2, [v395, v394]);
  
  const txn9 = await (ctc.sendrecv({
    args: [v300, v301, v309, v347, v385, v396],
    evt_cnt: 1,
    funcNum: 8,
    lct: v378,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:145:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn9) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v399], secs: v401, time: v400, didSend: v200, from: v398 } = txn9;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v399], secs: v401, time: v400, didSend: v200, from: v398 } = txn9;
  ;
  const v402 = stdlib.addressEq(v300, v398);
  stdlib.assert(v402, {
    at: './index.rsh:145:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn10 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 9,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v407], secs: v409, time: v408, didSend: v210, from: v406 } = txn10;
  ;
  const v410 = stdlib.addressEq(v309, v406);
  stdlib.assert(v410, {
    at: './index.rsh:153:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn11 = await (ctc.sendrecv({
    args: [v300, v301, v309, v347, v385, v399, v407, v395, v394],
    evt_cnt: 2,
    funcNum: 10,
    lct: v408,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:161:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn11) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v414, v415], secs: v417, time: v416, didSend: v220, from: v413 } = txn11;
      
      ;
      const v421 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v407);
      const v422 = stdlib.add(v415, v421);
      const v423 = stdlib.mod(v422, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
      const v424 = stdlib.eq(v385, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v425 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v426 = v424 ? v425 : false;
      const v428 = stdlib.eq(v423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v429 = v425 ? v428 : false;
      const v430 = v426 ? true : v429;
      const v433 = v424 ? v428 : false;
      const v434 = v430 ? true : v433;
      const v435 = stdlib.eq(v385, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v436 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v437 = v435 ? v436 : false;
      const v439 = stdlib.eq(v423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v440 = v436 ? v439 : false;
      const v441 = v437 ? true : v440;
      const v444 = v435 ? v439 : false;
      const v445 = v441 ? true : v444;
      const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v447 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v448 = v445 ? v446 : v447;
      const v449 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v450 = v434 ? v449 : v448;
      const v451 = v450[stdlib.checkedBigNumberify('./index.rsh:171:11:array', stdlib.UInt_max, '0')];
      const v452 = v450[stdlib.checkedBigNumberify('./index.rsh:171:11:array', stdlib.UInt_max, '1')];
      const v453 = stdlib.mul(v451, v301);
      sim_r.txns.push({
        kind: 'from',
        to: v300,
        tok: undefined /* Nothing */
        });
      const v458 = stdlib.mul(v452, v301);
      sim_r.txns.push({
        kind: 'from',
        to: v309,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v414, v415], secs: v417, time: v416, didSend: v220, from: v413 } = txn11;
  ;
  const v418 = stdlib.addressEq(v300, v413);
  stdlib.assert(v418, {
    at: './index.rsh:161:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v419 = stdlib.digest(ctc2, [v414, v415]);
  const v420 = stdlib.digestEq(v399, v419);
  stdlib.assert(v420, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:163:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v421 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v407);
  const v422 = stdlib.add(v415, v421);
  const v423 = stdlib.mod(v422, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
  const v424 = stdlib.eq(v385, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v425 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v426 = v424 ? v425 : false;
  const v428 = stdlib.eq(v423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v429 = v425 ? v428 : false;
  const v430 = v426 ? true : v429;
  const v433 = v424 ? v428 : false;
  const v434 = v430 ? true : v433;
  const v435 = stdlib.eq(v385, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v436 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v437 = v435 ? v436 : false;
  const v439 = stdlib.eq(v423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v440 = v436 ? v439 : false;
  const v441 = v437 ? true : v440;
  const v444 = v435 ? v439 : false;
  const v445 = v441 ? true : v444;
  const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v447 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v448 = v445 ? v446 : v447;
  const v449 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v450 = v434 ? v449 : v448;
  const v451 = v450[stdlib.checkedBigNumberify('./index.rsh:171:11:array', stdlib.UInt_max, '0')];
  const v452 = v450[stdlib.checkedBigNumberify('./index.rsh:171:11:array', stdlib.UInt_max, '1')];
  const v453 = stdlib.mul(v451, v301);
  ;
  const v458 = stdlib.mul(v452, v301);
  ;
  stdlib.protect(ctc1, await interact.seeFinalOutcome(v423), {
    at: './index.rsh:181:33:application',
    fs: ['at ./index.rsh:180:9:application call to [unknown function] (defined at: ./index.rsh:180:27:function exp)'],
    msg: 'seeFinalOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v301], secs: v303, time: v302, didSend: v55, from: v300 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v301), {
    at: './index.rsh:60:29:application',
    fs: ['at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v300, v301],
    evt_cnt: 0,
    funcNum: 1,
    lct: v302,
    onlyIf: true,
    out_tys: [],
    pay: [v301, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v311, time: v310, didSend: v68, from: v309 } = txn2;
      
      sim_r.txns.push({
        amt: v301,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v311, time: v310, didSend: v68, from: v309 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.newRound(), {
    at: './index.rsh:66:26:application',
    fs: ['at ./index.rsh:66:26:application call to [unknown function] (defined at: ./index.rsh:66:26:function exp)', 'at ./index.rsh:66:26:application call to "liftedInteract" (defined at: ./index.rsh:66:26:application)'],
    msg: 'newRound',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v323], secs: v325, time: v324, didSend: v90, from: v322 } = txn3;
  ;
  const v326 = stdlib.addressEq(v300, v322);
  stdlib.assert(v326, {
    at: './index.rsh:73:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v329 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:79:52:application',
    fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v300, v301, v309, v323, v329],
    evt_cnt: 1,
    funcNum: 3,
    lct: v324,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v331], secs: v333, time: v332, didSend: v100, from: v330 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v331], secs: v333, time: v332, didSend: v100, from: v330 } = txn4;
  ;
  const v334 = stdlib.addressEq(v309, v330);
  stdlib.assert(v334, {
    at: './index.rsh:81:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v338, v339], secs: v341, time: v340, didSend: v110, from: v337 } = txn5;
  ;
  const v342 = stdlib.addressEq(v300, v337);
  stdlib.assert(v342, {
    at: './index.rsh:89:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v343 = stdlib.digest(ctc3, [v338, v339]);
  const v344 = stdlib.digestEq(v323, v343);
  stdlib.assert(v344, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:91:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v345 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v331);
  const v346 = stdlib.add(v339, v345);
  const v347 = stdlib.mod(v346, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
  stdlib.protect(ctc1, await interact.seeOutcome(v347), {
    at: './index.rsh:95:28:application',
    fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  stdlib.protect(ctc1, await interact.newRound(), {
    at: './index.rsh:100:26:application',
    fs: ['at ./index.rsh:100:26:application call to [unknown function] (defined at: ./index.rsh:100:26:function exp)', 'at ./index.rsh:100:26:application call to "liftedInteract" (defined at: ./index.rsh:100:26:application)'],
    msg: 'newRound',
    who: 'Bob'
    });
  
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v361], secs: v363, time: v362, didSend: v145, from: v360 } = txn6;
  ;
  const v364 = stdlib.addressEq(v300, v360);
  stdlib.assert(v364, {
    at: './index.rsh:107:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v367 = stdlib.protect(ctc0, await interact.getHand1(), {
    at: './index.rsh:113:54:application',
    fs: ['at ./index.rsh:112:13:application call to [unknown function] (defined at: ./index.rsh:112:17:function exp)'],
    msg: 'getHand1',
    who: 'Bob'
    });
  
  const txn7 = await (ctc.sendrecv({
    args: [v300, v301, v309, v347, v361, v367],
    evt_cnt: 1,
    funcNum: 6,
    lct: v362,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:115:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v369], secs: v371, time: v370, didSend: v155, from: v368 } = txn7;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v369], secs: v371, time: v370, didSend: v155, from: v368 } = txn7;
  ;
  const v372 = stdlib.addressEq(v309, v368);
  stdlib.assert(v372, {
    at: './index.rsh:115:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn8 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 7,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v376, v377], secs: v379, time: v378, didSend: v165, from: v375 } = txn8;
  ;
  const v380 = stdlib.addressEq(v300, v375);
  stdlib.assert(v380, {
    at: './index.rsh:123:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v381 = stdlib.digest(ctc3, [v376, v377]);
  const v382 = stdlib.digestEq(v361, v381);
  stdlib.assert(v382, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:125:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v383 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v369);
  const v384 = stdlib.add(v377, v383);
  const v385 = stdlib.mod(v384, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
  stdlib.protect(ctc1, await interact.seeOutcome(v385), {
    at: './index.rsh:131:28:application',
    fs: ['at ./index.rsh:130:9:application call to [unknown function] (defined at: ./index.rsh:130:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  stdlib.protect(ctc1, await interact.newRound(), {
    at: './index.rsh:136:26:application',
    fs: ['at ./index.rsh:136:26:application call to [unknown function] (defined at: ./index.rsh:136:26:function exp)', 'at ./index.rsh:136:26:application call to "liftedInteract" (defined at: ./index.rsh:136:26:application)'],
    msg: 'newRound',
    who: 'Bob'
    });
  
  const txn9 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 8,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v399], secs: v401, time: v400, didSend: v200, from: v398 } = txn9;
  ;
  const v402 = stdlib.addressEq(v300, v398);
  stdlib.assert(v402, {
    at: './index.rsh:145:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v405 = stdlib.protect(ctc0, await interact.getHand2(), {
    at: './index.rsh:151:54:application',
    fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:17:function exp)'],
    msg: 'getHand2',
    who: 'Bob'
    });
  
  const txn10 = await (ctc.sendrecv({
    args: [v300, v301, v309, v347, v385, v399, v405],
    evt_cnt: 1,
    funcNum: 9,
    lct: v400,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:153:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn10) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v407], secs: v409, time: v408, didSend: v210, from: v406 } = txn10;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v407], secs: v409, time: v408, didSend: v210, from: v406 } = txn10;
  ;
  const v410 = stdlib.addressEq(v309, v406);
  stdlib.assert(v410, {
    at: './index.rsh:153:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn11 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 10,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v414, v415], secs: v417, time: v416, didSend: v220, from: v413 } = txn11;
  ;
  const v418 = stdlib.addressEq(v300, v413);
  stdlib.assert(v418, {
    at: './index.rsh:161:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v419 = stdlib.digest(ctc3, [v414, v415]);
  const v420 = stdlib.digestEq(v399, v419);
  stdlib.assert(v420, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:163:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v421 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:45:decimal', stdlib.UInt_max, '4'), v407);
  const v422 = stdlib.add(v415, v421);
  const v423 = stdlib.mod(v422, stdlib.checkedBigNumberify('./index.rsh:6:59:decimal', stdlib.UInt_max, '3'));
  const v424 = stdlib.eq(v385, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v425 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v426 = v424 ? v425 : false;
  const v428 = stdlib.eq(v423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v429 = v425 ? v428 : false;
  const v430 = v426 ? true : v429;
  const v433 = v424 ? v428 : false;
  const v434 = v430 ? true : v433;
  const v435 = stdlib.eq(v385, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v436 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v437 = v435 ? v436 : false;
  const v439 = stdlib.eq(v423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v440 = v436 ? v439 : false;
  const v441 = v437 ? true : v440;
  const v444 = v435 ? v439 : false;
  const v445 = v441 ? true : v444;
  const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v447 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v448 = v445 ? v446 : v447;
  const v449 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v450 = v434 ? v449 : v448;
  const v451 = v450[stdlib.checkedBigNumberify('./index.rsh:171:11:array', stdlib.UInt_max, '0')];
  const v452 = v450[stdlib.checkedBigNumberify('./index.rsh:171:11:array', stdlib.UInt_max, '1')];
  const v453 = stdlib.mul(v451, v301);
  ;
  const v458 = stdlib.mul(v452, v301);
  ;
  stdlib.protect(ctc1, await interact.seeFinalOutcome(v423), {
    at: './index.rsh:181:33:application',
    fs: ['at ./index.rsh:180:9:application call to [unknown function] (defined at: ./index.rsh:180:27:function exp)'],
    msg: 'seeFinalOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAEgCEgEAwIFCglQBgcmAwEAAAEBIjUAMRhBBgYpZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQgMQAOXSSUMQAIgSSEKDEABrEkhCQxAASUhCRJEIQk0ARJENARJIhJMNAISEUQoZCpkUEk1A0lKVwAgNf8kWzX+IQRbNf0hC1s1/Ek1BUkiWzX7JVs1+oAEk6X2PDT7FlA0+hZQsDT/MQASRDQDV1ggNPsWNPoWUAESRDT6IQU0A4F4WwkIIQYYNfk0/CEHEjX4NP0hBxI19zT5IQcSNfY0/CISNfU0/SISNfQ0+SISNfOAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI09TT0EDT0NPMQETT1NPMQEU2AEAAAAAAAAAACAAAAAAAAAAA0+DT3EDT3NPYQETT4NPYQEU018rEisgE08iJbNP4LsggjshA0/7IHs7EisgE08iVbNP4LsggjshA0A1coILIHs0IET0ghCjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8kWzX+VyggNf0hBFs1/CELWzX7V1ggNfpJNQUXNfmABGNXUVw0+RZQsDT9MQASRDT/NP4WUDT9UDT8FlA0+xZQNPpQNPkWUChLAVcAf2cqSwFXfwFnSCEJNQEyBjUCQgPrSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JFs1/lcoIDX9IQRbNfwhC1s1+0k1BTX6gAS/h11lNPpQsDT/MQASRDT/NP4WUDT9UDT8FlA0+xZQNPpQKEsBVwB4Z0ghCjUBMgY1AkIDfkkhDAxAAQZJIQ0MQACPSCENNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/lcoIDX9IQRbNfxJNQVJIls1+yVbNfqABIJre3Y0+xZQNPoWULA0/zEAEkQ0A1dQIDT7FjT6FlABEkQ0+iEFNAOBcFsJCCEGGDX5NP80/hZQNP1QNPwWUDT5FlAoSwFXAFhnSCU1ATIGNQJCAuFIIQw0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JFs1/lcoIDX9IQRbNfxXUCA1+0k1BRc1+oAEcO3vejT6FlCwNP0xABJENP80/hZQNP1QNPwWUDT7UDT6FlAoSwFXAHhnSCENNQEyBjUCQgJxSCEINAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/lcoIDX9IQRbNfxJNQU1+4AEzaboyzT7ULA0/zEAEkQ0/zT+FlA0/VA0/BZQNPtQKEsBVwBwZ0ghDDUBMgY1AkICDUkhBwxAAVZJIQYMQAD0SSEFDEAAh0ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yRbNf5XKCA1/Uk1BUkiWzX8JVs1+4AEEEatczT8FlA0+xZQsDT/MQASRDQDV0ggNPwWNPsWUAESRDT7IQU0A4FoWwkIIQYYNfo0/zT+FlA0/VA0+hZQKEsBVwBQZ0ghCDUBMgY1AkIBcUghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKCA1/VdIIDX8STUFFzX7gATUDGzWNPsWULA0/TEAEkQ0/zT+FlA0/VA0/FA0+xZQKEsBVwBwZ0ghBTUBMgY1AkIBC0ghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yRbNf5XKCA1/Uk1BTX8gASZv+WaNPxQsDT/MQASRDT/NP4WUDT9UDT8UChLAVcAaGdIIQY1ATIGNQJCALBJIwxAAEhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JFs1/oAEmouRdLA0/ogAuzT/NP4WUDEAUChLAVcASGdIIQc1ATIGNQJCAGJIgaCNBogAlyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iABxMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAcMRkhCBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v361",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v369",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v376",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v361",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v369",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v376",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002200380380620022008339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b611f5280620002ae6000396000f3fe6080604052600436106100bd5760003560e01c806345f7039611610079578063980b6eac11610056578063980b6eac14610184578063ab53f2c614610197578063ebdbfdcc146101ba578063f4cedab0146101cd57005b806345f7039614610149578063552d7b8e1461015c578063832307571461016f57005b806309687c88146100c65780631e93b0f1146100d957806328adf537146100fd57806329bdceb9146101105780632c10a15914610123578063422eb85c1461013657005b366100c457005b005b6100c46100d43660046118cf565b6101e0565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b6100c461010b366004611904565b61042f565b6100c461011e3660046118cf565b61087b565b6100c46101313660046118cf565b610a4c565b6100c4610144366004611904565b610bc7565b6100c46101573660046118cf565b610e1b565b6100c461016a3660046118cf565b610fa9565b34801561017b57600080fd5b506001546100ea565b6100c46101923660046118cf565b611169565b3480156101a357600080fd5b506101ac61133d565b6040516100f4929190611920565b6100c46101c8366004611904565b6113da565b6100c46101db3660046118cf565b6115f5565b6101f0600960005414602b6117b8565b61020a8135158061020357506001548235145b602c6117b8565b60008080556002805461021c9061197d565b80601f01602080910402602001604051908101604052809291908181526020018280546102489061197d565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad9190611a62565b90507fff3d454f6571b2b8fde3c8158eaa68ae1f803294ce0837fed155169daa443f8b33836040516102e0929190611a7e565b60405180910390a16102f4341560296117b8565b604081015161030f906001600160a01b03163314602a6117b8565b6103616040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081526080808b0151818b0190815260a0808d0151818d019081528e8a013560c0808f01918252600a6000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945194830194909452925191810191909152905160e0820152610100015b604051602081830303815290604052600290805190602001906104299291906117e1565b50505050565b61043f600a6000541460306117b8565b6104598135158061045257506001548235145b60316117b8565b60008080556002805461046b9061197d565b80601f01602080910402602001604051908101604052809291908181526020018280546104979061197d565b80156104e45780601f106104b9576101008083540402835291602001916104e4565b820191906000526020600020905b8154815290600101906020018083116104c757829003601f168201915b50505050508060200190518101906104fc9190611aa5565b9050610594604080516101608101825260008082526020808301829052828401829052606083018290526080830182905260a0830182905260c083018290528351808501855282815280820183905260e0840152835180850185528281528082018390526101008401528351808501855282815280820183905261012084015283518085019094528184528301529061014082015290565b7f3355ea27a9de0a9476dc454c9992d9c8728dffbd2709023aabe4dab2336b9a6a33846040516105c5929190611b43565b60405180910390a16105d93415602d6117b8565b81516105f1906001600160a01b03163314602e6117b8565b6040805161063d9161061791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602f6117b8565b60038260c0015160046106509190611b8a565b61065e906040860135611ba1565b6106689190611bb9565b808252608080840180516002908114602080870191825260608089018051851460408a0152848814918901919091529351159487019490945291511560a0860152921560c085015260e084018051600090819052905183018490526101008501805160019081905290518401526101208501805194909452925190910191909152516106f55760006106fb565b80604001515b61071957806040015161070f57600061071c565b806060015161071c565b60015b61073a57806020015161073057600061073d565b806060015161073d565b60015b6107b2578060800151610751576000610757565b8060a001515b610775578060a0015161076b576000610778565b8060c00151610778565b60015b61079657806080015161078c576000610799565b8060c00151610799565b60015b6107a8578061010001516107b9565b8060e001516107b9565b8061012001515b61014082018190528251602084015191516001600160a01b03909116916108fc916107e49190611bdb565b6040518115909202916000818181858888f1935050505015801561080c573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc8360200151836101400151602001516108379190611bdb565b6040518115909202916000818181858888f1935050505015801561085f573d6000803e3d6000fd5b506000808055600181905561087690600290611865565b505050565b61088b60086000541460276117b8565b6108a58135158061089e57506001548235145b60286117b8565b6000808055600280546108b79061197d565b80601f01602080910402602001604051908101604052809291908181526020018280546108e39061197d565b80156109305780601f1061090557610100808354040283529160200191610930565b820191906000526020600020905b81548152906001019060200180831161091357829003601f168201915b50505050508060200190518101906109489190611c84565b90507f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de8968338360405161097b929190611a7e565b60405180910390a161098f341560256117b8565b80516109a7906001600160a01b0316331460266117b8565b6109f26040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015190840152608080850151908401528481013560a0840152600960005543600155905161040591839101611ca0565b610a5c60016000541460096117b8565b610a7681351580610a6f57506001548235145b600a6117b8565b600080805560028054610a889061197d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab49061197d565b8015610b015780601f10610ad657610100808354040283529160200191610b01565b820191906000526020600020905b815481529060010190602001808311610ae457829003601f168201915b5050505050806020019051810190610b199190611cef565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610b4c929190611d54565b60405180910390a1610b658160200151341460086117b8565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184523383526002909555436001558751938401949094529051958201959095529351169083015290608001610405565b610bd760076000541460236117b8565b610bf181351580610bea57506001548235145b60246117b8565b600080805560028054610c039061197d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2f9061197d565b8015610c7c5780601f10610c5157610100808354040283529160200191610c7c565b820191906000526020600020905b815481529060010190602001808311610c5f57829003601f168201915b5050505050806020019051810190610c949190611a62565b9050610cac6040518060200160405280600081525090565b7f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa3384604051610cdd929190611b43565b60405180910390a1610cf1341560206117b8565b8151610d09906001600160a01b0316331460216117b8565b60408051610d5591610d2f91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83608001511460226117b8565b60038260a001516004610d689190611b8a565b610d76906040860135611ba1565b610d809190611bb9565b81526040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528a516001600160a01b0390811689528b8701519095528a89015190941690925288015190528551905260089091554360015591519091610df091839101611d91565b60405160208183030381529060405260029080519060200190610e149291906117e1565b5050505050565b610e2b600260005414600d6117b8565b610e4581351580610e3e57506001548235145b600e6117b8565b600080805560028054610e579061197d565b80601f0160208091040260200160405190810160405280929190818152602001828054610e839061197d565b8015610ed05780601f10610ea557610100808354040283529160200191610ed0565b820191906000526020600020905b815481529060010190602001808311610eb357829003601f168201915b5050505050806020019051810190610ee89190611dd4565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b83383604051610f1b929190611a7e565b60405180910390a1610f2f3415600b6117b8565b8051610f47906001600160a01b03163314600c6117b8565b60408051608081018252600080825260208083018281528385018381526060850184815287516001600160a01b039081168752888501519093528787015190921690528682013590526003909155436001559151909161040591839101611e47565b610fb9600560005414601a6117b8565b610fd381351580610fcc57506001548235145b601b6117b8565b600080805560028054610fe59061197d565b80601f01602080910402602001604051908101604052809291908181526020018280546110119061197d565b801561105e5780601f106110335761010080835404028352916020019161105e565b820191906000526020600020905b81548152906001019060200180831161104157829003601f168201915b50505050508060200190518101906110769190611f00565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516110a9929190611a7e565b60405180910390a16110bd341560186117b8565b80516110d5906001600160a01b0316331460196117b8565b6111196040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015190840152848101356080840152600660005543600155905161040591839101611d91565b611179600660005414601e6117b8565b6111938135158061118c57506001548235145b601f6117b8565b6000808055600280546111a59061197d565b80601f01602080910402602001604051908101604052809291908181526020018280546111d19061197d565b801561121e5780601f106111f35761010080835404028352916020019161121e565b820191906000526020600020905b81548152906001019060200180831161120157829003601f168201915b50505050508060200190518101906112369190611c84565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3383604051611269929190611a7e565b60405180910390a161127d3415601c6117b8565b6040810151611298906001600160a01b03163314601d6117b8565b6112e36040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015190840152608080850151908401528481013560a0840152600760005543600155905161040591839101611ca0565b6000606060005460028080546113529061197d565b80601f016020809104026020016040519081016040528092919081815260200182805461137e9061197d565b80156113cb5780601f106113a0576101008083540402835291602001916113cb565b820191906000526020600020905b8154815290600101906020018083116113ae57829003601f168201915b50505050509050915091509091565b6113ea60046000541460166117b8565b611404813515806113fd57506001548235145b60176117b8565b6000808055600280546114169061197d565b80601f01602080910402602001604051908101604052809291908181526020018280546114429061197d565b801561148f5780601f106114645761010080835404028352916020019161148f565b820191906000526020600020905b81548152906001019060200180831161147257829003601f168201915b50505050508060200190518101906114a79190611c84565b90506114bf6040518060200160405280600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516114f0929190611b43565b60405180910390a1611504341560136117b8565b815161151c906001600160a01b0316331460146117b8565b604080516115689161154291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83606001511460156117b8565b60038260800151600461157b9190611b8a565b611589906040860135611ba1565b6115939190611bb9565b815260408051608081018252600080825260208083018281528385018381526060850184815288516001600160a01b039081168752898501519093528887015190921690528551905260059091554360015591519091610df091839101611e47565b61160560036000541460116117b8565b61161f8135158061161857506001548235145b60126117b8565b6000808055600280546116319061197d565b80601f016020809104026020016040519081016040528092919081815260200182805461165d9061197d565b80156116aa5780601f1061167f576101008083540402835291602001916116aa565b820191906000526020600020905b81548152906001019060200180831161168d57829003601f168201915b50505050508060200190518101906116c29190611f00565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133836040516116f5929190611a7e565b60405180910390a16117093415600f6117b8565b6040810151611724906001600160a01b0316331460106117b8565b6117686040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015190840152848101356080840152600460005543600155905161040591839101611d91565b816117dd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546117ed9061197d565b90600052602060002090601f01602090048101928261180f5760008555611855565b82601f1061182857805160ff1916838001178555611855565b82800160010185558215611855579182015b8281111561185557825182559160200191906001019061183a565b506118619291506118a2565b5090565b5080546118719061197d565b6000825580601f10611881575050565b601f01602090049060005260206000209081019061189f91906118a2565b50565b5b8082111561186157600081556001016118a3565b6000604082840312156118c957600080fd5b50919050565b6000604082840312156118e157600080fd5b6118eb83836118b7565b9392505050565b6000606082840312156118c957600080fd5b60006060828403121561191657600080fd5b6118eb83836118f2565b82815260006020604081840152835180604085015260005b8181101561195457858101830151858201606001528201611938565b81811115611966576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061199157607f821691505b602082108114156118c957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146119c957600080fd5b919050565b600060c082840312156119e057600080fd5b60405160c0810181811067ffffffffffffffff82111715611a1157634e487b7160e01b600052604160045260246000fd5b604052905080611a20836119b2565b815260208301516020820152611a38604084016119b2565b6040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c08284031215611a7457600080fd5b6118eb83836119ce565b6001600160a01b0383168152606081016118eb602083018480358252602090810135910152565b600060e08284031215611ab757600080fd5b60405160e0810181811067ffffffffffffffff82111715611ae857634e487b7160e01b600052604160045260246000fd5b604052611af4836119b2565b815260208301516020820152611b0c604084016119b2565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152608081016118eb60208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082821015611b9c57611b9c611b74565b500390565b60008219821115611bb457611bb4611b74565b500190565b600082611bd657634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615611bf557611bf5611b74565b500290565b600060a08284031215611c0c57600080fd5b60405160a0810181811067ffffffffffffffff82111715611c3d57634e487b7160e01b600052604160045260246000fd5b604052905080611c4c836119b2565b815260208301516020820152611c64604084016119b2565b604082015260608301516060820152608083015160808201525092915050565b600060a08284031215611c9657600080fd5b6118eb8383611bfa565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c081015b92915050565b600060408284031215611d0157600080fd5b6040516040810181811067ffffffffffffffff82111715611d3257634e487b7160e01b600052604160045260246000fd5b604052611d3e836119b2565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611d8257600080fd5b80604085015250509392505050565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a08101611ce9565b600060608284031215611de657600080fd5b6040516060810181811067ffffffffffffffff82111715611e1757634e487b7160e01b600052604160045260246000fd5b604052611e23836119b2565b815260208301516020820152611e3b604084016119b2565b60408201529392505050565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060808301519082015260808101611ce9565b600060808284031215611e9257600080fd5b6040516080810181811067ffffffffffffffff82111715611ec357634e487b7160e01b600052604160045260246000fd5b604052905080611ed2836119b2565b815260208301516020820152611eea604084016119b2565b6040820152606083015160608201525092915050565b600060808284031215611f1257600080fd5b6118eb8383611e8056fea2646970667358221220af4cd841869b5f758be4c8013c77d9d316310fa07f4448fa03598d73eb3d7c3c64736f6c634300080c0033`,
  BytecodeLen: 8704,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:63:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:74:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:82:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:97:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:108:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:116:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:133:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:146:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:154:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:178:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
