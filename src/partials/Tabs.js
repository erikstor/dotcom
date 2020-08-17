import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Projects from './Projects';

/*
css e imagenes
 */

import '../assest/css/main.css'
import Logo from '../assest/img/logo.png'

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    }
}));


function ir(id) {
    document.getElementById(id).click();
}

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tab1 = "Inicio"
    const tab2 = "Historia"
    const tab3 = "Habilidades"
    const tab4 = "Proyectos"

    return (
        <div className={classes.root}>
            <AppBar position="sticky" className="bg-app-bar">
                <Toolbar>
                    <div className="margin-logo">
                        <img className="logo-bar" src={Logo} alt=""/>
                    </div>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label={tab1} {...a11yProps(0)} />
                        <Tab label={tab2} {...a11yProps(1)} />
                        <Tab label={tab3} {...a11yProps(2)} />
                        <Tab label={tab4} {...a11yProps(3)} />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
                <main className="text-primary">
                    <div className="backgroundIndex">

                    </div>
                    <div
                        className="contenedorBienvenida flex-column-center"
                    >
                        <Container
                            maxWidth="sm"
                        >
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                gutterBottom
                                className="text-primary"
                            >
                                Erik Stor
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                color="textSecondary"
                                paragraph
                                className="text-primary"
                            >
                                Hola, bienvenidx a mi peque&ntilde;o espacio en la web.
                            </Typography>
                            <div
                                className={classes.heroButtons}
                            >
                                <Grid
                                    container
                                    spacing={2}
                                    justify="center"
                                >
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            className="bg-verde-radioactivo"
                                            onClick={event => {
                                                ir('simple-tab-1')
                                            }}

                                        >
                                            Conocem&eacute; un poco!
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </main>

            </TabPanel>
            <TabPanel value={value} index={1}>

            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Projects/>
            </TabPanel>
        </div>
    );
}