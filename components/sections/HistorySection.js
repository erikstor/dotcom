'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { getImagePath } from '../../utils/paths';
import { useI18n } from '../../contexts/I18nContext';

export default function HistorySection() {
  const theme = useTheme();
  const { t } = useI18n();

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
            backgroundImage: `url(${getImagePath('/assets/img/bannerHistoria.jpg')})`,
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
            <strong>{t('history.mainTitle')}</strong>
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box
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
                {t('history.sectionTitle')}
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
                {t('history.paragraph1')}
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
                {t('history.paragraph2')}
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
                {t('history.paragraph3')}
              </Typography>
            </Box>
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
                    {t('history.experience')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {t('history.experienceDesc')}
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
                    {t('history.focus')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {t('history.focusDesc')}
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
                    {t('history.location')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {t('history.locationDesc')}
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
                  backgroundImage: `url(${getImagePath('/assets/img/bannerHistoria_1.jpg')})`,
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
                  backgroundImage: `url(${getImagePath('/assets/img/sinco.png')})`,
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
                  backgroundImage: `url(${getImagePath('/assets/img/teamNexura.jpg')})`,
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