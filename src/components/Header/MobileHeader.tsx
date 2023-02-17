import { MdMenu, MdAccountCircle } from "react-icons/md";

export const MobileHeader = () => {
  return (
    <div className="flex items-center justify-between md:hidden">
      <div>
        <MdMenu size={28} />
      </div>
      <div>
        <p className="text-2xl">Recur</p>
      </div>
      <div>
        <MdAccountCircle size={36} />
      </div>
    </div>
  );
};
