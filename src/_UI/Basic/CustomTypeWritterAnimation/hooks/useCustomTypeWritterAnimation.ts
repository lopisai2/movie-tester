import { useEffect, useState } from "react";
import { CustomTypeWritterAnimationI } from "../interfaces";

const useCustomTypeWriterAnimation = ({ deletingSpeed, text, typingSpeed, pause }: CustomTypeWritterAnimationI) => {
    const [displayedText, setDisplayedText] = useState(''); // Texto mostrado en pantalla
    const [isDeleting, setIsDeleting] = useState(false); // Controla si está borrando o escribiendo
    const [previousText, setPreviousText] = useState(text); // Guarda el texto anterior para detectar cambios
    const [isPaused, setIsPaused] = useState(false); // Controla si la pausa está activa

    useEffect(() => {
        let typingInterval: NodeJS.Timeout;

        // Función para manejar la animación de escribir/borrar
        const handleTyping = () => {
            if (isPaused) return; // No hacer nada si está en pausa

            if (!isDeleting) {
                // Animación de escritura
                typingInterval = setInterval(() => {
                    setDisplayedText((prevText) => {
                        const nextChar = text.charAt(prevText.length);
                        if (prevText.length < text.length) {
                            return prevText + nextChar;
                        } else {
                            clearInterval(typingInterval);

                            // Manejar la pausa dependiendo del valor de 'pause'
                            if (pause === 'untilChange') {
                                setIsPaused(true); // Mantener el texto hasta que cambie
                            } else {
                                // Espera un tiempo específico antes de iniciar el borrado
                                setTimeout(() => setIsDeleting(true), pause);
                            }
                            return prevText;
                        }
                    });
                }, typingSpeed);
            } else {
                // Animación de borrado
                typingInterval = setInterval(() => {
                    setDisplayedText((prevText) => {
                        if (prevText.length > 0) {
                            return prevText.slice(0, -1); // Elimina el último carácter
                        } else {
                            setIsDeleting(false);
                            clearInterval(typingInterval);
                            return prevText;
                        }
                    });
                }, deletingSpeed);
            }
        };

        // Detecta cambios en el texto
        if (text !== previousText) {
            setIsDeleting(false); // Reinicia el estado de escritura
            setDisplayedText(''); // Limpia el texto mostrado
            setPreviousText(text); // Actualiza el texto anterior
            setIsPaused(false); // Reactiva la animación si estuvo en pausa
        }

        // Inicializa la animación de escribir/borrar
        handleTyping();

        // Limpia el intervalo cuando el componente se desmonta o se actualiza
        return () => clearInterval(typingInterval);
    }, [text, isDeleting, typingSpeed, deletingSpeed, pause, previousText, isPaused]);

    return {
        displayedText
    };
};

export default useCustomTypeWriterAnimation;
