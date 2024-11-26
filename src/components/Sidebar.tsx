import coverPhoto from "../assets/cover-profile-photo.avif";
import profilePhoto from "../assets/avatar-1.jpg";
import Avatar from "./Avatar";
import CreateNewPostButton from "./CreateNewPostButton";

const Sidebar = () => {
  return (
    <aside className=" w-[256px] rounded-lg overflow-hidden bg-black-200 ">
      <img src={coverPhoto} className="w-[100%] h-[120px] object-cover" />

      <div className="flex flex-col items-center ">
        <div className=" flex flex-col items-center gap-3 mb-5 ">
          <div className=" -mt-8">
            <Avatar
              userImage={profilePhoto}
              width={70}
              height={70}
              isWithBorder
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
        <CreateNewPostButton />
      </div>
    </aside>
  );
};

export default Sidebar;
