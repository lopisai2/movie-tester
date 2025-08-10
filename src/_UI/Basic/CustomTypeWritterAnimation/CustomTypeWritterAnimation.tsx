import { motion } from 'framer-motion';
import { CustomTypeWritterAnimationI } from './interfaces';
import useCustomTypeWritterAnimation from './hooks/useCustomTypeWritterAnimation';

// Componente de animación tipo máquina de escribir para un solo texto
const CustomTypeWritterAnimation: React.FC<CustomTypeWritterAnimationI> = ({
    text,
    typingSpeed = 100,
    deletingSpeed = 50,
    pause = 2000,
    initialOpacity,
    finalOpacity,
    className,
    duration,
}) => {

    const { displayedText } = useCustomTypeWritterAnimation({ text, typingSpeed, deletingSpeed, pause })

    return (
        <motion.h1
            initial={{ opacity: initialOpacity }}
            animate={{ opacity: finalOpacity }}
            className={className}
            transition={{ duration }}
        >
            {displayedText}
        </motion.h1>
    );
};

export default CustomTypeWritterAnimation;
