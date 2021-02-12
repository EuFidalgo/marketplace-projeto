import useStyles from './styles';
import logo from '../../assets/img/mercedes-amg-f1-logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <div>
        <nav className={classes.navButtons}></nav>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
      </div>
      <hr></hr>
      <div className={classes.topBar}>
        <Button>
          <SearchIcon className={classes.SearchIcon} color="inherit" />
        </Button>
        <Button>
          <AccountCircle className={classes.circleUser} />
        </Button>
      </div>
    </div>
  );
};

export default Logo;
