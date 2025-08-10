import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import Navbar from "./Navbar";
import { FC } from "react";
import { StrapiFinalDataPage } from "@/_interfaces/StrapiData.interface";

const NavbarWrapper: FC<{
  navbarData: StrapiFinalDataPage | null;
}> = ({ navbarData }) => {
  return (
    <>
      <MobileNavbar navbarData={navbarData} />
      <Navbar navbarData={navbarData} />
    </>
  );
};

export default NavbarWrapper;
