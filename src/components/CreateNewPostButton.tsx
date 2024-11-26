import { Plus } from "@phosphor-icons/react";
import Modal from "./Modal";
import CreatePostModalContent from "./CreatePostModalContent";
import { useState } from "react";

const CreateNewPostButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="group flex items-center justify-center gap-1 py-2 px-4 border-2 border-green-850 rounded-lg cursor-pointer  hover:bg-green-850"
      >
        <Plus size={16} className="text-green-850 group-hover:text-white" />
        <a
          href="#"
          className="text-green-850 text-sm font-semibold group-hover:text-white "
        >
          New post
        </a>
      </button>

      {showModal && (
        <Modal>
          <CreatePostModalContent onCancelNewPost={setShowModal} />
        </Modal>
      )}
    </>
  );
};
export default CreateNewPostButton;
