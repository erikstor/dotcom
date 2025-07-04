'use client';

import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export default function AnimatedIcon({ children, size = 40, color = '#875491', delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
          fontSize: size * 0.6,
          ...props.sx
        }}
        {...props}
      >
        {children}
      </Box>
    </motion.div>
  );
} 