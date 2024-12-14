import { SetStateAction, Dispatch } from 'react';


export type SetState<T> = Dispatch<SetStateAction<T>>;