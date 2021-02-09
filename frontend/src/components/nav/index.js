import React from 'react';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export const Navigation = () => {
    
    const classes = styles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.buttonA}>
            <Button href="/" className={classes.buttonA} > Home </Button>
            <Button className={classes.buttonA} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                Vehicles
        </Button>
            <Menu
                className={classes.menuA}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Cars</MenuItem>
                <MenuItem onClick={handleClose}>Trucks</MenuItem>
            </Menu>
        <Button className={classes.buttonA} href='/users' > Users </Button> 
        </div>
    );
}