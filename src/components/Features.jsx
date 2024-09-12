import ft1 from "../assets/ft1.png";
import ft2 from "../assets/ft2.png";
import ft3 from "../assets/ft3.png";
// import ftbg from "../assets/x-logo.svg";
import { Reveal } from "../utils/Reveal";

const featureData = [
  {
    name: "Hate Speech and Abusive Detection.",
    img: ft1,
    descr:
      "Automatically detects and flags hate speech and abusive language in Indonesian, helping to maintain a safe and respectful online community.",
  },
  {
    name: "Automatic Warnings.",
    img: ft2,
    descr:
      "Sends automatic warnings to users who send inappropriate or offensive messages, encouraging better behavior and helping to maintain a positive and respectful environment within your online community.",
  },
  {
    name: "Mute Repeated Offenders.",
    img: ft3,
    descr:
      "Automatically mutes users who repeatedly violate the rules, preventing further messages and maintaining a respectful community.",
  },
];

function Features() {
  return (
    <div
      id="features"
      className="relative h-auto bg-bgdark border-none px-[10%] text-white py-1
   bg-ftbgpos bg-ftbgsize sm:bg-repeat-x"
      // style={{ backgroundImage: `url(${ftbg})` }}
    >
      {featureData.map((feature, index) => (
        <div
          key={index}
          className={`w-full flex py-16 gap-5 sm:gap-0 ${
            index % 2 === 0
              ? "flex-col-reverse sm:flex-row text-left"
              : "flex-col-reverse sm:flex-row-reverse text-right"
          }`}
        >
          <div
            className={`sm:w-1/2 flex justify-center flex-col z-10${
              index % 2 === 0 ? "items-start" : "items-end"
            }`}
          >
            <Reveal>
              <h1
                className={`text-2xl sm:text-2xl md:text-3xl poppins-bold w-full `}
              >
                {feature.name}
              </h1>
              <p className={`text-md md:text-md lg:text-lg mt-4 w-full `}>
                {feature.descr}
              </p>
            </Reveal>
          </div>

          <div className={`flex sm:w-1/2 items-center justify-center z-10`}>
            <Reveal
              className1="flex w-full"
              className2={`flex w-full ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              } `}
              width="auto"
              delay={0.5}
            >
              <img
                className="w-[50%] sm:w-[70%] xl:w-[90%]"
                src={feature.img}
                alt=""
              />
            </Reveal>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
