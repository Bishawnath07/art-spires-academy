import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import img from './teacher-helping-male-art-wearing-260nw-1414313510.webp'

const AttractiveSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <motion.section
      className="attractive-section"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
    >
      <div className="content">
        <h2 className="section-title">Discover the Magic</h2>
        <p className="section-description">
          Immerse yourself in a world of enchantment and wonder. Witness the power
          of React.js as it brings your ideas to life with stunning animations and
          captivating user experiences.
        </p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </div>
      <motion.div
        className="illustration"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
      >
        <img src={img} alt="Illustration" />
      </motion.div>
    </motion.section>
  );
};

export default AttractiveSection;
