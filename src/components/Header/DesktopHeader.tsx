import { MdAccountCircle } from "react-icons/md";
export const DesktopHeader = () => {
  const user = true;
  return (
    <div className="hidden items-center justify-between md:flex">
      <div>
        <p className="text-2xl">Recur</p>
      </div>
      <div className="flex items-center gap-2">
        <nav>Nav</nav>
        <div>
          {user ? (
            <div className="flex items-center gap-1">
              <MdAccountCircle size={36} />
              <div className="bg-blue-200 px-6 rounded-md cursor-pointer" onClick={() => console.log('Working')}>
                <p className="py-2">Upload</p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
