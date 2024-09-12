/* eslint-disable react/prop-types */
import discordLogo from "../assets/discord-logo.svg";

const inviteClick = () => {
  window.location.href =
    "https://discord.com/api/oauth2/authorize?client_id=1177191526456098896&permissions=2416126006&scope=bot";
};

function Cta({ animate = false, props }) {
  return (
    <button
      onClick={inviteClick}
      className={`${
        animate ? `${props}` : ""
      } flex items-center justify-center gap-2 bg-bgdark px-8 py-3 rounded-full poppins-medium z-10 text-white`}
    >
      <img className="h-4" src={discordLogo} alt="" />
      <p>INVITE TO SERVER</p>
    </button>
  );
}

export default Cta;
