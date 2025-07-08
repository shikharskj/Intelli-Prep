import { motion } from "motion/react";

import Logo from "../../assets/svg_375730.svg";

type HeaderProps = {
  onLoginClick: () => void;
};

const Header = ({ onLoginClick }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center mb-16 ">
      <div className="text-xl text-black font-bold flex gap-2">
        <img height={30} width={30} src={Logo} />
        <span>Intelli Prep</span>
      </div>
      <motion.button
        className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
        onClick={onLoginClick}
        whileTap={{ scale: 0.95 }}
      >
        Login / Sign Up
      </motion.button>
    </header>
  );
};

export default Header;
