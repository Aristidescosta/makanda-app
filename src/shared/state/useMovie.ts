import { create } from "zustand"
import { MovieResult } from "../types"

interface MovieState {
    movieInBanner: MovieResult | null
    movieSelected: MovieResult | null,
}

interface MovieActions {
    selectMovie: (movie: MovieResult | null) => void
    addMovieInBanner: (movie: MovieResult | null) => void
}

const initialState: MovieState = {
    movieInBanner: null,
    movieSelected: null
}

export const useMovie = create<MovieState & MovieActions>((set) => ({
    ...initialState,
    selectMovie: (movie: MovieResult | null) => set(() => ({ movieSelected: movie })),
    addMovieInBanner: (movie: MovieResult | null) => set(() => ({ movieInBanner: movie })),
}))