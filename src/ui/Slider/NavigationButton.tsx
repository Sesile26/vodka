type Props = {
  onClick: () => void;
  direction: string;
};

const NavigationButton: React.FC<Props> = ({ onClick, direction }) => {
  const arrowChar = direction === "left" ? "\u276E" : "\u276F";

  return (
    <button
      onClick={onClick}
      className="
        w-12 h-12       /* width: 48px; height: 48px; */
        rounded-full    /* border-radius: 9999px; */
        bg-[#514477]   /* background-color: #6d28d9; */
        flex            /* display: flex; */
        items-center    /* align-items: center; */
        justify-center  /* justify-content: center; */
        text-white      /* color: #ffffff; */
        text-2xl        /* font-size: 1.5rem; */
        font-bold       /* font-weight: 700; */
        shadow-lg       /* box-shadow: ... */
        focus:outline-none /* outline: none; when focused */
        hover:orange-gradient /* background-color on hover */
        active:bg-purple-800 /* background-color when active/clicked */
        active:translate-y-px /* subtle press effect */
        transition-colors duration-200 ease-in-out /* smooth transition for hover/active */
        cursor-pointer
      "
    >
      {arrowChar}
    </button>
  );
};

export default NavigationButton;
