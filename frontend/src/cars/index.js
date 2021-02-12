import React from 'react';
import { styles } from './styles';

const cars = () => {

    const classes = styles()

    return (
        <div className={classes.carsPage}>
            Carros
        </div>
    )
}

export default cars;