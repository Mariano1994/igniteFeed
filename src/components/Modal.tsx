interface ChildrenProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ChildrenProps) => {
  return (
    <div className="z-20 fixed top-0 left-0 flex justify-center items-center my-auto w-full h-screen bg-app/90 ">
      {children}
    </div>
  );
};

export default Modal;
