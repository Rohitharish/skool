"use client";
import React from 'react';
import { animate, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useSlideInAnimation = (options = {}) => {
  const { threshold = 0.2, duration = 1, ease = 'easeOut' } = options;

  const SlideInComponent = ({ children }) => {
    const [ref, inView] = useInView({
      threshold: threshold,
      triggerOnce: true,
    });
   
    const slideInVariants = {
      hidden: {
        y: '20%',
        opacity: 1,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          ease: ease,
          type: 'spring',
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInVariants}
      >
        {children}
      </motion.div>
    );
  };

  return SlideInComponent;
};

export default useSlideInAnimation;
