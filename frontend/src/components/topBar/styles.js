import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    background: '#02080c',
    display: 'flex',
    alignItems: 'flex-start',
    height: 60,
    
  },
  circle: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white',
  },

  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    background: '#02080c',
  },
}));

export default useStyles;
