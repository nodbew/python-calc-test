import * as types from '@/app/implementations/types';
import * as wrapperTypes from '@/app/types/wrappers';
import * as problem from './problem';


/* A mock state to satisfy argument types */
const mockState = {
    collection: null,
    problem: { problem: '', answer: 0 },
    result: null,
    userAnswer: 0,
};

/* A function that returns the initial value of the "collection" state */
export function getInitialCollection(): types.Collection {
    return null
}

/* A function that returns the initial value of the "problem" state */
export function getInitialProblem(): types.Problem {
    return generate(mockState);
}

/* A function that returns the initial value of the "userAnswer" state */
export function getInitialUserAnswer(): types.UserAnswer {
    return 0;
}

/* A function that returns a prbolem generated from the states */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function generate(_: wrapperTypes.State): types.Problem {
    return problem.generate();
}

/* A function that checks the user's answer */
export function check({ userAnswer, problem }: wrapperTypes.State): boolean {
    return userAnswer === problem.answer;
}

/* A function that modifies the "collection" state */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function modify(_: wrapperTypes.State): types.Collection {
    /* No impl */
    return null;
}