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
import Link from '@material-ui/core/Link';

import ButtonWpp from "./ButtonWpp";
import Projects from './Projects';
import Skills from "../components/Skills";

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

    window.scroll({
        top: 0,
        left: 100,
        behavior: "auto"
    });

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
                        <Link href="http://www.erikstor.com/">
                            <img className="logo-bar" src={Logo} alt=""/>
                        </Link>
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
                                Hola!
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                color="textSecondary"
                                paragraph
                                className="text-primary"
                            >
                                Mi nombre es Erik Stor, bienvenidx a mi peque&ntilde;o espacio en la web.
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
                                            Con&oacute;ceme un poco!
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            className="bg-verde-radioactivo"
                                            onClick={event => {
                                                ir('simple-tab-2')
                                            }}

                                        >
                                            Mis habilidades
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </main>

            </TabPanel>
            <TabPanel value={value} index={1}>

                <div className="background-historia-main">

                </div>

                <div>
                    <p>Algo de mi historia…</p>
                    <p>
                        Nací en Dosquebradas, un pequeño municipio de Colombia, país donde actualmente habito. Es
                        curioso, ya que nunca viví allá, solamente nací, y antes de tener conciencia me mudé a Cali. Soy
                        desarrollador web fullstack y empecé en todo el mundo de la programación casi porque la vida me
                        obligó, así como en la película de
                        <Link
                            target="_blank"
                            href="https://www.google.com/search?gs_ssp=eJzj4tTP1TdIKskwNTFg9GJLLEssSSwCADYCBbY&q=avatar&oq=avata&aqs=chrome.1.0j46j69i57j46l3j0l2.1991j0j7&sourceid=chrome&ie=UTF-8"
                        >&nbsp;avatar&nbsp;
                        </Link>donde no eliges montura, la montura te elige a ti.
                    </p>
                </div>

                <div className="background-historia-1">

                </div>

                <div>
                    <p>
                        Empecé a estudiar en el Sena en el 2016 y debo de decir que mis instructores, más que simples
                        profesores, se convirtieron en amigos. Y es algo curioso, ya que puedo decir con orgullo que sin
                        importar con quienes trabaje o estudie, tarde o temprano terminan siendo más amigos que
                        compañeros y, en casos excepcionales, mentores.
                    </p>
                </div>

                <div className="background-historia-2">

                </div>

                <div>
                    <p>
                        Bueno en mis estudios aunque no era el más increíble de mis compañeros, siempre estuve entre los
                        más destacados y pude ser partícipe de un semillero de investigación SINCO e incluso ser ponente
                        regional del mismo.
                    </p>
                </div>

                <div className="background-historia-3">

                </div>

                <div>
                    <p>
                        Al finalizar mis estudios, trabajé para una de las agencias de entretenimiento para adultos más
                        grande de mi país (desarrollando páginas web claramente). Por cosas de la vida logré ingresar a
                        una multinacional, donde conocí personas fantásticas en su mayoría de las cuales pude aprender
                        muchísimo.
                    </p>
                    <p>
                        Actualmente, tengo 2 años desarrollando todo tipo de aplicaciones web y ahora quisiera
                        compartir lo que he aprendido en algún momento con un par de cursos explicando todo lo que se.
                    </p>
                </div>

                <div>
                    <p>
                        Así como todo el mundo, tengo mis aficiones, y la que más me apasiona a la fecha son las motos.
                        También me encanta la comida italiana y aprender constantemente. De hecho, actualmente me
                        encuentro aprendiendo nuevas tecnologías, librerías y frameworks (creo que es un poco evidente
                        por las fotos que he usado en esta página). Pero no está demás decir, que me encanta la
                        naturaleza.
                    </p>
                    <p>
                        Esta historia se sigue escribiendo y si quieres ser parte de ella puedes escribirme. En la
                        pestaña de contacto podrás encontrar links directos a mis redes sociales.
                    </p>
                </div>

            </TabPanel>
            <TabPanel value={value} index={2}>
                <Skills/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Projects/>
            </TabPanel>

            <ButtonWpp/>
        </div>
    );
}