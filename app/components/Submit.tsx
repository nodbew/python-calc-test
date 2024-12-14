import * as wrapperTypes from '@/app/types/wrappers';
import Button from '@mui/material/Button';


function SubmitButton(props: wrapperTypes.RootComponentProps) {
    const { state, callbacks } = props;
    
    return (
      <Button
        type='submit'
        variant='contained'
        onClick={ () => callbacks.check(state) }
      >
        答える
      </Button>
    )
}

function ProceedButton(props: wrapperTypes.RootComponentProps) {
    const { state, callbacks } = props;

    return (
      <Button 
        type='submit'
        variant='contained'
        onClick={ () => callbacks.proceed(state) }
      >
        次へ
      </Button>
    )
}

export default function Buttons(props: wrapperTypes.RootComponentProps) {
  return props.state.result === null ? <SubmitButton { ...props } /> : <ProceedButton { ...props } />;
} 