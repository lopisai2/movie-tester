"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
  ComponentProps,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useLocaleStore } from "@/_store/locale/locale";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export interface LayoutTransitionProps {
  children: ReactNode;
  className?: ComponentProps<typeof motion.div>["className"];
  style?: ComponentProps<typeof motion.div>["style"];
  initial: ComponentProps<typeof motion.div>["initial"];
  animate: ComponentProps<typeof motion.div>["animate"];
  exit: ComponentProps<typeof motion.div>["exit"];
  params: { id: string; lang: string };
}

export const LayoutTransition = ({
  children,
  className,
  style,
  initial,
  animate,
  exit,
  params,
}: LayoutTransitionProps) => {
  const pathname = usePathname(); //Para obtener una key unica para el wrapper de la
  const { setLocale } = useLocaleStore();

  useEffect(() => {
    setLocale(params.lang);
  }, [params.lang, setLocale]);

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.main
        className={className}
        style={{ ...style, width: "100vw", maxWidth: "2560px", height: "100%" }}
        key={pathname}
        initial={initial}
        animate={animate}
        transition={{
          duration: 0.3,
        }}
        exit={exit}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.main>
    </AnimatePresence>
  );
};
