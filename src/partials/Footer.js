import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return ( 
        <Link   color = "inherit"
                href = "https://erikstor.com/" 
        >
            <Typography variant = "body2"
                        color = "textSecondary"
                        align = "center" 
            > 
                Copyright © Erik Stor  { new Date().getFullYear() }
            </Typography >
        </Link> 
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return ( 
        <React.Fragment> 
            <footer className = { classes.footer } >
                <Typography variant = "h6"
                            align = "center"
                            gutterBottom 
                >
                </Typography> 
                <Typography variant = "subtitle1"
                            align = "center"
                            color = "textSecondary"
                            component = "p" 
                >
                </Typography> 
            <Copyright />
            </footer>
        </React.Fragment >
    );
}