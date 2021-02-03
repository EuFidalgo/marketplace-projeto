import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    fixarRodape: {
        background: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 80,
        position: 'initial' ,
        width: '100%',
        
    },
    root: {
        alignItems: 'center',
        flex: 1,
        display: 'flex',
        color: 'white',
        marginRight: 15
    },
    typography: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 25
    }
}));

export default styles;