'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getImagePath } from '../utils/paths';
import { useI18n } from '../contexts/I18nContext';
import LanguageSelector from './LanguageSelector';

export default function Header({ activeTab, onTabChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabClick = (index) => {
    onTabChange(null, index);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const tabs = [
    { label: t('navigation.home'), value: 0 },
    { label: t('navigation.history'), value: 1 },
    { label: t('navigation.skills'), value: 2 },
    { label: t('navigation.projects'), value: 3 }
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {tabs.map((tab) => (
          <ListItem
            button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            selected={activeTab === tab.value}
          >
            <ListItemText
              primary={tab.label}
              sx={{
                color: 'white',
                '&': {
                  fontWeight: activeTab === tab.value ? 600 : 400,
                  color: activeTab === tab.value ? '#875491': 'white' 
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          backgroundColor: 'black',
          color: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/dotcom" sx={{ textDecoration: 'none' }}>
              <Image
                src={getImagePath("/assets/img/logo.png")}
                alt="Erik Stor Logo"
                width={140}
                height={56}
                style={{ objectFit: 'contain', marginTop: '5px' }}
              />
            </Link>
          </motion.div>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LanguageSelector />
            
            {isMobile ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Tabs
                  value={activeTab}
                  onChange={onTabChange}
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#875491',
                      height: 3
                    },
                    '& .MuiTab-root': {
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '1rem',
                      textTransform: 'none',
                      minWidth: 100,
                      '&.Mui-selected': {
                        color: 'white',
                        fontWeight: 600
                      }
                    }
                  }}
                >
                  {tabs.map((tab) => (
                    <Tab key={tab.value} label={tab.label} />
                  ))}
                </Tabs>
              </motion.div>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          color: 'white',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: 'black',
            color: 'white'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
} 