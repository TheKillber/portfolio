import React from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const Animation = ({ children }) => {
   return (
      <AnimatePresence exitBeforeEnter>
         <MotionConfig transition={{ duration: 0.25 }}>
            <motion.div
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 50 }}
               transition={{ duration: 0.5 }}
            >
               {children}
            </motion.div>
         </MotionConfig>
      </AnimatePresence>
   );
};

export default Animation;
