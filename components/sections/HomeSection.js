'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { getImagePath } from '../../utils/paths';
import AnimatedCard from '../AnimatedCard';
import AnimatedIcon from '../AnimatedIcon';

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
        backgroundImage: `url(${getImagePath('/assets/img/index.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        padding: '10vw 0 10vw 0',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%)',
          zIndex: 0
        }
      }}
    >

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Content */}
          <Grid item xs={12} md={6}>
            <AnimatedCard delay={0.2} sx={{ p: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                    mb: 3,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  ¡Hola!
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Typography
                  variant="h5"
                  color="white"
                  paragraph
                  sx={{
                    mb: 4,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  Mi nombre es <strong>Erik Stor</strong>, bienvenido a mi espacio profesional en la web.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  paragraph
                  sx={{
                    mb: 4,
                    lineHeight: 1.7,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  Soy desarrollador web backend con experiencia en tecnologías modernas.
                  Me apasiona crear soluciones digitales innovadoras y eficientes.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => handleNavigation(1)}
                        sx={{
                          px: 4,
                          py: 1.5,
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          backdropFilter: 'blur(15px)',
                          border: '1px solid rgba(255, 255, 255, 0.35)',
                          color: 'white',
                          fontWeight: 600,
                          borderRadius: 2,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.35)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.25)'
                          },
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        Conóceme un poco
                      </Button>
                    </motion.div>
                  </Grid>
                  <Grid item>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Button
                        variant="outlined"
                        size="large"
                        onClick={() => handleNavigation(2)}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderColor: 'rgba(255, 255, 255, 0.6)',
                          color: 'white',
                          fontWeight: 600,
                          borderRadius: 2,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            borderColor: 'rgba(255, 255, 255, 0.9)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.25)'
                          },
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        Mis habilidades
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </AnimatedCard>
          </Grid>

          {/* Image/Visual Element */}
          <Grid item xs={12} md={6}>
            <AnimatedCard delay={0.4} sx={{ p: 3, textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{ mb: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                >
                  <strong>Tecnologías que he utilizado</strong>
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 2,
                    maxWidth: 300,
                    margin: '0 auto'
                  }}
                >
                  {['Node.js', 'TypeScript', 'Python', 'GoLang', 'SQL', 'NoSQL', 'DevOps', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.08, duration: 0.6, ease: "easeOut" }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          backdropFilter: 'blur(15px)',
                          borderRadius: 2,
                          border: '1px solid rgba(255, 255, 255, 0.35)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'white',
                          cursor: 'pointer',
                          textAlign: 'center',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.35)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                            border: '1px solid rgba(255, 255, 255, 0.5)'
                          },
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        {tech}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </AnimatedCard>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 