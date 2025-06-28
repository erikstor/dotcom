'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme
} from '@mui/material';

export default function HistorySection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        minHeight: 'calc(100vh - 200px)'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            height: 300,
            borderRadius: 3,
            overflow: 'hidden',
            mb: 6,
            backgroundImage: 'url(/assets/img/bannerHistoria.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: '0 15%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              transform: 'scale(1.02) translate(0%, 0%)',
              boxShadow: '0 5px 12px rgba(0,0,0,0.5)'

            },
            transition: 'all 0.3s ease',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              '&:hover': {
                transform: 'scale(1.05) translate(0%, 0%)',
              },
            }}
          />
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 700,
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            <strong>Mi Historia</strong>
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: 'background.paper',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  transform: 'scale(1.05) translate(0%, 0%)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 3
                }}
              >
                Algo de mi historia...
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: 'text.primary',
                  mb: 3,
                  fontSize: '1.1rem'
                }}
              >
                Nací en Dosquebradas, un pequeño municipio de Colombia, país donde actualmente habito.
                Es curioso, ya que nunca viví allá, solamente nací, y antes de tener conciencia me mudé a Cali.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: 'text.primary',
                  mb: 3,
                  fontSize: '1.1rem'
                }}
              >
                Soy desarrollador web backend y empecé en todo el mundo de la programación casi porque
                la vida me obligó, así como en la película de{' '}
                <Typography
                  component="a"
                  href="https://www.google.com/search?q=avatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Avatar
                </Typography>
                {' '}donde no eliges montura, la montura te elige a ti.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: 'text.primary',
                  fontSize: '1.1rem'
                }}
              >
                Mi viaje en el desarrollo web comenzó como una necesidad, pero rápidamente se convirtió
                en una pasión. Cada proyecto es una oportunidad para aprender algo nuevo y mejorar mis habilidades.
                Como este que fue desarrollado casi todo utilizando técnicas de <strong>Prompt Engineer</strong>.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {/* Experience Cards */}
              <Card
                elevation={0}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'scale(1.05) translate(0%, 0%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    Experiencia
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Más de 5 años desarrollando aplicaciones web modernas y escalables.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                elevation={0}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'scale(1.05) translate(0%, 0%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    Enfoque
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Desarrollo de soluciones complejas enfocadas en la lógica de negocio (backend).
                  </Typography>
                </CardContent>
              </Card>

              <Card
                elevation={0}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'scale(1.05) translate(0%, 0%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    Ubicación
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Cali, Colombia - Trabajando de forma remota para clientes internacionales.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  height: 200,
                  borderRadius: 2,
                  backgroundImage: 'url(/assets/img/bannerHistoria_1.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    transform: 'scale(1.05) translate(0%, -5%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  height: 200,
                  borderRadius: 2,
                  backgroundImage: 'url(/assets/img/sinco.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    transform: 'scale(1.05) translate(0%, -5%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  height: 200,
                  borderRadius: 2,
                  backgroundImage: 'url(/assets/img/teamNexura.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    transform: 'scale(1.05) translate(0%, -5%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 