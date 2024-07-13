import { MainElement } from "@/shared/styles/globalStyles";
import { Schedule } from "@/shared/screens/Schedule";
import { MovieService } from "@/shared/services/api";
import { BannerMoves } from "@/components/Banner";
import { useMovie } from "@/shared/state/useMovie";
import { Header } from "@/components/Header";
import { MovieResult } from "@/shared/types";
import { useTheBounce } from "@/hooks";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { DetailMovie } from "./components";

export const HomePage: React.FC = () => {
  const { theBounce } = useTheBounce();

  const addMovieInBanner = useMovie((state) => state.addMovieInBanner);
  const selectedMovie = useMovie((state) => state.movieSelected);
  const selectMovie = useMovie((state) => state.selectMovie);

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const search = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  const page = useMemo(() => {
    return Number(searchParams.get("page") || "1");
  }, [searchParams]);

  const handleOpenDetailMove = (movie: MovieResult) => {
    selectMovie(movie);
    setIsOpen(true);
  };

  const handleCloseDetailMove = () => {
    selectMovie(null);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    theBounce(() => {
      MovieService.getAll(page, search).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          return;
        }
        addMovieInBanner(
          result.results[Math.floor(Math.random() * result.results.length - 1)]
        );
        setMovies(result.results);
      });
    });
  }, [search, page]);

  return (
    <>
      <Header
        whenChangingSearchText={(texto) =>
          setSearchParams({ search: texto, page: "1" }, { replace: true })
        }
      />
      <BannerMoves movies={movies} isLoading={isLoading} />
      <MainElement>
        <Schedule
          movies={movies}
          isLoading={isLoading}
          onSelectedMovie={handleOpenDetailMove}
        />
      </MainElement>
      {isOpen && selectedMovie && (
        <DetailMovie
          movie={selectedMovie}
          handleCloseDetailMove={handleCloseDetailMove}
          isOpen={isOpen}
        />
      )}
    </>
  );
};
