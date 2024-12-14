import * as wrapperTypes from '@/app/types/wrappers';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


export default function UserAnswer(props: wrapperTypes.RootComponentProps) {
    const { state, callbacks } = props;
    const theme = useTheme();
    return (
      <Stack direction='column' style={{ width: '100%', marginBottom: '5%' }}>
        <NumberInput
          slotProps={{
            input: { 
              style: {
                color: state.result === null 
                  ? theme.palette.text.primary 
                  : state.result
                    ? theme.palette.success.main
                    : theme.palette.error.main,
                width: '100%',
                textAlign: 'center',
              },
              disabled: state.result !== null,
            },
          }}
          style={{ width: '100%', textAlign: 'center' }}
          placeholder='解答...'
          value={ state.userAnswer }
          onChange={ (_: unknown, v: number | null) => callbacks.input(v ?? 0) }
        />
        { state.result !== null && (
          <Typography style={{ height: '10%', textAlign: 'center' }}>
            { `正解は${ state.problem.answer }` }
          </Typography>
        )}
      </Stack>
    )
}