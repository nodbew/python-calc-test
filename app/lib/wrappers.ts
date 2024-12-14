import { SetState } from '@/app/types/utils';
import * as lib from '@/app/implementations/lib';
import * as types from '@/app/implementations/types';
import * as wrapperTypes from '@/app/types/wrappers';


/* Generate callbacks to trigger changes over the states */
export function createCallbacks(setStates: {
    setCollection: SetState<types.Collection>,
    setProblem: SetState<types.Problem>,
    setResult: SetState<wrapperTypes.Result>,
    setUserAnswer: SetState<types.UserAnswer>,
}) {
    const { setCollection, setProblem, setResult, setUserAnswer } = setStates;

    /* Pick a problem from the collection */
    const proceed = (state: wrapperTypes.State) => {
        const newProblem = lib.generate(state);
        setProblem(newProblem);
        setResult(null);
        setUserAnswer(lib.getInitialUserAnswer);
    };

    /* Check the user's answer */
    const check = (state: wrapperTypes.State) => {
        const result = lib.check(state);
        setResult(result);
    };

    /* Modify the collection of problems */
    const modify = (state: wrapperTypes.State) => setCollection(lib.modify(state));

    /* Reflect user's input */
    const input = (newValue: types.UserAnswer) => setUserAnswer(newValue);

    return { proceed, check, modify, input };
}