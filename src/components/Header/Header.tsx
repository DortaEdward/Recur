import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

export const Header = () => {
  return (
    <div className="relative flex h-[88px] w-full items-center justify-center bg-gray-50 px-6 text-neutral-900 dark:bg-neutral-800 dark:text-gray-50">
      {/* Container */}
      <div className="w-full max-w-[1024px]">
        {/* Web */}
        <DesktopHeader />
        {/* Mobile */}
        <MobileHeader />
      </div>
    </div>
  );
};
