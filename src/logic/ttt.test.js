const turn = require("./ttt.js");

test("should switch player", () =>{
	expect(turn.playerTurn("X")).toBe("O");
	
});

/* This test was a beginner test and is now outdated since we changed the logic of this function
test("should return error if it's other than x or o", () =>{
	expect(turn.playerTurn("b")).toBe("X and O only");
});
*/
/*
test("initializeBoard()", () => {
	expect(turn.initializeBoard()).toEqual(['.', '.', '.', '.', '.', '.', '.', '.', '.']);
});
*/
/* These tests were beginner tests and are now outdated since we changed the logic of these functions
test("pickSquare() turn 1", () => {
	expect(turn.pickSquare(1, 'X')).toEqual(['X', '.', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 2", () => {
	expect(turn.pickSquare(2, 'O')).toEqual(['X', 'O', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 3", () => {
	expect(turn.pickSquare(3, 'O')).toEqual(['X', 'O', 'O', '.', '.', '.', '.', '.', '.']);
});
*/
/*
test("pickSquare() turn 1", () => {
	expect(turn.pickSquare(0, 'X')).toEqual(['X', '.', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 2", () => {
	expect(turn.pickSquare(1, 'O')).toEqual(['X', 'O', '.', '.', '.', '.', '.', '.', '.']);
});

test("pickSquare() turn 3", () => {
	expect(turn.pickSquare(2, 'O')).toEqual(['X', 'O', 'O', '.', '.', '.', '.', '.', '.']);
});
*/
test("checkWinner() turn 1", () => { 
	turn.pickSquare(2, 'O');
	expect(turn.checkWinner()).toEqual(null);
});
test("checkWinner() turn 2", () => { 
	turn.pickSquare(4, 'O');
	expect(turn.checkWinner()).toEqual(null);
});
test("checkWinner() turn 3", () => { 
	turn.pickSquare(6, 'O');
	expect(turn.checkWinner()).toEqual('O');
});
