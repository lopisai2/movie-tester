import { renderHook, act } from "@testing-library/react";
import { useSearch } from "./useSearch";

// Mocks de dependencias
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  useInfiniteQuery: jest.fn(),
}));

jest.mock("../_services/GET/getMoviesClient", () => ({
  getMoviesClient: jest.fn(),
}));

jest.mock("@/_hooks/useCustomBasicList", () => ({
  useCustomBasicList: jest.fn(),
}));

import { useSearchParams, useRouter } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMoviesClient } from "../_services/GET/getMoviesClient";
import { useCustomBasicList } from "@/_hooks/useCustomBasicList";

describe("useSearch hook", () => {
  const mockPush = jest.fn();
  const mockParams = new URLSearchParams("q=batman&type=movie&year=2020");

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock de useSearchParams
    (useSearchParams as jest.Mock).mockReturnValue(mockParams);

    // Mock de useRouter
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    // Mock de useInfiniteQuery
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: { pages: [{ Search: [], totalResults: "20" }] },
      fetchNextPage: jest.fn(),
      hasNextPage: true,
      isLoading: false,
      error: null,
    });

    // Mock de useCustomBasicList
    (useCustomBasicList as jest.Mock).mockReturnValue({
      sentinelRef: { current: null },
    });

    // Mock del cliente API
    (getMoviesClient as jest.Mock).mockResolvedValue({
      Search: [],
      totalResults: "20",
    });
  });

  it("debe devolver query y movieFilters correctos", () => {
    const { result } = renderHook(() => useSearch());

    expect(result.current.query).toBe("batman");
    expect(result.current.movieFilters).toEqual({
      type: "movie",
      year: "2020",
    });
  });

  it("debe llamar router.push con filtros actualizados", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleUpdateFilters({ type: "series", year: "2021" });
    });

    expect(mockPush).toHaveBeenCalledWith("/search?q=batman&type=series&year=2021");
  });

  it('debe eliminar "type" si es "all"', () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleUpdateFilters({ type: "all" });
    });

    // Como type=all se elimina, solo queda year=2020
    expect(mockPush).toHaveBeenCalledWith("/search?q=batman&year=2020");
  });
});
