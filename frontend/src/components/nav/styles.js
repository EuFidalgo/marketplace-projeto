import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';


export const styles = makeStyles(() => ({
    asideMenu: {
        backgroundColor: 'black',
        boxShadow: "2 0px 10 0px rgba(0, 0, 0, 0.12) 2 0px 4 0px rgba(0, 0, 0, 2)"
    },

    menuA: {
        display: 'block',
        textDecoration: 'none',
        color: 'rgba(255, 255, 255, 0.892)',
        fontWeight: 300,
        padding: 10,
        transitionComponent: 'cubicBezier(0.19, 1, 0.22, 1)',
        // cursor: ''

    },

    Button: {
        backgroundImage: 'url(../../assets/img/mbfront3.png)',
        padding: '40 10px 20px',
        width: '100%'
    },

    /*menuB: {
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.892);
    font-weight: 300;
    padding: 10px;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    cursor:pointer;
    }

    menuBHover {
    background-image: url(../../assets/img/mbfront3-1.png);
    padding: 40px 10px 20px;
    width: 100%;
    }

    menuC:{
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.892);
    font-weight: 300;
    padding: 10px;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    cursor:pointer;
    }

    menuCHover: {
    background-image: url(../../assets/img/mbfront4-3.png);
    padding: 40px 10px 20px;
    width: 100%;
    }, */
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

