import React from "react";
import { motion, useInView } from "framer-motion";

const FadeInText = ({ text }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="text-white w-1/2"
    >
      {text}
    </motion.div>
  );
};

export default FadeInText;
