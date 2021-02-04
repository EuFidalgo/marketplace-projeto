import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';


export const styles = makeStyles(() => ({

    asideMenu: {
        // backgroundColor: 'green',
        boxShadow: "2 0px 10 0px rgba(0, 0, 0, 0.12) 2 0px 4 0px rgba(0, 0, 0, 2)"
    },

    menuA: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: 30,
        // backgroundColor: 'rgba(0, 0, 0, 0.850)',
        // backgroundImage: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNWFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtlmStsd2sDcUfpLNXGEuiYJ0l3ItOB2NQnbApjIbI5uVKMQC30MQkzNB%25Km7jAOShKViSF%25vq4BTyLRgO6YaxPbErH1yJRn8wY8WoiZr7YM4FnmwTg95v36PDCcpSeWznStsd8hQcUfiUNXGE4TXJ0lg6ZOB2PbnbAp7ioI5uKMTQmIJwF1kX6PDGmhSc63ZstXSBPycUf8McXGEH9NJ0lUIrOB2GW2bAp5tRI5uCc2QC3zkpkzNtTNm7sDgubYwR9hDs%25HrjBj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE140,DZO&im=Crop,rect=(290,250,1280,580);Resize,width=300'
    },
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

