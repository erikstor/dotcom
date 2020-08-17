import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import {WhatsApp} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: "#00e676",
        '&:hover': {
            backgroundColor: "#00c853",
        },
        color: "#fff"
    }
}));

export default function ButtonWpp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link target="_blank" href="https://wa.link/j5dc43">
                <Fab aria-label="whatsapp" className={classes.fab}>
                    <WhatsApp/>
                </Fab>
            </Link>
        </div>
    );
}