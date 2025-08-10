"use client";
import { NODE_ENV } from "@/_config";
if (NODE_ENV === "development") {
  // Importar archivo solo en desarrollo
  import("./styles.css");
  import("./navbarDropdown.styles.css");
}
import { StrapiFinalDataPage } from "@/_interfaces/StrapiData.interface";
import { FC } from "react";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";
import ArrowDownIcon from "@/_assets/common/arrows/ArrowDownIcon";
import CustomBasicDropdown from "@/_UI/Basic/CustomBasicDropdown/CustomBasicDropdown";
import { useModalStore } from "@/_store/modal/modal";
//import useRedirectTo from "@/_hooks/useRedirectTo";
import Link from "next/link";

const Navbar: FC<{ navbarData: StrapiFinalDataPage | null }> = ({}) => {
  const toggleDrawerModal = useModalStore((state) => state.toggleModal);

  return (
    <nav className='public-navbar-wrapper'>
      <div className='public-navbar-wrapper-top-gradient' />
      <div className='public-navbar-container'>
        <div className='navbar-container'>
          <Link href={"/"} className='logo-container'></Link>
          <div className='navbar-container-items'>
            <ul className='navbar-container-items-list'>
              {[{}]?.map((item, index) => (
                <li key={index} className='navbar-item-active'>
                  {[].length ? (
                    <CustomBasicDropdown
                      className='custom-dropdown-navlink'
                      triggerClassName='custom-dropdown-navlink-trigger'
                      wrapperClassName='custom-dropdown-navlink-dropdown'
                      showOnHover
                      dropdownChildren={
                        <>
                          {[
                            ...[].map((item, index) => (
                              <Link
                                key={index}
                                className='custom-dropdown-navlink-item'
                                href={"/"}
                              >
                                <CustomRemoteSVG
                                  defaultColors
                                  width='20px'
                                  height='20px'
                                  url={""}
                                />
                                <span>NAVBAR</span>
                              </Link>
                            )),
                          ]}
                        </>
                      }
                    >
                      <span className='custom-dropdown-navlink-trigger-text'>
                        DROPDOWN NAVBAR
                      </span>
                      <ArrowDownIcon className='custom-dropdown-navlink-icon' />
                    </CustomBasicDropdown>
                  ) : (
                    <Link href={"/"}>LINK NAVBAR</Link>
                  )}
                </li>
              ))}
            </ul>
            <div className='navbar-container-items-buttons'>
              {[]?.map((item, index) =>
                true ? (
                  <CustomBasicButton
                    key={index}
                    onClick={() => toggleDrawerModal("demoDrawer", true)}
                    icon={
                      true ? (
                        <CustomRemoteSVG width='24px' height='24px' url={""} />
                      ) : null
                    }
                    className={`${"public-standard-btn navbar-buttons"}`}
                  >
                    BOTON
                  </CustomBasicButton>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
