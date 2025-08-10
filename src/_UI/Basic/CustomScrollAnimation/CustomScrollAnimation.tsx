import { motion, useInView } from 'framer-motion';
import { useRef, ElementType } from 'react';
import { CustomScrollAnimationI } from './interface';

// Componente reutilizable para animar elementos al hacer scroll
const CustomScrollAnimation: React.FC<CustomScrollAnimationI & { motionComponent?: ElementType }> = ({
    children,
    initialX = '0%', // Valor por defecto para X
    initialY = '100%', // Valor por defecto para Y (viene desde abajo)
    duration = 1, // Duración por defecto de la animación
    easing = 'easeOut', // Suavizado por defecto
    className,
    marginOffset,
    style,
    staggerChildren,
    when,
    delay = 0.2,
    motionComponent = motion.div, // Componente motion a usar, por defecto motion.div
}) => {
    // Ref para el elemento animado
    const rootRef = useRef<HTMLDivElement | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);
    // Ajustar el margen de root para la detección temprana
    const isInView = useInView(ref, {
        once: true,
        margin: marginOffset, // Detecta antes de entrar en la vista,
        root: rootRef
    });

    // Renderizar dinámicamente el componente motion seleccionado
    const MotionComponent = motionComponent;

    return (
        <MotionComponent
            ref={ref}
            initial={{ x: initialX, y: initialY, opacity: 0 }} // Estado inicial fuera de la vista
            animate={{ x: isInView ? '0%' : initialX, y: isInView ? '0%' : initialY, opacity: isInView ? 1 : 0 }} // Animar cuando está en vista
            transition={{ duration, ease: easing, delay, when, staggerChildren }} // Añadir un pequeño retraso en la transición
            className={className}
            style={style}
        >
            {children}
        </MotionComponent>
    );
};

export default CustomScrollAnimation;
