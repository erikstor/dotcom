import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import MenuBook from '@material-ui/icons/MenuBook';
import Computer from '@material-ui/icons/Computer';
import EmojiObjects from '@material-ui/icons/EmojiObjects';

import menuIcon from '../assest/img/menu.png';
import Link from "@material-ui/core/Link";
import Logo from "../assest/img/logo.png";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const menu = [
    {
        text:"INICIO",
        icon: <Home />,
        action: "simple-tab-0"
    },
    {
        text:"HISTORIA",
        icon: <MenuBook />,
        action: "simple-tab-1"
    },
    {
        text:"HABILIDADES",
        icon: <Computer />,
        action: "simple-tab-2"
    },
    {
        text:"PROYECTOS",
        icon: <EmojiObjects />,
        action: "simple-tab-3"
    }
]



export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const navegate = id => {
        document.getElementById(id).click();
        document.getElementById('SwipeableDrawer').click();
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menu.map((current, index) => (
                    <ListItem button key={current.action} onClick={event => {
                        navegate(current.action)
                    }}>
                        <ListItemIcon>{current.icon}</ListItemIcon>
                        <ListItemText primary={current.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor} >
                    <div className="margin-logo position-logo">
                        <Link href="http://www.erikstor.com/">
                            <img className="logo-bar" src={Logo} alt=""/>
                        </Link>
                    </div>
                    <Button id="btnMenu" onClick={toggleDrawer(anchor, true)}>
                        <img src={menuIcon} className="size-img-menu"/>
                    </Button>
                    <SwipeableDrawer
                        id='SwipeableDrawer'
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onClick={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                       {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
