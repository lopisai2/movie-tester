"use client";
import "./styles.css";
import "./drawerNavbar.styles.css";
import { FC, Suspense, useEffect, useState } from "react";
import DrawerMenu from "./components/DrawerMenu";
import useRedirectTo from "@/_hooks/useRedirectTo";
import movieTesterLight from "@/_assets/logos/movieTesterLight.png";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import HamburgerMenuIcon from "@/_assets/common/shapes/HamburgerMenuIcon";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import SearchBar from "../SearchBar/SearchBar";

const MobileNavbar: FC<{
  navbarData: null;
}> = ({}) => {
  const { handleRedirectTo } = useRedirectTo();
  const [showDrawerItems, setShowDrawerItems] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showSearchBar &&
        !document
          .getElementById("mobile-search-bar")
          ?.contains(event.target as Node)
      ) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSearchBar]);

  //Ocultar el searchBar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowSearchBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            width={65}
            height={65}
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
        <div className='navbar-mobile-menu-button-container'>
          <CustomBasicButton
            aria-label='hamburger-menu'
            onClick={() => setShowSearchBar(true)}
            className='public-standard-btn-icon'
            icon={<SearchIcon color="#fff" />}
          />
          <CustomBasicButton
            aria-label='hamburger-menu'
            onClick={() => setShowDrawerItems(true)}
            className='public-standard-btn-icon'
            icon={<HamburgerMenuIcon />}
          />
        </div>
      </nav>
      <Suspense>
        {showSearchBar && (
          <div id='mobile-search-bar' className='top-search-bar-container'>
            <SearchBar />
          </div>
        )}
      </Suspense>
      <DrawerMenu
        handleRedirectTo={handleRedirectTo}
        isOpen={showDrawerItems}
        setIsOpen={setShowDrawerItems}
      />
    </>
  );
};

export default MobileNavbar;
