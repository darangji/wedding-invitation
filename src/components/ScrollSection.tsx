import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollSectionProps {
  children: ReactNode;
}

function ScrollSection({ children }: ScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 2.0 }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollSection;
