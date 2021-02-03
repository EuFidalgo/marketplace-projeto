import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles'

const navigation = () => {
    const classes = styles()
    return (
        <div className={classes.asideMenu}>
            <nav className={classes.menuA}>
                <Button href={'/'} icon color='primary'>
                    <i className={classes.button} ></i> Home
            </Button>
                <Link to='/models'>
                    <i className={classes.button} ></i> Models
            </Link>
                <Link to='/users'>
                    <i className={classes.button} ></i> Users
            </Link>

            </nav >
        </div >
    )
};

export default navigation;