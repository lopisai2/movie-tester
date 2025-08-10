export interface CustomTypeWritterAnimationI {
    text: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pause?: number | 'untilChange'
    initialOpacity?: number
    finalOpacity?: number
    duration?: number
    className?: string
}