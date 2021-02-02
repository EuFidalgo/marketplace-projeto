import useStyles from './styles';
import React from 'react';
import styles from './styles';


const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.fixarRodape}>
            <div className={classes.root}>
                <h1 className={classes.typography}>Mercedes-Benz®</h1>
            </div>
        </div>
    )
}

export default Footer;