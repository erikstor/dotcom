'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme
} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import CodeIcon from '@mui/icons-material/Code';
import UpdateIcon from '@mui/icons-material/Update';

export default function ProjectsSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          {/* Icono de construcción */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '50%',
                backgroundColor: theme.palette.primary.light,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 120,
                height: 120
              }}
            >
              <ConstructionIcon
                sx={{
                  fontSize: 60,
                  color: 'white'
                }}
              />
            </Paper>
          </Box>

          {/* Título principal */}
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 3
            }}
          >
            Sección en Construcción
          </Typography>

          {/* Descripción */}
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            Estamos actualizando nuestro portafolio de proyectos con trabajos más recientes y relevantes.
          </Typography>

          {/* Información adicional */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              maxWidth: 800,
              mx: 'auto',
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 3
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 3,
                mb: 4
              }}
            >
              {/* Proyectos recientes */}
              <Box sx={{ textAlign: 'center' }}>
                <CodeIcon
                  sx={{
                    fontSize: 40,
                    color: theme.palette.primary.main,
                    mb: 2
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1
                  }}
                >
                  Proyectos Recientes
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Aplicaciones web modernas desarrolladas con tecnologías actuales
                </Typography>
              </Box>

              {/* Experiencia profesional */}
              <Box sx={{ textAlign: 'center' }}>
                <UpdateIcon
                  sx={{
                    fontSize: 40,
                    color: theme.palette.secondary.main,
                    mb: 2
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1
                  }}
                >
                  Experiencia Profesional
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Proyectos empresariales y colaboraciones con clientes internacionales
                </Typography>
              </Box>

              {/* Tecnologías modernas */}
              <Box sx={{ textAlign: 'center' }}>
                <ConstructionIcon
                  sx={{
                    fontSize: 40,
                    color: theme.palette.primary.main,
                    mb: 2
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1
                  }}
                >
                  Tecnologías Modernas
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Next.js, React, Node.js, TypeScript y más tecnologías actuales
                </Typography>
              </Box>
            </Box>

            {/* Mensaje de contacto */}
            <Box
              sx={{
                p: 3,
                backgroundColor: theme.palette.primary.light,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  mb: 1
                }}
              >
                ¿Interesado en ver mi trabajo más reciente?
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.9)'
                }}
              >
                Puedes contactarme directamente para conocer más sobre mis proyectos actuales
              </Typography>
            </Box>
          </Paper>

          {/* Información de contacto */}
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Mientras tanto, puedes explorar mis habilidades técnicas en la sección anterior 
              o contactarme directamente para discutir oportunidades de colaboración.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 