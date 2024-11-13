import React from "react";
import { useWindowWidth } from "../useWindowWidth";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const width = useWindowWidth();

  return (
    <div className="sticky top-0 z-50">
      {/* <div className="sticky top-4 h-10 z-50 w-full bg-white"></div> */}
      
      <div className="">
        {width > 1018 ? <DesktopNav /> : <MobileNav />}
      </div>
    </div>
  );
};

export default Nav;
