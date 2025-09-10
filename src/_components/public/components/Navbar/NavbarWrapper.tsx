import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Navbar from "./Navbar";
import { FC } from "react";

const NavbarWrapper: FC<{
  navbarData:  null;
}> = ({ navbarData }) => {
  return (
    <>
      <MobileNavbar navbarData={navbarData} />
      <Navbar navbarData={navbarData} />
    </>
  );
};

export default NavbarWrapper;
