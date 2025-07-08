'use client';

import {
  Box,
  Container,
  Typography,
  useTheme
} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import CodeIcon from '@mui/icons-material/Code';
import UpdateIcon from '@mui/icons-material/Update';
import { motion } from 'framer-motion';
import AnimatedCard from '../AnimatedCard';
import AnimatedIcon from '../AnimatedIcon';
import { useI18n } from '../../contexts/I18nContext';

export default function ProjectsSection() {
  const theme = useTheme();
  const { t } = useI18n();

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          {/* Icono de construcción */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 4
              }}
            >
              <AnimatedCard
                sx={{
                  p: 4,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
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
              </AnimatedCard>
            </Box>
          </motion.div>

          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'white',
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {t('projects.constructionTitle')}
            </Typography>
          </motion.div>

          {/* Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Typography
              variant="h5"
              color="white"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              {t('projects.constructionDescription')}
            </Typography>
          </motion.div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <AnimatedCard
              sx={{
                p: 4,
                maxWidth: 800,
                mx: 'auto'
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <Box sx={{ 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <AnimatedIcon size={40} color="white" delay={0.1}>
                        <CodeIcon />
                      </AnimatedIcon>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'white',
                        mb: 1,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {t('projects.recentProjects')}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                    >
                      {t('projects.recentProjectsDesc')}
                    </Typography>
                  </Box>
                </motion.div>

                {/* Experiencia profesional */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <Box sx={{ 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <AnimatedIcon size={40} color="white" delay={0.2}>
                        <UpdateIcon />
                      </AnimatedIcon>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'white',
                        mb: 1,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {t('projects.professionalExperience')}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                    >
                      {t('projects.professionalExperienceDesc')}
                    </Typography>
                  </Box>
                </motion.div>

                {/* Tecnologías modernas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <Box sx={{ 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <AnimatedIcon size={40} color="white" delay={0.3}>
                        <ConstructionIcon />
                      </AnimatedIcon>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'white',
                        mb: 1,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {t('projects.modernTechnologies')}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                    >
                      {t('projects.modernTechnologiesDesc')}
                    </Typography>
                  </Box>
                </motion.div>
              </Box>

            </AnimatedCard>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
} 