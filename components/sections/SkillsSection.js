'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const skillsByCategory = {
  lenguajes: [
    {
      name: "JavaScript",
      level: "Avanzado",
      image: "/assets/img/javacriptLogo.png",
      progress: 90,
      color: "#F7DF1E"
    },
    {
      name: "TypeScript",
      level: "Avanzado",
      image: "/assets/img/typescript-logo.png",
      progress: 90,
      color: "#007acc"
    },
    {
      name: "GoLang",
      level: "Intermedio",
      image: "/assets/img/golang-logo.png",
      progress: 70,
      color: "#42bedf"
    },
    {
      name: "Python",
      level: "Intermedio",
      image: "/assets/img/python-logo.png",
      progress: 70,
      color: "#376e9d"
    },
    {
      name: "Java",
      level: "Básico",
      image: "/assets/img/java-logo.png",
      progress: 60,
      color: "#eb3c3d"
    },
    {
      name: "PHP",
      level: "Avanzado",
      image: "/assets/img/phpLogo.png",
      progress: 80,
      color: "#777BB4"
    },
    {
      name: "HTML 5",
      level: "Avanzado",
      image: "/assets/img/html5Logo.png",
      progress: 80,
      color: "#E34F26"
    },
    {
      name: "CSS 3",
      level: "Intermedio",
      image: "/assets/img/css3Logo.png",
      progress: 70,
      color: "#1572B6"
    }
  ],
  tecnologias: [
    {
      name: "Node.js",
      level: "Avanzado",
      image: "/assets/img/nodejsLogo.png",
      progress: 90,
      color: "#339933"
    },
    {
      name: "CDK",
      level: "Intermedio",
      image: "/assets/img/cdk-logo.png",
      progress: 75,
      color: "#237d9f"
    },
    {
      name: "CloudFormation",
      level: "Intermedio",
      image: "/assets/img/cloudformation-logo.png",
      progress: 75,
      color: "#339933"
    },
    {
      name: "Docker",
      level: "Intermedio",
      image: "/assets/img/docker-logo.png",
      progress: 65,
      color: "#1d63ee"
    },
    {
      name: "Kubernetes",
      level: "Básico",
      image: "/assets/img/kubernetes-logo.png",
      progress: 45,
      color: "#326ce5"
    }
  ],
  frameworks: [
    {
      name: "Serverless",
      level: "Avanzado",
      image: "/assets/img/serverless-logo.png",
      progress: 80,
      color: "#fd5750"
    },
    {
      name: "NestJS",
      level: "Intermedio",
      image: "/assets/img/nestjs-logo.png",
      progress: 80,
      color: "#e0234e"
    },
    {
      name: "Fiber",
      level: "Intermedio",
      image: "/assets/img/fiber-logo.png",
      progress: 60,
      color: "#42bedf"
    },
    {
      name: "Spring Boot",
      level: "Intermedio",
      image: "/assets/img/spring-boot-logo.png",
      progress: 60,
      color: "#6db33c"
    },
    {
      name: "FastApi",
      level: "Intermedio",
      image: "/assets/img/fastapi-logo.png",
      progress: 60,
      color: "#05998b"
    },
    {
      name: "Django",
      level: "Intermedio",
      image: "/assets/img/django-logo.png",
      progress: 60,
      color: "#092e20"
    },
    {
      name: "Laravel",
      level: "Básico",
      image: "/assets/img/laravelLogo.png",
      progress: 60,
      color: "#FF2D20"
    },
    {
      name: "React",
      level: "Básico",
      image: "/assets/img/reactLogo.png",
      progress: 50,
      color: "#61DAFB"
    },
    {
      name: "Next.js",
      level: "Básico",
      image: "/assets/img/nextjs-logo.png",
      progress: 50,
      color: "#000000"
    },
    {
      name: "Angular",
      level: "Intermedio",
      image: "/assets/img/angularLogo.png",
      progress: 60,
      color: "#DD0031"
    },
  ],
  basesDeDatos: [
    {
      name: "MySQL",
      level: "Avanzado",
      image: "/assets/img/mysql-logo.png",
      progress: 90,
      color: "#e49005"
    },
    {
      name: "PostgreSQL",
      level: "Avanzado",
      image: "/assets/img/postgres-logo.png",
      progress: 90,
      color: "#2f6792"
    },
    {
      name: "LiquidBase",
      level: "Intermedio",
      image: "/assets/img/liquidBase-logo.png",
      progress: 70,
      color: "#2962ff"
    },
    {
      name: "DynamoDB",
      level: "Avanzado",
      image: "/assets/img/dynamo-logo.png",
      progress: 90,
      color: "#1a476f"
    },
    {
      name: "Redis",
      level: "Intermedio",
      image: "/assets/img/redis-logo.png",
      progress: 70,
      color: "#d72c20"
    },
    {
      name: "MongoDB",
      level: "Avanzado",
      image: "/assets/img/mongodb-logo.png",
      progress: 80,
      color: "#4faa41"
    },
    {
      name: "Sql Lite",
      level: "Intermedio",
      image: "/assets/img/sql-lite-logo.png",
      progress: 70,
      color: "#82ccef"
    },
  ],
  nubes: [
    {
      name: "AWS",
      level: "Básico",
      image: "/assets/img/aws-logo.png",
      progress: 80,
      color: "#FF9900"
    },
    {
      name: "Google Cloud",
      level: "Básico",
      image: "/assets/img/gcp-logo.png",
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
      {skills.map((skill) => (
        <Grid item xs={12} sm={6} md={4} key={skill.name}>
          <Card
            elevation={0}
            sx={{
              height: '100%',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05) translate(0%, 0%)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                borderColor: skill.color
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
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

              {/* Skill Level */}
              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {skill.level}
              </Typography>

              {/* Progress Bar */}
              <Box sx={{ width: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 1
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    <strong>Progreso</strong>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: skill.color
                    }}
                  >
                    {skill.progress}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.progress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: skill.color,
                      borderRadius: 4
                    }
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default function SkillsSection() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const categories = [
    { label: 'Lenguajes', key: 'lenguajes' },
    { label: 'Técnologias', key: 'tecnologias' },
    { label: 'Frameworks', key: 'frameworks' },
    { label: 'Bases de Datos', key: 'basesDeDatos' },
    { label: 'Nubes', key: 'nubes' }
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
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 2
            }}
          >
            <strong>Mis Habilidades</strong>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Tecnologías y herramientas organizadas por categorías
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
              Constantemente estoy aprendiendo nuevas tecnologías y mejorando mis habilidades existentes.
              Me mantengo actualizado con las últimas tendencias en desarrollo web para ofrecer las mejores soluciones.
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