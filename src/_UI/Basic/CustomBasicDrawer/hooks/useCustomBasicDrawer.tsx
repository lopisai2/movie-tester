import { useEffect, useState } from "react";

export interface useCustomBasicDrawer {
  className?: string;
  placement?: string;
  open?: boolean;
}

const useCustomBasicDrawer = ({
  className,
  placement = "right",
  open,
}: useCustomBasicDrawer) => {
  const [isVisible, setIsVisible] = useState(open); // Controla la visibilidad
  const [animate, setAnimate] = useState(false); // Controla cuándo aplicar la animación
  const drawerClass = `public-custom-drawer ${className ?? ""} ${placement}`;

  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (open) {
      setIsVisible(true); // Montar el drawer
      timeOut = setTimeout(() => setAnimate(true), 10); // Retrasar la activación de la animación
    } else {
      setAnimate(false); // Iniciar la animación de cierre
    }
    return () => clearTimeout(timeOut); // Limpiar timeout
  }, [open]);
  return {
    isVisible,
    animate,
    drawerClass,
    setIsVisible,
  };
};

export default useCustomBasicDrawer;
