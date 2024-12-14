import * as wrapperTypes from "@/app/types/wrappers";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';

export default function Problem(props: { state: wrapperTypes.State }) {
  const code = props.state.problem.problem;

  return (
    <Paper 
      sx={{
        width: '100%', 
        height: '60%',
        borderRadius: '5%',
        marginTop: '5%',
        marginBottom: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      elevation={6}
    >
      <Typography
        sx={{
          color: 'text.primary',
          textAlign: 'center',
          whiteSpace: 'pre-line',
        }}
      >
        { code }
      </Typography>
    </Paper>
  );
}
