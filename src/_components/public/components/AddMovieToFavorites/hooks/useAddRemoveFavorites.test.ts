import { renderHook, act } from "@testing-library/react";
import { useAddRemoveFavorites } from "./useAddRemoveFavorites";

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: jest.fn((key: string) => store[key] || null),
        setItem: jest.fn((key: string, value: string) => {
            store[key] = value;
        }),
        clear: jest.fn(() => {
            store = {};
        }),
        removeItem: jest.fn((key: string) => {
            delete store[key];
        }),
    };
})();

Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
});

// Mock toast
jest.mock("sonner", () => ({
    toast: jest.fn(),
}));

import { toast } from "sonner";

describe("useAddRemoveFavorites hook", () => {
    const movieId = "movie-123";

    beforeEach(() => {
        jest.clearAllMocks();
        localStorageMock.clear();
    });

    it("debe iniciar con lista vacía si no hay favoritos en localStorage", () => {
        localStorageMock.getItem.mockReturnValue(null);

        const { result } = renderHook(() => useAddRemoveFavorites({ movieId }));

        expect(result.current.currentFavorites).toEqual([]);
    });

    it("debe añadir movieId si la lista está vacía", () => {
        localStorageMock.getItem.mockReturnValue(null);

        const { result } = renderHook(() => useAddRemoveFavorites({ movieId }));

        act(() => {
            result.current.handleAddRemoveFavorites();
        });

        expect(localStorage.setItem).toHaveBeenCalledWith(
            "movie-tester-favorites",
            JSON.stringify([movieId])
        );
        expect(result.current.currentFavorites).toEqual([movieId]);
        expect(toast).toHaveBeenCalledWith("Pelicula añadida a tus favoritos");
    });

    it("debe eliminar movieId si ya está en favoritos", () => {
        localStorageMock.getItem.mockReturnValue(JSON.stringify([movieId]));

        const { result } = renderHook(() => useAddRemoveFavorites({ movieId }));

        act(() => {
            result.current.handleAddRemoveFavorites();
        });

        expect(localStorage.setItem).toHaveBeenCalledWith(
            "movie-tester-favorites",
            JSON.stringify([])
        );
        expect(result.current.currentFavorites).toEqual([]);
        expect(toast).toHaveBeenCalledWith("La pelicula ha sido eliminada de tus favoritos");
    });

    it("debe añadir movieId si no está en favoritos", () => {
        const anotherMovieId = "movie-456";
        localStorageMock.getItem.mockReturnValue(JSON.stringify([anotherMovieId]));

        const { result } = renderHook(() => useAddRemoveFavorites({ movieId }));

        act(() => {
            result.current.handleAddRemoveFavorites();
        });

        expect(localStorage.setItem).toHaveBeenCalledWith(
            "movie-tester-favorites",
            JSON.stringify([anotherMovieId, movieId])
        );
        expect(result.current.currentFavorites).toEqual([anotherMovieId, movieId]);
        expect(toast).toHaveBeenCalledWith("Pelicula añadida a tus favoritos");
    });
});
