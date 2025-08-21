// components/Modal.tsx
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useModalStore } from "@/store";

import clsx from "clsx";

import LoginBg from "@/assets/modal/loginbg.webp";
import LoginLogo from "@/assets/modal/loginLogo.svg";
import LoginGirl from "@/assets/modal/loginGirl.webp";

import Exit from "@/assets/modal/exit.svg?react";
import { useAuthStore } from "@/store/useAuthStore";

const Modal: React.FC = () => {
  const { open, closeModal, name } = useModalStore();
  const [visible, setVisible] = useState(false);

  const { login } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    const form = {
      login: email,
      password: password,
    };
    await login(form);
  };

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  // Esc закриває
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  if (!open) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-[1000] flex items-center justify-center"
      )}
      aria-modal="true"
      role="dialog"
      onMouseDown={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="absolute inset-0 backdrop-blur-[20px]" />
      <div
        className={clsx(
          "relative h-[700px] w-[1000px]",
          "transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0"
        )}
      >
        {name === "login" && (
          <div className="bg-[#121a29] grid gap-[20px] grid-cols-[calc(45%-10px)_calc(55%-10px)] h-full">
            <div>
              <div className="rounded-[25px]">
                <img
                  src={LoginBg}
                  alt=""
                  className="absolute h-[700px] rounded-[25px] w-[440px] object-cover"
                />
                <img
                  src={LoginLogo}
                  alt=""
                  className="absolute h-[700px] w-[130px] animate-flip-in-y"
                />
              </div>
              <div>
                <img
                  src={LoginGirl}
                  alt=""
                  className={clsx(
                    "absolute w-[490px] bottom-0 animate-slide-bounce"
                  )}
                />
              </div>
            </div>
            <div className="p-[30px] flex flex-col items-center justify-between h-full">
              <div className="flex items-center justify-between relative w-full">
                <div className="text-[28px] font-black text-white">Войти</div>
                <div
                  className="h-[35px] w-[35px] flex items-center justify-center bg-[#192232] rounded-[9px] cursor-pointer text-[#475774] hover:text-white transition-colors duration-300"
                  onClick={closeModal}
                >
                  <Exit />
                </div>
              </div>
              <div className="w-full flex flex-col gap-[20px]">
                <div>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className={clsx(
                      "px-[15px] h-[50px] outline-none rounded-[13px] bg-[#192232] text-white text-[18px] font-[700] w-full",
                      "border-[2px] border-[#192232]",
                      "transition-colors duration-300 hover:border-[#212f44] focus:border-[#212f44]"
                    )}
                  />
                </div>
                <div>
                  <input
                    placeholder="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={clsx(
                      "px-[15px] h-[50px] outline-none rounded-[13px] bg-[#192232] text-white text-[18px] font-[700] w-full",
                      "border-[2px] border-[#192232]",
                      "transition-colors duration-300 hover:border-[#212f44] focus:border-[#212f44]"
                    )}
                  />
                </div>
              </div>

              <div
                className="h-[50px] bg-[linear-gradient(149deg,#41c6ff_8.4%,#1a64fc_80.38%)] shadow-[0_0_25px_0_#3a7cffab] rounded-[15px] cursor-pointer text-white flex items-center justify-center w-full"
                onClick={onSubmit}
              >
                Войти
              </div>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
