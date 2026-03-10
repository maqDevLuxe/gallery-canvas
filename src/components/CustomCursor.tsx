import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isOverImage, setIsOverImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const hasTouch = 'ontouchstart' in window;
    if (hasTouch) return;

    setIsVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const checkTarget = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isImg = target.tagName === "IMG" || target.closest("[data-cursor-invert]");
      setIsOverImage(!!isImg);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkTarget);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkTarget);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: pos.x - (isOverImage ? 30 : 6),
        y: pos.y - (isOverImage ? 30 : 6),
        width: isOverImage ? 60 : 12,
        height: isOverImage ? 60 : 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      style={{
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    />
  );
};

export default CustomCursor;
