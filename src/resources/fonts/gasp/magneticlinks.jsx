import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticLinks({ children, className }) {
  const magnetic = useRef(null);
  console.log(children);
  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 0.25,
      ease: "elastic.out(1, 1)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 0.25,
      ease: "elastic.out(1, 1)",
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x / 8);
      yTo(y / 4);
      gsap.to(magnetic.current, {
        scale: 1.05,
        boxShadow: "1px 1px 55px rgb(10, 19, 9)",
      });
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, {
        scale: 1,
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      });
      xTo(0);
      yTo(0);
    };

    magnetic.current.addEventListener("mousemove", mouseMove);
    magnetic.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      if (magnetic.current != null) {
        magnetic.current.removeEventListener("mousemove", mouseMove);
        magnetic.current.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return (
    <div ref={magnetic} className={className}>
      {children}
    </div>
  );
}
