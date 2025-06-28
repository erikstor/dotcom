'use client';

import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography
} from '@mui/material';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/erikstorfranco/',
      color: '#0073b1'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      href: 'https://www.instagram.com/erik.gram/',
      color: '#E4405F'
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ order: { xs: 2, md: 1 } }}
          >
            © {currentYear} Erik Stor. Todos los derechos reservados.
          </Typography>

          {/* Social Links */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ order: { xs: 1, md: 2 } }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                sx={{
                  color: social.color,
                  backgroundColor: '#17171a',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
} 