import * as types from '@/app/implementations/types';

export type Result = boolean | null;

export interface State {
    collection: types.Collection,
    problem: types.Problem,
    result: Result,
    userAnswer: types.UserAnswer,
}

export interface Callbacks {
    proceed: (state: State) => void,
    check: (state: State) => void,
    modify: (state: State) => void,
    input: (state: types.UserAnswer) => void,
}

export type RootComponentProps = {
    state: State,
    callbacks: Callbacks,
}