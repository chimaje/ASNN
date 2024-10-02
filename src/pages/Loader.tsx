import logo from "../assets/svgs/logo.svg";

const Loader = () => {
  return (
    <div
      className={`w-full h-dvh flex justify-center items-center bg-splash-pattern  bg-no-repeat bg-cover`}
    >
      <img src={logo} alt="Cupin Logo" className="animate-bounce" />
    </div>
  );
};

export default Loader;
