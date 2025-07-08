'use client';

import {
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '../../utils/paths';
import AnimatedCard from '../AnimatedCard';
import AnimatedText from '../AnimatedText';
import { useI18n } from '../../contexts/I18nContext';

// Mapeo de URLs para cada habilidad
const skillUrls = {
  // Lenguajes
  "JavaScript": "https://github.com/erikstor/examples-api-backend/tree/master/nodejs",
  "TypeScript": "https://github.com/erikstor/examples-api-backend/tree/master/typescript",
  "GoLang": "https://github.com/erikstor/examples-api-backend/tree/master/golang",
  "Python": "https://github.com/erikstor/examples-api-backend/tree/master/python",
  "Java": null, // No hay carpeta específica para Java
  "PHP": null, // No hay carpeta específica para PHP
  "HTML 5": null, // No hay carpeta específica para HTML
  "CSS 3": null, // No hay carpeta específica para CSS
  
  // Tecnologías
  "Node.js": "https://github.com/erikstor/examples-api-backend/tree/master/nodejs",
  "CDK": "https://github.com/erikstor/examples-api-backend/tree/master/devops",
  "CloudFormation": "https://github.com/erikstor/examples-api-backend/tree/master/devops",
  "Docker": "https://github.com/erikstor/examples-api-backend/tree/master/devops",
  "Kubernetes": "https://github.com/erikstor/examples-api-backend/tree/master/devops",
  
  // Frameworks
  "Serverless": "https://github.com/erikstor/examples-api-backend/tree/master/nodejs",
  "NestJS": "https://github.com/erikstor/examples-api-backend/tree/master/nodejs",
  "Fiber": "https://github.com/erikstor/examples-api-backend/tree/master/golang",
  "Spring Boot": null, // No hay carpeta específica para Spring Boot
  "FastApi": "https://github.com/erikstor/examples-api-backend/tree/master/python",
  "Django": "https://github.com/erikstor/examples-api-backend/tree/master/python",
  "Laravel": null, // No hay carpeta específica para Laravel
  "React": null, // No hay carpeta específica para React
  "Next.js": null, // No hay carpeta específica para Next.js
  "Angular": null, // No hay carpeta específica para Angular
  
  // Bases de Datos
  "MySQL": "https://github.com/erikstor/examples-api-backend/tree/master/sql",
  "PostgreSQL": "https://github.com/erikstor/examples-api-backend/tree/master/sql",
  "LiquidBase": "https://github.com/erikstor/examples-api-backend/tree/master/sql",
  "DynamoDB": "https://github.com/erikstor/examples-api-backend/tree/master/nosql",
  "Redis": "https://github.com/erikstor/examples-api-backend/tree/master/nosql",
  "MongoDB": "https://github.com/erikstor/examples-api-backend/tree/master/nosql",
  "Sql Lite": "https://github.com/erikstor/examples-api-backend/tree/master/sql",
  
  // Nubes
  "AWS": "https://github.com/erikstor/examples-api-backend/tree/master/devops",
  "Google Cloud": "https://github.com/erikstor/examples-api-backend/tree/master/devops",
};

const skillsByCategory = {
  lenguajes: [
    {
      name: "JavaScript",
      level: "Avanzado",
      image: getImagePath("/assets/img/javacriptLogo.png"),
      progress: 90,
      color: "#F7DF1E"
    },
    {
      name: "TypeScript",
      level: "Avanzado",
      image: getImagePath("/assets/img/typescript-logo.png"),
      progress: 90,
      color: "#007acc"
    },
    {
      name: "GoLang",
      level: "Intermedio",
      image: getImagePath("/assets/img/golang-logo.png"),
      progress: 70,
      color: "#42bedf"
    },
    {
      name: "Python",
      level: "Intermedio",
      image: getImagePath("/assets/img/python-logo.png"),
      progress: 70,
      color: "#376e9d"
    },
    {
      name: "Java",
      level: "Básico",
      image: getImagePath("/assets/img/java-logo.png"),
      progress: 60,
      color: "#eb3c3d"
    },
    {
      name: "PHP",
      level: "Avanzado",
      image: getImagePath("/assets/img/phpLogo.png"),
      progress: 80,
      color: "#777BB4"
    },
    {
      name: "HTML 5",
      level: "Avanzado",
      image: getImagePath("/assets/img/html5Logo.png"),
      progress: 80,
      color: "#E34F26"
    },
    {
      name: "CSS 3",
      level: "Intermedio",
      image: getImagePath("/assets/img/css3Logo.png"),
      progress: 70,
      color: "#1572B6"
    }
  ],
  tecnologias: [
    {
      name: "Node.js",
      level: "Avanzado",
      image: getImagePath("/assets/img/nodejsLogo.png"),
      progress: 90,
      color: "#339933"
    },
    {
      name: "CDK",
      level: "Intermedio",
      image: getImagePath("/assets/img/cdk-logo.png"),
      progress: 75,
      color: "#237d9f"
    },
    {
      name: "CloudFormation",
      level: "Intermedio",
      image: getImagePath("/assets/img/cloudformation-logo.png"),
      progress: 75,
      color: "#339933"
    },
    {
      name: "Docker",
      level: "Intermedio",
      image: getImagePath("/assets/img/docker-logo.png"),
      progress: 65,
      color: "#1d63ee"
    },
    {
      name: "Kubernetes",
      level: "Básico",
      image: getImagePath("/assets/img/kubernetes-logo.png"),
      progress: 45,
      color: "#326ce5"
    }
  ],
  frameworks: [
    {
      name: "Serverless",
      level: "Avanzado",
      image: getImagePath("/assets/img/serverless-logo.png"),
      progress: 80,
      color: "#fd5750"
    },
    {
      name: "NestJS",
      level: "Intermedio",
      image: getImagePath("/assets/img/nestjs-logo.png"),
      progress: 80,
      color: "#e0234e"
    },
    {
      name: "Fiber",
      level: "Intermedio",
      image: getImagePath("/assets/img/fiber-logo.png"),
      progress: 60,
      color: "#42bedf"
    },
    {
      name: "Spring Boot",
      level: "Intermedio",
      image: getImagePath("/assets/img/spring-boot-logo.png"),
      progress: 60,
      color: "#6db33c"
    },
    {
      name: "FastApi",
      level: "Intermedio",
      image: getImagePath("/assets/img/fastapi-logo.png"),
      progress: 60,
      color: "#05998b"
    },
    {
      name: "Django",
      level: "Intermedio",
      image: getImagePath("/assets/img/django-logo.png"),
      progress: 60,
      color: "#092e20"
    },
    {
      name: "Laravel",
      level: "Básico",
      image: getImagePath("/assets/img/laravelLogo.png"),
      progress: 60,
      color: "#FF2D20"
    },
    {
      name: "React",
      level: "Básico",
      image: getImagePath("/assets/img/reactLogo.png"),
      progress: 50,
      color: "#61DAFB"
    },
    {
      name: "Next.js",
      level: "Básico",
      image: getImagePath("/assets/img/nextjs-logo.png"),
      progress: 50,
      color: "#000000"
    },
    {
      name: "Angular",
      level: "Intermedio",
      image: getImagePath("/assets/img/angularLogo.png"),
      progress: 60,
      color: "#DD0031"
    },
  ],
  basesDeDatos: [
    {
      name: "MySQL",
      level: "Avanzado",
      image: getImagePath("/assets/img/mysql-logo.png"),
      progress: 90,
      color: "#e49005"
    },
    {
      name: "PostgreSQL",
      level: "Avanzado",
      image: getImagePath("/assets/img/postgres-logo.png"),
      progress: 90,
      color: "#2f6792"
    },
    {
      name: "LiquidBase",
      level: "Intermedio",
      image: getImagePath("/assets/img/liquidBase-logo.png"),
      progress: 70,
      color: "#2962ff"
    },
    {
      name: "DynamoDB",
      level: "Avanzado",
      image: getImagePath("/assets/img/dynamo-logo.png"),
      progress: 90,
      color: "#1a476f"
    },
    {
      name: "Redis",
      level: "Intermedio",
      image: getImagePath("/assets/img/redis-logo.png"),
      progress: 70,
      color: "#d72c20"
    },
    {
      name: "MongoDB",
      level: "Avanzado",
      image: getImagePath("/assets/img/mongodb-logo.png"),
      progress: 80,
      color: "#4faa41"
    },
    {
      name: "Sql Lite",
      level: "Intermedio",
      image: getImagePath("/assets/img/sql-lite-logo.png"),
      progress: 70,
      color: "#82ccef"
    },
  ],
  nubes: [
    {
      name: "AWS",
      level: "Básico",
      image: getImagePath("/assets/img/aws-logo.png"),
      progress: 80,
      color: "#FF9900"
    },
    {
      name: "Google Cloud",
      level: "Básico",
      image: getImagePath("/assets/img/gcp-logo.png"),
      progress: 35,
      color: "#4285F4"
    },
  ]
};

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`skills-tabpanel-${index}`}
      aria-labelledby={`skills-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function SkillsGrid({ skills }) {
  return (
    <Grid container spacing={3}>
      {skills.map((skill, index) => {
        const skillUrl = skillUrls[skill.name];
        const isClickable = skillUrl !== null;
        
        return (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <AnimatedCard
                sx={{
                  height: '100%',
                  p: 3,
                  cursor: isClickable ? 'pointer' : 'default',
                  '&:hover': isClickable ? {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease-in-out'
                  } : {}
                }}
                onClick={isClickable ? () => window.open(skillUrl, '_blank') : undefined}
              >
                <Box sx={{ p: 3 }}>
                  {/* Skill Image */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: '70%',
                        height: '70%',
                        position: 'relative',
                        borderRadius: 1,
                        overflow: 'hidden',
                        backgroundColor: 'background.paper',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={150}
                        height={100}
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                  </Box>

                  {/* Skill Name */}
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 1
                    }}
                  >
                    {skill.name}
                  </Typography>

                  {/* Link indicator */}
                  {isClickable && (
                    <Typography
                      variant="caption"
                      align="center"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 500,
                        display: 'block',
                        mt: 1
                      }}
                    >
                      Ver ejemplos →
                    </Typography>
                  )}

                </Box>
              </AnimatedCard>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default function SkillsSection() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useI18n();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const categories = [
    { label: t('skills.categories.languages'), key: 'lenguajes' },
    { label: t('skills.categories.technologies'), key: 'tecnologias' },
    { label: t('skills.categories.frameworks'), key: 'frameworks' },
    { label: t('skills.categories.databases'), key: 'basesDeDatos' },
    { label: t('skills.categories.cloud'), key: 'nubes' }
  ];

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        minHeight: 'calc(100vh - 200px)'
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <AnimatedText
            variant="h2"
            delay={0.2}
            color="text.primary"
            sx={{ mb: 2 }}
          >
            {t('skills.title')}
          </AnimatedText>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            {t('skills.subtitle')}
          </Typography>
          {/* Additional Info */}
          <Box sx={{ mt: 1, textAlign: 'center' }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.7
              }}
            >
              {t('skills.description')}
            </Typography>
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
                height: 3
              },
              '& .MuiTab-root': {
                color: theme.palette.text.secondary,
                fontWeight: 500,
                fontSize: '1rem',
                textTransform: 'none',
                minWidth: 120,
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                  fontWeight: 600
                }
              },
              // Mobile scroll indicator
              '& .MuiTabs-scrollButtons': {
                display: isMobile ? 'flex' : 'none',
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(4px)',
                borderRadius: '50%',
                width: 32,
                height: 32,
                margin: '0 4px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.95)'
                }
              }
            }}
          >
            {categories.map((category, index) => (
              <Tab
                key={category.key}
                label={category.label}
                id={`skills-tab-${index}`}
                aria-controls={`skills-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        {/* Tab Panels */}
        {categories.map((category, index) => (
          <TabPanel key={category.key} value={activeTab} index={index}>
            <SkillsGrid skills={skillsByCategory[category.key]} />
          </TabPanel>
        ))}

      </Container>
    </Box>
  );
} 