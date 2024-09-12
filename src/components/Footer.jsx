import Cta from "../components/Cta";
import logo from "../assets/logo-l.svg";
import footerBg from "../assets/footer-bg.svg";
import { Reveal } from "../utils/Reveal";

function Footer() {
  return (
    <>
      <div className="relative bg-bgdark w-full flex h-[40vh] items-center p-[10%]">
        <Reveal className2="h-auto" className1="h-auto" delay={0.3}>
          <h1 className="text-center sm:text-left text-3xl sm:text-4xl md:text-5xl text-white poppins-semibold lg:w-[55%] pb-2">
            Ready to Transform Your Online Community?
          </h1>
        </Reveal>
        <div
          className="absolute w-full h-[95%] bg-contain bg-no-repeat left-0 -bottom-[95%]"
          // style={{ backgroundImage: `url(${footerBg})` }}
        >
          <img src={footerBg} alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col bg-bgHero animate-bgGradient bg-gradient-to-tr from-lgreen to-lpurple">
        <div className=" flex flex-row w-full justify-end pl-[10%] pr-[20%] items-center h-[40vh]">
          <div className="flex flex-col sm:flex-row justify-center items-center text-white gap-8">
            <Reveal>
              <p className="text-2xl poppins-semibold">...try now!</p>
            </Reveal>
            <Reveal delay={0.6}>
              <Cta />
            </Reveal>
          </div>
        </div>
        <div className="h-24 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:justify-between sm:px-24 text-white">
          <img className="h-1/3" src={logo} alt="" />
          <p className="text-sm sm:text-md poppins-light">
            © 2024 - fahrulsn • All rights have been tokenized
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
