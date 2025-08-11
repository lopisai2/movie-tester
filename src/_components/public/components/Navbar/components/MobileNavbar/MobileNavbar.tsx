"use client";
import "./styles.css";
import "./drawerNavbar.styles.css";
import { FC, useState } from "react";
import DrawerMenu from "./components/DrawerMenu";
import useRedirectTo from "@/_hooks/useRedirectTo";
import movieTesterLight from "@/_assets/logos/movieTesterLight.png";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { StrapiFinalDataPage } from "@/_interfaces/StrapiData.interface";
import HamburgerMenuIcon from "@/_assets/common/shapes/HamburgerMenuIcon";
import Image from "next/image";

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
        >
          <Image
            src={movieTesterLight.src}
            alt='logo'
            width={130}
            height={100}
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
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
