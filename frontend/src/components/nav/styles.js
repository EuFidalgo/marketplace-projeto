import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';


export const useStyles = makeStyles(() => ({

    buttonA: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        background: '#02080c',
        color: 'white',
    },
    menuA: {
        diplay: 'flex',
        flexDirection: 'column',
        width: 500,

    }
}))

export const navStyled = styled.div
    `@media(max-width: 768px) {
    .menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }
    .menu a {
        display: inline;
        padding: 10px;
        margin: 0px;
    }
    .menu {
        height: 100 %;
        justify -content: space-around;
    }

};`

