import {
  AnimatePresence,
  AnimatePresenceProps,
  Variants,
  motion,
} from "motion/react";
//import { useCurrentLocation } from "@/_hooks/useCurrentLocation";
import { routerTransitions } from "@/_helpers/routerTransitionsHelper";
import { ReactNode } from "react";
import { useDirectionsStore } from "@/_store/directions/directions";

interface AnimateContainerInterface {
  children: ReactNode;
  id?: string;
  className?: string;
  htmlElement: "div" | "main" | "section" | "h1" | "aside";
  mode?: AnimatePresenceProps["mode"];
  customTransitions?: Variants;
  customKey?: string;
  routerMode?: boolean;
  exitFunction?: AnimatePresenceProps["onExitComplete"];
  exit?: boolean;
}

export const CustomAnimateContainer = ({
  id,
  children,
  className,
  htmlElement = "main",
  mode = "wait",
  customTransitions,
  customKey,
  routerMode = false,
  exitFunction,
  exit,
}: AnimateContainerInterface) => {
  //const { location } = useCurrentLocation();
  const { routerDirection } = useDirectionsStore((state) => state.directions);
  const MotionComponent = motion[htmlElement];
  const animatedComponent = (
    <MotionComponent
      id={id}
      style={{ marginTop: routerMode ? 0 : 0 }}
      className={className}
      key={customKey || location.pathname}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={customTransitions || routerTransitions(routerDirection)}
    >
      {children}
    </MotionComponent>
  );

  return (
    <>
      {routerMode ? (
        animatedComponent
      ) : (
        <AnimatePresence mode={mode} onExitComplete={exitFunction}>
          {exit !== undefined && (exit ? animatedComponent : null)}
          {exit === undefined && animatedComponent}
        </AnimatePresence>
      )}
    </>
  );
};
