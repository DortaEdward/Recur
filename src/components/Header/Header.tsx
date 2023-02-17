import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

export const Header = () => {
  return (
    <div className="w-full bg-gray-50 text-neutral-900 dark:bg-neutral-800 dark:text-gray-50 flex h-[88px] px-6 items-center justify-center">
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
