import logo from "../../assets/logo/logo.svg";
import search from "../../assets/header/search.svg";
import profile from "../../assets/header/profile.svg";
import { useModalStore } from "@/store";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";

const Header = () => {
  const { openModal } = useModalStore();

  const [menuOpen, setMenuOpen] = useState(false);

  const { accessToken, logout, currentUser } = useAuthStore();

  return (
    <div className="px-5 flex justify-center items-center backdrop-blur-[13px] absolute w-full z-[100]">
      <div className="max-w-[1400px] w-full flex gap-5 justify-between py-3">
        <img src={logo} alt="" width={150} />
        <div className="flex gap-3">
          <div className="group flex items-center justify-center gap-2 w-[50px] h-[50px] rounded-[15px] bg-[#161d31] hover:bg-[#192136] transition-all duration-300 cursor-pointer">
            <img
              src={search}
              alt=""
              width={20}
              className="transition-transform group-hover:scale-[1.2]"
            />
          </div>
          {!accessToken && (
            <div
              className="text-white font-black h-[50px] flex items-center justify-center px-[50px] rounded-[15px] bg-[#161d31] hover:bg-[#192136] transition-all duration-300 cursor-pointer"
              onClick={() =>
                openModal("login", {
                  title: "Видалити елемент?",
                  message: "Цю дію неможливо скасувати.",
                  onConfirm: () => console.log("confirmed!"),
                })
              }
            >
              Войти
            </div>
          )}

          {accessToken && (
            <div className="pl-[5px] pr-[20px] flex relative items-center justify-center gap-2 rounded-[15px] bg-[#161d31] hover:bg-[#192136] transition-all duration-300 cursor-pointer">
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#27334b] rounded-[12px]">
                <img
                  src="https://vdkcdn1.com/images/static/currencies/rub.svg"
                  alt=""
                  className="w-[22px] h-[22px]"
                />
              </div>
              <div>
                <div className="text-white text-[14px] font-[700]">0</div>
                <div className="text-[#3c4c6e] text-[10px] font-[900]">RUB</div>
              </div>
            </div>
          )}

          {accessToken && (
            <div
              className="flex relative items-center justify-center gap-2 w-[50px] h-[50px] rounded-[15px] bg-[#161d31] hover:bg-[#192136] transition-all duration-300 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img
                src={profile}
                alt=""
                width={20}
                className="transition-transform"
              />
              {menuOpen && (
                <div className="animate-selectAppear absolute bg-[#121a29] rounded-[25px] w-[215px] top-[calc(100%+25px)] max-h-[400px] py-[15px] px-[10px] shadow-[0_1px_10px_0_#11141b80] right-0">
                  <div
                    className="flex gap-[10px] items-center transition-colors transition-transform duration-500 ease-in-out
                  hover:bg-[#212f44b0] hover:translate-x-[3px] rounded-[15px] cursor-pointer text-[15px] h-[40px] px-[10px] border-2 border-solid border-transparent hover:border-[#192232] transition-colors"
                    onClick={logout}
                  >
                    <div className="w-[26px] h-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.5162 2.60938C9.75 3.28862 9.75 4.53109 9.75 7.01605V18.9839C9.75 21.4688 9.75 22.7113 10.5162 23.3905C11.2824 24.0698 12.4535 23.8655 14.7957 23.4569L17.3186 23.017C19.9126 22.5645 21.2096 22.3383 21.9799 21.3868C22.75 20.4354 22.75 19.0594 22.75 16.3073V9.69266C22.75 6.94056 22.75 5.56452 21.9799 4.61307C21.2096 3.66161 19.9126 3.4354 17.3186 2.98296L14.7957 2.54293C12.4535 2.1344 11.2824 1.93014 10.5162 2.60938ZM13 11.0159C13.4487 11.0159 13.8125 11.3966 13.8125 11.8662V14.1337C13.8125 14.6033 13.4487 14.984 13 14.984C12.5513 14.984 12.1875 14.6033 12.1875 14.1337V11.8662C12.1875 11.3966 12.5513 11.0159 13 11.0159Z"
                          fill="#475774"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.5162 2.60938C9.75 3.28862 9.75 4.53109 9.75 7.01605V18.9839C9.75 21.4688 9.75 22.7113 10.5162 23.3905C11.2824 24.0698 12.4535 23.8655 14.7957 23.4569L17.3186 23.017C19.9126 22.5645 21.2096 22.3383 21.9799 21.3868C22.75 20.4354 22.75 19.0594 22.75 16.3073V9.69266C22.75 6.94056 22.75 5.56452 21.9799 4.61307C21.2096 3.66161 19.9126 3.4354 17.3186 2.98296L14.7957 2.54293C12.4535 2.1344 11.2824 1.93014 10.5162 2.60938ZM13 11.0159C13.4487 11.0159 13.8125 11.3966 13.8125 11.8662V14.1337C13.8125 14.6033 13.4487 14.984 13 14.984C12.5513 14.984 12.1875 14.6033 12.1875 14.1337V11.8662C12.1875 11.3966 12.5513 11.0159 13 11.0159Z"
                          fill="#475774"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.5162 2.60938C9.75 3.28862 9.75 4.53109 9.75 7.01605V18.9839C9.75 21.4688 9.75 22.7113 10.5162 23.3905C11.2824 24.0698 12.4535 23.8655 14.7957 23.4569L17.3186 23.017C19.9126 22.5645 21.2096 22.3383 21.9799 21.3868C22.75 20.4354 22.75 19.0594 22.75 16.3073V9.69266C22.75 6.94056 22.75 5.56452 21.9799 4.61307C21.2096 3.66161 19.9126 3.4354 17.3186 2.98296L14.7957 2.54293C12.4535 2.1344 11.2824 1.93014 10.5162 2.60938ZM13 11.0159C13.4487 11.0159 13.8125 11.3966 13.8125 11.8662V14.1337C13.8125 14.6033 13.4487 14.984 13 14.984C12.5513 14.984 12.1875 14.6033 12.1875 14.1337V11.8662C12.1875 11.3966 12.5513 11.0159 13 11.0159Z"
                          fill="url(#paint0_linear_7094_22)"
                        ></path>
                        <path
                          d="M8.1761 4.875C5.9463 4.87825 4.78399 4.92728 4.04325 5.66802C3.25 6.46127 3.25 7.73799 3.25 10.2914V15.7081C3.25 18.2615 3.25 19.5382 4.04325 20.3316C4.78399 21.0722 5.9463 21.1213 8.1761 21.1246C8.12484 20.4493 8.12491 19.6687 8.12501 18.8249V7.17459C8.12491 6.33087 8.12484 5.55024 8.1761 4.875Z"
                          fill="#475774"
                        ></path>
                        <path
                          d="M8.1761 4.875C5.9463 4.87825 4.78399 4.92728 4.04325 5.66802C3.25 6.46127 3.25 7.73799 3.25 10.2914V15.7081C3.25 18.2615 3.25 19.5382 4.04325 20.3316C4.78399 21.0722 5.9463 21.1213 8.1761 21.1246C8.12484 20.4493 8.12491 19.6687 8.12501 18.8249V7.17459C8.12491 6.33087 8.12484 5.55024 8.1761 4.875Z"
                          fill="#475774"
                        ></path>
                        <path
                          d="M8.1761 4.875C5.9463 4.87825 4.78399 4.92728 4.04325 5.66802C3.25 6.46127 3.25 7.73799 3.25 10.2914V15.7081C3.25 18.2615 3.25 19.5382 4.04325 20.3316C4.78399 21.0722 5.9463 21.1213 8.1761 21.1246C8.12484 20.4493 8.12491 19.6687 8.12501 18.8249V7.17459C8.12491 6.33087 8.12484 5.55024 8.1761 4.875Z"
                          fill="url(#paint1_linear_7094_22)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_7094_22"
                            x1="12.627"
                            y1="2.16663"
                            x2="25.1926"
                            y2="14.4929"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#41C6FF"></stop>
                            <stop offset="1" stop-color="#1A64FC"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_7094_22"
                            x1="4.3402"
                            y1="4.875"
                            x2="11.841"
                            y2="8.5926"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#41C6FF"></stop>
                            <stop offset="1" stop-color="#1A64FC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="font-black text-white items-center">
                      Выйти
                    </div>
                  </div>
                  <div className="absolute bg-[#121a29] rounded-[5px] h-[25px] w-[25px] [transform:rotate(45deg)_translateZ(-1px)] top-[-8px] right-[15px]"></div>
                </div>
              )}
            </div>
          )}

          {/* <div className="flex items-center justify-center gap-2 w-[50px] h-[50px] rounded-[15px] bg-[#161d31] hover:bg-[#192136] transition-all duration-300 cursor-pointer">
            <img src={menu} alt="" width={25} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
