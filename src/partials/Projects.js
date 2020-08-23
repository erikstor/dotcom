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
        backgroundSize: 'contain'
    },
    cardContent: {
        flexGrow: 1,
    },
    marginTitleWarning: {
        marginBottom: "1em"
    }
}));


const cards = [
    {
        "descripcion": "GFiles se trataba de un gestor documental “Todo en uno”, en donde una entidad podía gestionar de una forma ultra eficiente todos los documentos que manejase.",
        "dominio": "https://www.gfiles.co/",
        "nombre": "Gfiles - Solución cloud para gestión documental"
    },
    {
        "descripcion": "Nexura Cloud Platform es una solución web personalizable de acuerdo a las necesidades de cada entidad, que ayuda a implementar estrategias de gobierno digital y administrar de forma centralizada múltiples dependencias, secretarías o entidades conexas.",
        "dominio": "https://www.nexura.com/publicaciones/129392/nexura-cloud-platform/",
        "nombre": "Nexura Platform"
    },
    {
        "descripcion": "WebCam – Boutique, era una pagina web que funcionaba como tienda virtual, para las modelos de la agencia para la que trabajaba en esos tiempos.",
        "dominio": "https://www.webcamboutique.com/",
        "nombre": "WebCam - Boutique"
    },
    {
        "descripcion": "Este fue uno de mis primeros proyectos, a pesar de ser una página web, al ser casi la primera que publiqué con éxito, le tengo un cariño especial.",
        "dominio": "https://www.trendstudios.co/",
        "nombre": "Trend Studios"
    },
    {
        "descripcion": "Durante mis prácticas profesionales, tuve la oportunidad de ingresar a una institución educativa, supremamente reconocida en mi ciudad, para la cual pude desarrollar un sistema de elección del personero",
        "dominio": "https://colegiosarquidiocesanos.edu.co/web/",
        "nombre": "Sistema de elección del personero"
    },
    {
        "descripcion": "Durante mis prácticas profesionales, tuve la oportunidad de ingresar a una institución educativa, supremamente reconocida en mi ciudad, para la cual pude desarrollar un sistema de inventario de préstamos",
        "dominio": "https://colegiosarquidiocesanos.edu.co/web/",
        "nombre": "Sistema de inventario de préstamos"
    },
    {
        "descripcion": "Con Process plus, se busca gestionar la información de todo lo que tenia que ver de forma interna y externa a la entidad. Lastimosamente no tienen  páginas del producto por alguna razón aparente, así que te dejo el resultado en páginas amarillas.",
        "dominio": "https://www.paginasamarillas.com.co/empresas/process-plus-comercializadora-sas/bogota-32478502",
        "nombre": "Process Pluss"
    }
];

function viewProject(url) {
    window.open(url);
}

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
                        Advertencia: el contenido de estas p&aacute;ginas puede variar ya que no es de mi propiedad y se
                        presenta solo de manera informativa.
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
                                    image={gfilesLogo}
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
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => {
                                            viewProject(card.dominio);
                                        }}
                                    >
                                        Ver m&aacute;s...
                                    </Button>
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