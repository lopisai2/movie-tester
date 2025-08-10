import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import Footer from "./components/Footer/Footer";
import { FC, ReactNode } from "react";
import { StrapiFinalDataPage } from "@/_interfaces/StrapiData.interface";

const PublicClientLayout: FC<{
  children: ReactNode;
  navbarData: StrapiFinalDataPage | null;
  footerData: StrapiFinalDataPage | null;
  requestDemoDrawerData: StrapiFinalDataPage | null;
  requestVisitDrawerData: StrapiFinalDataPage | null;
  loginDrawerData: StrapiFinalDataPage | null;
}> = ({ children, navbarData, footerData }) => {
  return (
    <>
      <header className='public-header-container'>
        <NavbarWrapper navbarData={navbarData} />
      </header>
      <>{children}</>
      <Footer footerData={footerData} />
    </>
  );
};

export default PublicClientLayout;
