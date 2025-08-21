import Layouts from "../layouts/Layout";
import Footer from "@/modules/footer/Footer";
import Filters from "@/modules/mainPage/FilteredGames/Filters";

import Vager from "@/assets/GamePage/wager.svg";
import Logo from "@/assets/logo/logo.svg";
import { useEffect, useState } from "react";
import useGamesStore from "@/store/useGamesStore";
import Search from "@/modules/mainPage/FilteredGames/Search";
import GameList from "@/modules/mainPage/FilteredGames/GameList";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const { iFrameUrl } = useGamesStore();
  const navigate = useNavigate();
  const [isOpenIframe, setIsOpenIframe] = useState(iFrameUrl);

  useEffect(() => {
    console.log(iFrameUrl, "iFrameUrl");
    if (iFrameUrl) {
      setIsOpenIframe(iFrameUrl);
    }
  }, [iFrameUrl]);

  const closeGame = () => {
    setIsOpenIframe("");
    navigate("/game");
  };

  return (
    <Layouts>
      <div className="bg-[#0c111c]">
        <div className="mx-auto max-w-full w-[1440px] px-5 pb-[50px]">
          <div className="pt-[72px]">
            <Filters maxWidth="1050" />
          </div>
          {isOpenIframe && (
            <div className="w-[1300px] bg-[#192232] rounded-[25px] px-[10px] h-[775px] mt-[20px] ">
              <div className="flex items-center justify-between px-[10px]">
                <div className="p-[10px] flex gap-[10px]">
                  <img src={Vager} alt="" />
                  <div>
                    <div className="text-[12px] font-[700] text-white">
                      game naem
                    </div>
                    <div className="text-[9px] font-[700] text-white">
                      game provider
                    </div>
                  </div>
                </div>
                <div>
                  <img src={Logo} alt="" className="w-[75px] h-[25px]" />
                </div>
                <div className="flex gap-[10px]">
                  <div className="h-[16px] w-[16px] text-[#475774] hover:text-[#2b90fe] transition-colors duration-300 cursor-pointer">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 614 616"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_8265_2)">
                        <path
                          d="M183.333 266.667C229.357 266.667 266.667 229.357 266.667 183.333V33.3333C266.667 14.924 251.743 0 233.333 0H200C181.591 0 166.667 14.924 166.667 33.3333V166.667H33.3333C14.924 166.667 0 181.591 0 200V233.333C0 251.743 14.924 266.667 33.3333 266.667H183.333Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M430.333 266.667C384.31 266.667 347 229.357 347 183.333V33.3333C347 14.924 361.923 0 380.333 0H413.667C432.077 0 447 14.924 447 33.3333V166.667H580.333C598.743 166.667 613.667 181.591 613.667 200V233.333C613.667 251.743 598.743 266.667 580.333 266.667H430.333Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M430.333 266.667C384.31 266.667 347 229.357 347 183.333V33.3333C347 14.924 361.923 0 380.333 0H413.667C432.077 0 447 14.924 447 33.3333V166.667H580.333C598.743 166.667 613.667 181.591 613.667 200V233.333C613.667 251.743 598.743 266.667 580.333 266.667H430.333Z"
                          stroke="currentColor"
                        ></path>
                        <path
                          d="M430.333 349C384.31 349 347 386.31 347 432.333V582.333C347 600.743 361.923 615.667 380.333 615.667H413.667C432.077 615.667 447 600.743 447 582.333V449H580.333C598.743 449 613.667 434.077 613.667 415.667V382.333C613.667 363.923 598.743 349 580.333 349H430.333Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M266.667 432.333C266.667 386.31 229.357 349 183.333 349H33.3333C14.924 349 0 363.923 0 382.333V415.667C0 434.077 14.924 449 33.3333 449H166.667V582.333C166.667 600.743 181.591 615.667 200 615.667H233.333C251.743 615.667 266.667 600.743 266.667 582.333V432.333Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_8265_2">
                          <rect width="614" height="616" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="h-[16px] w-[16px] text-[#475774] hover:text-[#2b90fe] transition-colors duration-300 cursor-pointer"
                    onClick={closeGame}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2911_3)">
                        <rect
                          x="0.0078125"
                          y="3.2168"
                          width="4.53292"
                          height="30.0154"
                          rx="2.26646"
                          transform="rotate(-45 0.0078125 3.2168)"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="3.21289"
                          y="24.4375"
                          width="4.53292"
                          height="30.0154"
                          rx="2.26646"
                          transform="rotate(-135 3.21289 24.4375)"
                          fill="currentColor"
                        ></rect>
                      </g>
                      <defs>
                        <clipPath id="clip0_2911_3">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <iframe src={iFrameUrl} width={1280} height={720}></iframe>
            </div>
          )}
          {!isOpenIframe && (
            <div>
              <div className="max-w-[1300px] bg-[#192136] rounded-[30px] pt-[10px] px-[20px] pb-[30px] mt-[20px]">
                <Search />
                <GameList />
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </Layouts>
  );
}
