import { Outlet, useLocation } from "react-router-dom";

import { motion } from "framer-motion";


const AnimationLayout = () => {
    const pageVariants = {
        initial: {
          opacity: 0.2
        },
        in: {
          opacity: 1
        },
        out: {
          opacity: 0.2
        }
      };
    
      const pageTransition = {
        type: 'tween',
        ease: 'linear',
        duration: 0.5
      }; 

  const { pathname } = useLocation();
  return (

      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
   
  );
};

export default AnimationLayout