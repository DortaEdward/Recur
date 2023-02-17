import { MdAccountCircle, MdFavorite, MdRemoveRedEye } from "react-icons/md";
import example from '../assets/example.jpg';
import Image from "next/image";
export const Post = () => {
  return (
    <div className="h-72 w-[350px] rounded-lg overflow-hidden shadow-lg mt-4 bg-gray-100 dark:bg-neutral-500">
      <div className="h-[240px] w-full">
        <Image src={example} alt='Placeholder' />
      </div>
      <div className="flex w-full h-[40px] items-center justify-between px-2">
        <div className="flex gap-1">
          <MdAccountCircle size={28} />
          <p>Username</p>
        </div>
        <div className="flex gap-1">
          <div className="flex gap-[4px]">
            <MdFavorite size={20} />
            <p className="text-sm">100</p>
          </div>
          <div className="flex gap-[4px]">
            <MdRemoveRedEye size={20} />
            <p className="text-sm">100</p>
          </div>
        </div>
      </div>
    </div>
  );
};
