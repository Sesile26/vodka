import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GameItem from "./GameItem";
import { useState } from "react";

const LiveBetsArr = [
  {
    winType: "Jumbo Win",
    count: "16160",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#ffd700", //yellow
  },
  {
    winType: "Super Win",
    count: "15600",
    cur: "₽",
    userName: "SCH*** x13",
    color: "#32cd32", //green
  },
  {
    winType: "Epic Win",
    count: "28800",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#c71585", //purple
  },
  {
    winType: "Big Win",
    count: "22254",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#4ceab5", //green-light
  },
  {
    winType: "Mega Win",
    count: "11112",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#ff4500", //orange
  },
  {
    winType: "Decent Win",
    count: "50200",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#ff69b4", //pink
  },
  {
    winType: "Good Win",
    count: "8700",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#a2ed4c", //light-green1
  },
  {
    winType: "Minor Win",
    count: "102862.4",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#ffd700", //yellow
  },
  {
    winType: "Good Win",
    count: "11214",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#ffd700", //yellow
  },
  {
    winType: "Mega Win",
    count: "30072",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#ffd700", //yellow
  },
  {
    winType: "Decent Win",
    count: "50200",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#ff69b4", //pink
  },
  {
    winType: "Big Win",
    count: "22254",
    cur: "₽",
    userName: "Tan*** x65.6",
    color: "#4ceab5", //green-light
  },
];

const LiveBets = () => {
  const [winnerList, setWinnerList] = useState(LiveBetsArr);

  const addItem = () => {
    const item = {
      winType: "Jumbo Win",
      count: "16160",
      cur: "₽",
      userName: "Tan*** x65.6",
      color: "#ffd700", //yellow
    };
    setWinnerList([item, ...winnerList]);
  };

  return (
    <div className="max-w-[1300px] mx-auto mt-[50px] bg-[#192136] rounded-[30px] relative">
      <Swiper
        loop={true}
        autoplay={{ delay: 1000 }}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={10}
        className="mySwiper rounded-[30px]"
        // navigation={true}
        // pagination={true}
        // modules={[Pagination]}
      >
        {winnerList.map((bets) => (
          <SwiperSlide>
            <GameItem
              winType={bets.winType}
              count={bets.count}
              cur={bets.cur}
              userName={bets.userName}
              color={bets.color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: "calc(100% + 8px)",
          background: "#11192d",
          borderRadius: "30px",
          zIndex: -2,
        }}
      ></div>
    </div>
  );
};

export default LiveBets;
