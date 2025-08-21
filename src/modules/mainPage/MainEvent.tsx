import banner_main from "@/assets/banner/banners_main_b.webp";
import banner_main_mobile from "@/assets/banner/banners_main_b_mobile.jpg";
import Countdown from "@/ui/Timer";

const MainEvent = () => {
  return (
    <div className="mx-auto max-w-full w-[1440px] px-5 font-[Afolkalips] cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-[3px] pt-[72px]">
      <div className="max-w-[1300px] mx-auto mt-[80px] relative h-[300px] w-full md-custom:h-[130px]">
        <div className="justify-between px-[50px] pt-[10px] hidden md-custom:flex">
          <div className="flex flex-col gap-1 pt-[10px]">
            <div
              className="text-[#4ce892]  text-[48px] leading-[40px] w-full"
              style={{ textShadow: "0 0 30px #4ce892" }}
            >
              Надвигается тьма
            </div>

            <div className="text-[#9dadbf] font-[Afolkalips] text-[30px] font-normal leading-[30px]">
              На водку обрушится неизвестное событие...
            </div>
          </div>
          <Countdown targetDate="2025-08-18T00:00:00" />
        </div>
        <div className="flex flex-col items-center pt-2 gap-[135px] md-custom:hidden">
          <div
            className="text-[#4ce892]  text-[48px] leading-[40px]"
            style={{ textShadow: "0 0 30px #4ce892" }}
          >
            Надвигается тьма
          </div>
          <Countdown targetDate="2025-08-18T00:00:00" />
        </div>
        <img
          src={banner_main_mobile}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-left rounded-[25px] z-[-1]"
        />
        <img
          src={banner_main}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-left rounded-[25px] z-[-1] hidden md-custom:block"
        />
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            height: "calc(100% + 10px)",
            background: "#11192d",
            borderRadius: "25px",
            zIndex: -2,
          }}
        ></div>
      </div>
    </div>
  );
};

export default MainEvent;
