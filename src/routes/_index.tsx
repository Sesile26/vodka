import Layouts from "../layouts/Layout";

import background from "@/assets/background.jpg";
import MainEvent from "@/modules/mainPage/MainEvent";
import LiveBets from "@/modules/mainPage/LiveBets/LiveBets";
import GameSlider from "@/modules/mainPage/GameSlider/GameSlider";
import Tournaments from "@/modules/mainPage/Tournaments";

import NewGame from "@/assets/SliderControls/new.game.svg";
import PopularGames from "@/assets/SliderControls/popularGames.svg";
import FastGames from "@/assets/SliderControls/fastgames.svg";
import EvolutionGames from "@/assets/SliderControls/evolutionGames.png";
import Live88Games from "@/assets/SliderControls/live88.svg";
import PlagmaticGames from "@/assets/SliderControls/pragmaticPlay.png";
import JackPot from "@/modules/mainPage/JackPot";
import MainSlider from "@/modules/mainPage/MainSlider/MainSlider";
import Footer from "@/modules/footer/Footer";
import FilteredGames from "@/modules/mainPage/FilteredGames/FilteredGames";

import { useEffect } from "react";
import useGamesStore from "@/store/useGamesStore";

export default function Index() {
  const { newGames, topGames } = useGamesStore();

  return (
    <Layouts>
      <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-[-2]">
        <img
          src={background}
          alt=""
          className="w-full h-full relative object-cover"
        />
      </div>
      <div className="mx-auto max-w-full w-[1440px] px-5 pb-[50px]">
        <MainEvent />
        <MainSlider />
        <LiveBets />
        <FilteredGames />
        <GameSlider name={"Новые игры"} img={NewGame} games={newGames?.games} />
        <JackPot />
        <GameSlider
          name={"Популярные"}
          img={PopularGames}
          games={newGames?.games}
        />
        <Tournaments />
        <GameSlider
          name={"Быстрые игры"}
          img={FastGames}
          games={newGames?.games}
        />
        <GameSlider
          name={"Evolution Gaming"}
          img={EvolutionGames}
          games={topGames?.games}
        />
        <GameSlider
          name={"Pragmatic Play Live"}
          img={PlagmaticGames}
          games={topGames?.games}
        />
        <GameSlider name={"Live88"} img={Live88Games} games={topGames?.games} />
      </div>
      <Footer />
    </Layouts>
  );
}
