import { BannerMoves } from "@/components/Banner";
import { Header } from "@/components/Header";
import { useTheBounce } from "@/hooks";
import { Schedule } from "@/shared/screens/Schedule";
import { MovieService } from "@/shared/services/api";
import { MainElement } from "@/shared/styles/globalStyles";
import { MovieResult } from "@/shared/types";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const HomePage: React.FC = () => {
  const { theBounce } = useTheBounce();
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  const page = useMemo(() => {
    return Number(searchParams.get("page") || "1");
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    theBounce(() => {
      console.log("Passando aqui");
      MovieService.getAll(page, search).then((result) => {
        console.log("Passando aqui x2");
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          return;
        }

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
        <Schedule movies={movies} isLoading={isLoading} />
      </MainElement>
    </>
  );
};
