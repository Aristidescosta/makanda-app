import { BannerMoves } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Schedule } from "@/shared/screens/Schedule";
import { MainElement } from "@/shared/styles/globalStyles";

import React from "react";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <BannerMoves />
      <MainElement>
        <Schedule />
      </MainElement>
    </>
  );
};
