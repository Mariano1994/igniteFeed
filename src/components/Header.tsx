import igniteLogo from "../assets/ignite-logo.svg";

const Header = () => {
  return (
    <div className=" flex justify-center py-5 bg-black-200">
      <div className="flex items-center gap-2 ">
        <img src={igniteLogo} alt="ignite logo" className="h-10" />
        <span className="font-bold text-lg">Ignite Feed</span>
      </div>
    </div>
  );
};

export default Header;
