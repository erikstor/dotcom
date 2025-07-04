'use client';

import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

export default function AnimatedText({ 
  children, 
  variant = "h1", 
  delay = 0, 
  duration = 0.8,
  color = "white",
  ...props 
}) {
  const text = children;
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ marginRight: '0.25em' }}
        >
          <Typography
            variant={variant}
            component="span"
            sx={{
              color: color,
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              ...props.sx
            }}
            {...props}
          >
            {word}
          </Typography>
        </motion.span>
      ))}
    </motion.div>
  );
} 