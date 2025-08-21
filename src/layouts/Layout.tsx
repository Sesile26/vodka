import Footer from "@/modules/footer/Footer";
import Header from "../modules/header/Header";
import Modal from "@/modules/modals/loginModal";

type props = {
  children: React.ReactNode;
};

const Layouts = ({ children }: props) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-auto overflow-x-hidden no-scrollbar">
        {children}
      </main>
      <Modal />
    </div>
  );
};

export default Layouts;
