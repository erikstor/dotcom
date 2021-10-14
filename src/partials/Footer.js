import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import IconsFooter from "../components/IconsFooter";
import dotenv from 'dotenv'

dotenv.config()

function Copyright() {
    return ( 
        <Link   color = "inherit"
                href ={process.env.REACT_APP_DOMAIN}
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
                <div>
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
                </div>
                <div>
                    <IconsFooter />
                </div>
            </footer>
        </React.Fragment >
    );
}