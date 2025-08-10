import { CSSProperties } from "react";

// Definir los tipos de las propiedades del componente
export interface CustomScrollAnimationI {
    children: ReactNode; // Contenido que se animará
    initialX?: string | number; // Posición inicial en el eje X
    initialY?: string | number; // Posición inicial en el eje Y
    duration?: number; // Duración de la animación
    easing?: string; // Tipo de suavizado de la animación
    marginOffset?: MarginType
    className?: string
    when?: string
    staggerChildren?: number
    initialAnimation?: boolean
    style?: CSSProperties
    delay?: number
}
