/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export function Reveal({
  children,
  width = "fit-content",
  className1 = "",
  className2 = "",
  delay = 0.25,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
      className={className1}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.17, 0.67, 0.83, 0.67],
          type: "spring",
        }}
        className={className2}
      >
        {children}
      </motion.div>
    </div>
  );
}
