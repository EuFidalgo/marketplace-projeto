import React from 'react';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import purple from '@material-ui/core/colors/purple';

export const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = styles();
    return (
        <div className={classes.asideMenu}>
            <nav className={classes.menuA}>
                <Button className={classes.button} href='/' disableElevation> Home
            </Button>
                <Button className={classes.button} href='/cars' disableElevation onClick={handleClick}> Cars
                <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Button>
                <Button className={classes.button} href='/users' disableElevation> Users
            </Button>

            </nav >
        </div >
    )

};