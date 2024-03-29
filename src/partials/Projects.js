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

import gfilesLogo from '../assest/img/gfiles.png';
import nxPlatformLogo from '../assest/img/nxPlatform.png';
import webCamBoutiqueLogo from '../assest/img/webCamBoutique.png';
import trendStudiosLogo from '../assest/img/trendStudios.png';
import processPlusLogo from '../assest/img/processPlusLogo.png';
import SIHLogo from '../assest/img/SIHLogo.png';
import angularLogo from '../assest/img/angularLogo.png';
import wihomLogo from '../assest/img/logo-wihom.png';
import sincronLogo from '../assest/img/sincron_logo.png';
import starSolutionsLogo from '../assest/img/logo_star_solutions.png';
import ceaWebSystemLogo from '../assest/img/ceawebsystem_logo.png';

import Link from "@material-ui/core/Link";

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
        backgroundSize: 'contain',
        margin: '20px'
    },
    cardContent: {
        flexGrow: 1,
    },
    marginTitleWarning: {
        marginBottom: "1em"
    }
}));


// http://www.webksi.com/


const cards = [
    {
        "nombre": "Sistema de elección del personero",
        "descripcion": "Durante mis prácticas profesionales, tuve la oportunidad de ingresar a una institución educativa, supremamente reconocida en mi ciudad, para la cual pude desarrollar un sistema de elección del personero",
        "dominio": "https://colegiosarquidiocesanos.edu.co/web/",
        "image": SIHLogo

    },
    {
        "nombre": "Sistema de inventario de préstamos",
        "descripcion": "Durante mis prácticas profesionales, tuve la oportunidad de ingresar a una institución educativa, supremamente reconocida en mi ciudad, para la cual pude desarrollar un sistema de inventario de préstamos",
        "dominio": "https://colegiosarquidiocesanos.edu.co/web/",
        "image": SIHLogo

    },
    {
        "nombre": "WebCam - Boutique",
        "descripcion": "WebCam – Boutique, era una pagina web que funcionaba como tienda virtual, para las modelos de la agencia para la que trabajaba en esos tiempos.",
        "dominio": "https://www.webcamboutique.com/",
        "image": webCamBoutiqueLogo

    },
    {
        "nombre": "Trend Studios",
        "descripcion": "Este fue uno de mis primeros proyectos, a pesar de ser una página web sencilla, al ser casi la primera que publiqué con éxito, le tengo un cariño especial.",
        "dominio": "https://www.trendstudios.co/",
        "image": trendStudiosLogo

    },
    {
        "nombre": "Gfiles - Solución cloud para gestión documental",
        "descripcion": "GFiles se trataba de un gestor documental “Todo en uno”, en donde una entidad podía gestionar de una forma ultra eficiente todos los documentos que manejase.",
        "dominio": "https://www.gfiles.co/",
        "image": gfilesLogo

    },
    {
        "nombre": "Nexura Platform",
        "descripcion": "Nexura Cloud Platform es una solución web personalizable de acuerdo a las necesidades de cada entidad, que ayuda a implementar estrategias de gobierno digital y administrar de forma centralizada múltiples dependencias, secretarías o entidades conexas.",
        "dominio": "https://www.nexura.com/publicaciones/129392/nexura-cloud-platform/",
        "image": nxPlatformLogo

    },
    {
        "nombre": "Process Pluss",
        "descripcion": "Con Process plus, se busca gestionar la información de todo lo que tenia que ver de forma interna y externa a la entidad. Lastimosamente no tienen  páginas del producto por alguna razón aparente, así que te dejo el resultado en páginas amarillas.",
        "dominio": "https://www.paginasamarillas.com.co/empresas/process-plus-comercializadora-sas/bogota-32478502",
        "image": processPlusLogo

    },
    {
        "nombre": "Portafolio de productos en angular",
        "descripcion": "Este portafolio es especial para mí, ya que gracias al profesor que impartió el curso, me decidí a iniciar la página web en la que te encuentras en este momento.",
        "dominio": "https://github.com/erikstor/PortafolioDeProductosAngular",
        "image": angularLogo
    },
    {
        "nombre": "Sincron SMES",
        "descripcion": "El Sistema de Ejecución de Manufactura ( Sistema MES ) Manufacturing Execution System es una solución 100% Web que permite una total transformación digital al monitorear el proceso, buscando optimizar y reducir costos que mejoren la productividad y rentabilidad de su empresa.",
        "dominio": "https://www.sincron.co/",
        "image": sincronLogo
    },
    {
        "nombre": "Soluciones Start",
        "descripcion": "En esta empresa tuve la oportunidad de desarrollar todo tipo de proyectos entre ellos un sistema de solucitudes para el soporte técnico de celulares y una aplicación móvil para la reservación de citas en la peluqueria",
        "dominio": "https://solucionesstar.com/",
        "image": starSolutionsLogo
    },
    {
        "nombre": "CeaWebSystems ",
        "descripcion": "Ellos fueron mi primer cliente mayoritariamente anglosajon donde pude realizar un par de proyectos web que por las clausulas de confidencialidad no puedo mencionar, fue interesante trabajar con personas de diferentes nacionalidades y multilenguajes",
        "dominio": "https://ceawebsystems.com/",
        "image": ceaWebSystemLogo
    },
    {
        "nombre": "WiHom",
        "descripcion": "La plataforma que esta ayudando a los administradores de propiedades horizonales a realizar su labor siendo mucho más eficientes",
        "dominio": "https://wihom.com.co/",
        "image": wihomLogo
    }
];

export default function Projects() {
    const classes = useStyles();

    return (<React.Fragment>
            <Container
                className={classes.cardGrid}
                maxWidth="md"
            >

                <Grid container xs={12} className={classes.marginTitleWarning}>
                    <Typography
                        gutterBottom
                    >
                        Advertencia: el contenido de estas p&aacute;ginas puede variar ya que no son de mi propiedad.
                        Se
                        presentan solo de modo informativo.
                    </Typography>
                </Grid>


                <Grid
                    container
                    spacing={4}
                > {
                    cards.map((card) => (
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
                                    image={card.image}
                                    title={card.nombre}
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
                                    <Typography>
                                        {card.descripcion}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link color="inherit"
                                          target="_blank"
                                          href={card.dominio}
                                    >
                                        <Button
                                            size="small"
                                            color="primary"
                                        >
                                            Ver m&aacute;s...
                                        </Button>
                                    </Link>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
                </Grid>
            </Container>
        </React.Fragment>
    );
}