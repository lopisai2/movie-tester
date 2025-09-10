import { addRemoveFavoritesThunk } from "./addRemoveFavoritesThunk";
import { toast } from "sonner";
import { CustomFavoritesState } from "@/_interfaces/Favorites.interface";

// Mock del toast
jest.mock("sonner", () => ({
  toast: jest.fn(),
}));

// Mock de localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();
Object.defineProperty(global, "localStorage", { value: localStorageMock });

describe("addRemoveFavoritesThunk", () => {
  let mockSet: jest.Mock;
  let mockGet: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    mockSet = jest.fn();
    mockGet = jest.fn<CustomFavoritesState, []>(() => ({
      store: { favorites: [] },
      hydrateFavorites: jest.fn(),
      addRemoveFavorites: jest.fn(),
    }));
  });

  it("añade una película cuando la lista está vacía", async () => {
    await addRemoveFavoritesThunk({
      get: mockGet,
      set: mockSet,
      movieId: "movie-1",
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "movie-tester-favorites",
      JSON.stringify(["movie-1"])
    );
    expect(mockSet).toHaveBeenCalledWith({
      store: { favorites: ["movie-1"] },
    });
    expect(toast).toHaveBeenCalledWith(
      "Pelicula añadida a tus favoritos"
    );
  });

  it("elimina una película si ya está en favoritos", async () => {
    mockGet.mockReturnValueOnce({
      store: { favorites: ["movie-1"] },
    });

    await addRemoveFavoritesThunk({
      get: mockGet,
      set: mockSet,
      movieId: "movie-1",
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "movie-tester-favorites",
      JSON.stringify([])
    );
    expect(mockSet).toHaveBeenCalledWith({
      store: { favorites: [] },
    });
    expect(toast).toHaveBeenCalledWith(
      "La pelicula ha sido eliminada de tus favoritos"
    );
  });

  it("añade una película si no está en favoritos pero hay otras", async () => {
    mockGet.mockReturnValueOnce({
      store: { favorites: ["movie-2"] },
    });

    await addRemoveFavoritesThunk({
      get: mockGet,
      set: mockSet,
      movieId: "movie-1",
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "movie-tester-favorites",
      JSON.stringify(["movie-2", "movie-1"])
    );
    expect(mockSet).toHaveBeenCalledWith({
      store: { favorites: ["movie-2", "movie-1"] },
    });
    expect(toast).toHaveBeenCalledWith(
      "Pelicula añadida a tus favoritos"
    );
  });
});
