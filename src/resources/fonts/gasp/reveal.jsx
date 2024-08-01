import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Reveal({ children, width = "fit-content",color="white" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    else{
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 15 ,scale:0.9},
          visible: { opacity: 1, y: 0, scale  :1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{          
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: `${color}`,
          borderRadius: "4px",

        }}
      />
    </div>
  );
}
