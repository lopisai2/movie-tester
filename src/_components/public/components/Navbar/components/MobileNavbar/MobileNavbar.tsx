"use client";
import { FC, useState } from "react";
import DrawerMenu from "./components/DrawerMenu";
import useRedirectTo from "@/_hooks/useRedirectTo";
if (NODE_ENV === "development") {
  // Importar archivo solo en desarrollo
  import("./styles.css");
  import("./drawerNavbar.styles.css");
}
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { StrapiFinalDataPage } from "@/_interfaces/StrapiData.interface";
import HamburgerMenuIcon from "@/_assets/common/shapes/HamburgerMenuIcon";
import { NODE_ENV } from "@/_config";

const MobileNavbar: FC<{
  navbarData: StrapiFinalDataPage | null;
}> = ({}) => {
  const { handleRedirectTo } = useRedirectTo();
  const [showDrawerItems, setShowDrawerItems] = useState(false);
  return (
    <>
      <nav className='navbar-mobile'>
        <div
          onClick={() => handleRedirectTo("/")}
          className='navbar-mobile-logo-container'
        ></div>
        <div className='navbar-mobile-menu-button-container'>
          <CustomBasicButton
            aria-label='hamburger-menu'
            onClick={() => setShowDrawerItems(true)}
            className='public-standard-btn-icon'
            icon={<HamburgerMenuIcon />}
          />
        </div>
      </nav>
      <DrawerMenu
        handleRedirectTo={handleRedirectTo}
        isOpen={showDrawerItems}
        setIsOpen={setShowDrawerItems}
      />
    </>
  );
};

export default MobileNavbar;
