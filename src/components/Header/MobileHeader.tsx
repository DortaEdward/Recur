import { MdMenu, MdAccountCircle, MdClose } from "react-icons/md";
import { useState } from "react";

export const MobileHeader = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className="transition ease-in-out duration-300 ">
      <div className="relative flex items-center justify-between md:hidden">
        <div>
          <MdMenu size={28} onClick={() => setToggleMenu(true)} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Recur</h1>
        </div>
        <div>
          <MdAccountCircle size={36} />
        </div>
      </div>
      {
        toggleMenu
        ?
        <div className="absolute top-0 left-0 min-w-screen w-full min-h-screen bg-gray-50 dark:bg-neutral-800 px-6">
          <MdClose className="mt-[1.8rem]" size={28} onClick={() => setToggleMenu(false)} />
          <div className="my-4"></div>
          <nav>
            <ul className="flex flex-col gap-4">
              <li className="text-2xl border-b-2 py-2">Home</li>
              <li className="text-2xl border-b-2 py-2">Explore</li>
              <li className="text-2xl border-b-2 py-2">Trending</li>
              <li className="text-2xl border-b-2 py-2">Friends</li>
            </ul>
          </nav>
        </div>
        :
        <></>
      }
    </div>
  );
};
