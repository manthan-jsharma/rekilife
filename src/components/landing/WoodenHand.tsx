"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/** Desktop wooden hand — no wrist extension, larger, near navbar. */
export default function WoodenHand() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none select-none will-change-transform"
      aria-hidden
      initial={reduce ? false : { opacity: 0, x: 14 }}
      animate={
        reduce
          ? { opacity: 1, y: 0, rotate: -4 }
          : {
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
              rotate: [-5, -3, -5],
            }
      }
      transition={
        reduce
          ? { duration: 0.4 }
          : {
              opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
            }
      }
    >
      <div className="relative h-[420px] w-[340px] xl:h-[500px] xl:w-[400px]">
        <div
          className="absolute bottom-[6%] left-[8%] right-[4%] h-[56px] rounded-[100%] blur-md"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(92,58,18,0.35) 0%, rgba(92,58,18,0.12) 45%, transparent 72%)",
          }}
        />
        <Image
          src="/illustrations/wooden-adult-hand.png"
          alt=""
          fill
          sizes="400px"
          unoptimized
          className="relative object-contain object-right drop-shadow-[0_10px_24px_rgba(92,58,18,0.18)]"
        />
      </div>
    </motion.div>
  );
}
