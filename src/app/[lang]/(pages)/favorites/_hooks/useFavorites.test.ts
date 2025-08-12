// favorites.test.ts
import { renderHook, act } from '@testing-library/react';
import { useFavorites } from './useFavorites';

describe('useFavorites hook', () => {
  const mockGetItem = jest.fn();
  const mockSetItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: mockGetItem,
        setItem: mockSetItem,
      },
      writable: true,
    });
  });

  it('debe inicializar con películas desde localStorage', () => {
    mockGetItem.mockReturnValue(JSON.stringify(['movie-1', 'movie-2']));

    const { result } = renderHook(() => useFavorites());

    expect(result.current.favoritesMovies).toEqual(['movie-1', 'movie-2']);
    expect(mockGetItem).toHaveBeenCalledWith('movie-tester-favorites');
  });

  it('debe remover una película de favoritos', () => {
    mockGetItem.mockReturnValue(JSON.stringify(['movie-1', 'movie-2']));

    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.removeFavoriteMovie('movie-1');
    });

    expect(result.current.favoritesMovies).toEqual(['movie-2']);
    expect(mockSetItem).toHaveBeenCalledWith(
      'movie-tester-favorites',
      JSON.stringify(['movie-2'])
    );
  });

  it('debe manejar cuando no hay favoritos guardados', () => {
    mockGetItem.mockReturnValue(null);

    const { result } = renderHook(() => useFavorites());

    expect(result.current.favoritesMovies).toEqual([]);
  });
});
