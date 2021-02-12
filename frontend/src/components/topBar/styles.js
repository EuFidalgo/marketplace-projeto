import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    background: '#02080c',
    display: 'flex',
    alignItems: 'flex-start',
    height: 60,
    position: 'aboslute',
    
  },
  circleUser: {
    display: 'flex',
    color: 'white',
  },

  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    background: '#02080c',
  },
  SearchIcon: {
    display: 'flex',
    color: 'white',
  }

}));

export default useStyles;
