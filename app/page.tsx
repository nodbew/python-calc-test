'use client';

/* Types and logics */
import * as types from '@/app/implementations/types';
import * as lib from '@/app/implementations/lib';
import * as wrappers from '@/app/lib/wrappers';
import * as wrapperTypes from '@/app/types/wrappers';

/* Components */
import Theme from '@/app/components/Theme';
import Problem from '@/app/implementations/components/Problem';
import UserAnswer from '@/app/implementations/components/UserAnswer';
import Submit from '@/app/components/Submit';
import Stack from '@mui/material/Stack';

/* Hooks */
import { useState, useMemo } from 'react';


export default function App() {
  /* Global states */
  const [collection, setCollection] = useState<types.Collection>(lib.getInitialCollection());
  const [problem, setProblem] = useState<types.Problem>(lib.getInitialProblem());
  const [result, setResult] = useState<wrapperTypes.Result>(null);
  const [userAnswer, setUserAnswer] = useState<types.UserAnswer>(lib.getInitialUserAnswer());

  /* An object that represents the current state */
  const state: wrapperTypes.State = {
    collection,
    problem,
    result,
    userAnswer,
  };

  /* Callbacks to trigger changes */
  const callbacks = useMemo(
    () => wrappers.createCallbacks({
      setCollection,
      setProblem,
      setResult,
      setUserAnswer,
    }),
    [ setCollection, setProblem, setResult, setUserAnswer ],
  );

  const args = {
    state,
    callbacks,
  }

  return (
    <Theme>
      <Stack 
        sx={{
          width: '75vw',
          height: '90vh',
        }}
        direction='column'
      >
        <Problem { ...args } />
        <UserAnswer { ...args } />
        <Submit { ...args } />
      </Stack>
    </Theme>
  )
}