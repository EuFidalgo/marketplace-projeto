import React from 'react';
import Header from '../header';
import useStyles from './styles';

const Main = (props) => {

const classes = useStyles();

    return (
    <React.Fragment>
        <Header {...props} />
        <main >
            <div className={classes.main}>
                {props.children}
            </div>
        </main>
    </React.Fragment> 
    )}

export default Main;