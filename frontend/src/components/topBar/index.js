import useStyles from './styles';
import logo from '../../assets/img/mercedes-amg-f1-logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.topBar} >
      <div>
        <nav className={classes.navButtons}></nav>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
      </div>
      <hr></hr>
      <Button>
        <AccountCircle className={classes.circle} />
      </Button>
    </div>
  );
};

export default Logo;
