import logo from "../assets/logo-l.svg";

function Header() {
  return (
    <div
      className="w-full sm:h-24 h-14 flex items-center gap-3 
    text-white px-[8%] sm:px-[10%] lg:px-24 fixed backdrop-blur-sm z-20 "
    >
      <img src={logo} alt="logo" className="sm:h-8 h-6" />
      {/* <p>About</p> */}
    </div>
  );
}

export default Header;
