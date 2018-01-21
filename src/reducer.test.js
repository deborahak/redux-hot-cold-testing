import reducer from './reducer';
import {restartGame, makeGuess} from './actions';

describe('Reducer', () => {
	it('Should set the initial state when nothing is passed in', () => {
		const state = reducer(undefined, {type: 'undefined'});

		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
	});
});