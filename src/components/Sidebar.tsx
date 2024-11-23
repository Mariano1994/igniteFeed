import coverPhoto from "../assets/cover-profile-photo.avif";
import profilePhoto from "../assets/avatar-1.jpg";
import { PencilSimpleLine } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <aside className=" w-[256px] rounded-lg overflow-hidden bg-black-200">
      <img src={coverPhoto} className="w-[100%] h-[120px] object-cover" />

      <div className="flex flex-col items-center ">
        <div className=" flex flex-col items-center gap-3 mb-5 ">
          <div className=" -mt-8">
            <img
              src={profilePhoto}
              width={70}
              height={70}
              className="rounded-md border-2 border-green-850"
            />
          </div>
          <div className="flex flex-col ga-1 items-center">
            <strong className="font-bold text-md">Mariano Capiliku</strong>
            <span className="text-sm  text-gray-500">Web developer</span>
          </div>
        </div>
      </div>

      <div className=" border border-thin border-gray-300/5"></div>

      <div className=" flex justify-center py-4 ">
        <footer className="group flex items-center gap-2 py-2 px-4 border-2 border-green-850 rounded-lg cursor-pointer  hover:bg-green-850">
          <PencilSimpleLine
            size={20}
            className="text-green-850 group-hover:text-white"
          />
          <a
            href="#"
            className="text-green-850 text-sm font-semibold group-hover:text-white "
          >
            Edit your profile
          </a>
        </footer>
      </div>
    </aside>
  );
};

export default Sidebar;
