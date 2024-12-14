/**
 * Declares functions and constants that a module should export. 
 */

import { ReactNode } from 'react';
import { Callbacks, RootComponentProps, State } from './wrappers';
import { Collection, Problem, UserAnswer } from '@/app/implementations/types';
import { Result } from './wrappers';
import { SetState } from './utils';


declare module '@/app/components/Submit' {
    export default function Submit(props: RootComponentProps): ReactNode;
}

declare module '@/app/components/Theme' {
    export default function Theme(props: { children: ReactNode }): ReactNode;
}

declare module '@/app/lib/wrappers' {
    export function createCallbacks(args: {
        setCollection: SetState<Collection>,
        setProblem: SetState<Problem>,
        setResult: SetState<Result>,
        setUserAnswer: SetState<UserAnswer>,
    }): Callbacks;
}

/* To be implemented part */
declare module '@/app/implementations/components/Problem' {
    export default function Problem(props: RootComponentProps): ReactNode;
}

declare module '@/app/implementations/components/UserAnswer' {
    export default function UserAnswer(props: RootComponentProps): ReactNode;
}

declare module '@/app/implementations/lib/index' {
    export function getInitialCollection(): Collection;
    export function getInitialProblem(): Problem;
    export function getInitialUserAnswer(): UserAnswer;
    export function generate(state: State): Problem;
    export function check(state: State): Result;
    export function modify(state: State): Collection;
}