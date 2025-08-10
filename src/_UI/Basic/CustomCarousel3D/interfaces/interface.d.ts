import { MatchWidths } from "@/_hooks/useWindows";

export interface CustomCarousel3DProps {
    matchesWidth: MatchWidths;
    items: {
        url: string;
        width: string;
        owner: string;
        occupation: string;
        comment: string;
    }[]; // Lista de testimonios
}