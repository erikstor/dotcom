'use client';

import { useState } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from 'framer-motion';
import { useI18n } from '../contexts/I18nContext';

export default function LanguageSelector() {
  const theme = useTheme();
  const { locale, changeLocale, t } = useI18n();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale) => {
    changeLocale(newLocale);
    handleClose();
  };

  const languages = [
    { code: 'es', name: t('language.es'), flag: '🇪🇸' },
    { code: 'en', name: t('language.en'), flag: '🇺🇸' }
  ];

  return (
    <Box>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconButton
          onClick={handleClick}
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <LanguageIcon />
        </IconButton>
      </motion.div>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 1
          }
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={locale === language.code}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(135, 84, 145, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(135, 84, 145, 0.4)'
                }
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6">{language.flag}</Typography>
              <Typography variant="body2">{language.name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
} 