import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//Imagenes
import phpLogo from '../assest/img/phpLogo.png';
import nodeLogo from '../assest/img/nodejsLogo.png';
import laravelLogo from '../assest/img/laravelLogo.png';
import jQueryLogo from '../assest/img/jQueryLogo.png';
import mySqlLogo from '../assest/img/mySqlLogo.png';
import postgreSqlLogo from '../assest/img/postgreSqlLogo.png';
import html5Logo from '../assest/img/html5Logo.png';
import css3Logo from '../assest/img/css3Logo.png';
import javacriptLogo from '../assest/img/javacriptLogo.png';
import reactLogo from '../assest/img/reactLogo.png';
import angularLogo from '../assest/img/angularLogo.png';

import ProgessBar from "./ProgessBar";

const skills = [
    {
        nombre: "HTML 5",
        nivel: "Avanzado",
        img: html5Logo,
        estilos: "bg-naranja-progress",
        progreso: "80"
    },
    {
        nombre: "CSS 3",
        nivel: "Intermedio",
        img: css3Logo,
        estilos: "bg-azul-progress",
        progreso: "70"
    },
    {
        nombre: "JavaScript",
        nivel: "Avanzado",
        img: javacriptLogo,
        estilos: "bg-amarillo-progress",
        progreso: "80"
    },
    {
        nombre: "Php",
        nivel: "Avanzado",
        img: phpLogo,
        estilos: "bg-azul-progress",
        progreso: "80"
    },
    {
        nombre: "Node Js",
        nivel: "Intermedio",
        img: nodeLogo,
        estilos: "bg-verde-progress",
        progreso: "70"
    },
    {
        nombre: "MySql",
        nivel: "Intermedio",
        img: mySqlLogo,
        estilos: "bg-azul-progress",
        progreso: "70"
    },
    {
        nombre: "Postgres",
        nivel: "Intermedio",
        img: postgreSqlLogo,
        estilos: "bg-azul-progress",
        progreso: "70"
    },
    {
        nombre: "Laravel",
        nivel: "Intermedio",
        img: laravelLogo,
        estilos: "bg-naranja-progress",
        progreso: "70"
    },
    {
        nombre: "Jquery",
        nivel: "Avanzado",
        img: jQueryLogo,
        estilos: "bg-azul-progress",
        progreso: "80"
    },
    {
        nombre: "React JS",
        nivel: "Intermedio",
        img: reactLogo,
        estilos: "bg-azul-progress",
        progreso: "60"
    },
    {
        nombre: "Angular JS",
        nivel: "Intermedio",
        img: angularLogo,
        estilos: "bg-rojo-progress",
        progreso: "60"
    },
];


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: "contain",
    },
    cardContent: {
        flexGrow: 1,
    }
}));

export default function Skills() {
    const classes = useStyles();

    return (<React.Fragment>
            <Container
                className={classes.cardGrid}
                maxWidth="md"
            >
                { /* End hero unit */}
                <Grid
                    container
                    spacing={4}
                > {
                    skills.map((card) => (
                        <Grid
                            item key={card}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Card
                                className={classes.card}
                            >
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.img}
                                />
                                <CardContent
                                    className={classes.cardContent}
                                >

                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {card.nombre}
                                    </Typography>
                                    <ProgessBar className={card.estilos} value={card.progreso}/>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
                </Grid>
            </Container>
        </React.Fragment>
    );
}