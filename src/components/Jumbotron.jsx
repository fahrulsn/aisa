import logo from "../assets/logo.svg";
import Cta from "../components/Cta";
import { Reveal } from "../utils/Reveal";
import herobg from "../assets/herobg.svg";

const featureClick = () => {
  window.location.href = "#features";
};

function Jumbotron() {
  return (
    <div
      className={`w-full h-screen bg-bgHero bg-gradient-to-tr from-lgreen to-lpurple flex flex-col gap-4 sm:gap-1 justify-center sm:justify-start sm:pt-24 sm:items-center px-8 sm:px-24 text-white animate-bgGradient `}
    >
      {/* <div
        className="w-full h-full absolute bottom-0 left-0 z-0 flex items-end"
        // style={{ backgroundImage: `url(${herobg})` }}
      >
        <img className="z-0" src={herobg} alt="" />
      </div> */}
      <img
        src={logo}
        alt="logo"
        className={`w-16 absolute sm:relative sm:top-0 sm:right-0 top-[10%] right-10 sm:w-44 mb-3 z-10 animate-zoomInBounce
        animation-delay-100 opacity-0`}
      />
      <Reveal delay={0.3} className="h-auto w-48">
        <h1
          className={`text-5xl sm:text-4xl lg:text-5xl poppins-bold w-42 h-auto sm:pb-5 sm:text-center z-10 sm:py-2`}
        >
          Enhance Your Online <br />
          Community Experience.
        </h1>
      </Reveal>
      <Reveal delay={0.4}>
        <h3 className="text-md sm:text-md lg:text-xl sm:leading-6 lg:leading-5  poppins-regular w-auto sm:py-2 sm:text-center z-10 ">
          Automatically Detect Hate Speech and Offensive Language in Seconds
        </h3>
      </Reveal>
      <Reveal delay={0.5}>
        <p className="text-sm lg:text-md leading-4 sm:leading-6 poppins-light sm:text-center z-10 ">
          Integrate Seamlessly, Monitor Effortlessly. Connect to Discord, and
          let aisa safeguard your server with advanced NLP.
        </p>
      </Reveal>
      <div className="flex flex-col mt-6 sm:flex-row gap-3 justify-center items-center z-10">
        <Reveal delay={0.6}>
          <Cta />
        </Reveal>
        <Reveal delay={0.7}>
          <button
            onClick={featureClick}
            className="w-full bg-white text-bgdark px-8 py-3 rounded-full poppins-medium z-10 "
          >
            FEATURES
          </button>
        </Reveal>
      </div>
    </div>
  );
}

export default Jumbotron;
