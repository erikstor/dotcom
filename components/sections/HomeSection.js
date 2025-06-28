'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme
} from '@mui/material';

export default function HomeSection({ onNavigate }) {
  const theme = useTheme();

  const handleNavigation = (tabIndex) => {
    onNavigate(tabIndex);
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 200px)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%,rgb(134, 142, 156) 100%)',
        overflow: 'hidden',
        padding: '10vw 0 10vw 0'
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'url(/assets/img/index.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Content */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
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
                component="h1"
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3
                }}
              >
                ¡Hola!
              </Typography>

              <Typography
                variant="h5"
                color="text.primary"
                paragraph
                sx={{
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                Mi nombre es <strong>Erik Stor</strong>, bienvenido a mi espacio profesional en la web.
              </Typography>

              <Typography
                variant="body1"
                color="text.primary"
                paragraph
                sx={{
                  mb: 4,
                  lineHeight: 1.7
                }}
              >
                Soy desarrollador web backend con experiencia en tecnologías modernas.
                Me apasiona crear soluciones digitales innovadoras y eficientes.
              </Typography>

              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => handleNavigation(1)}
                    sx={{
                      px: 4,
                      py: 1.5,
                      backgroundColor: '#875491',
                      '&:hover': {
                        backgroundColor: '#623d69',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Conóceme un poco
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => handleNavigation(2)}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: '#623d69',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Mis habilidades
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Image/Visual Element */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'scale(1.05) translate(0%, 0%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{ mb: 2 }}
                >
                  <strong>Tecnologías que he utilizado</strong>
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 2,
                    maxWidth: 300
                  }}
                >
                  {['Node.js', 'TypeScript', 'Python', 'GoLang', 'SQL', 'NoSQL', 'DevOps', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git'].map((tech) => (
                    <Box
                      key={tech}
                      sx={{
                        p: 1,
                        backgroundColor: 'background.paper',
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'text.primary',
                        '&:hover': {
                          backgroundColor: '#623d69',
                          color: 'white',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 