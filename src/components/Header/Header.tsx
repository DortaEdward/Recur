import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

export const Header = () => {
  return (
    <div className="w-full bg-red-200 flex h-[88px] px-6 items-center justify-center">
      {/* Container */}
      <div className="w-full max-w-[1024px] outline">
        {/* Web */}
        <DesktopHeader />
        {/* Mobile */}
        <MobileHeader />
      </div>
    </div>
  );
};
