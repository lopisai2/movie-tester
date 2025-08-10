"use client";
// components/CustomAnimateRoutes.tsx
import { motion } from "motion/react";
import { ReactNode } from "react";

type CustomAnimateRoutesProps = {
  children: ReactNode;
};

export const CustomAnimateRoutes = ({ children }: CustomAnimateRoutesProps) => {

  return (
    <motion.div
      key={window.crypto.randomUUID()}
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
