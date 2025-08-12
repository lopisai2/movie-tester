import "./styles.css";
import { FC } from "react";
import { StrapiFinalDataPage } from "@/_interfaces/StrapiData.interface";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import ScrollToTopButton from "../ScrollButton/ScrollButton";

const Footer: FC<{
  showExtraFeatures?: boolean;
  footerData: StrapiFinalDataPage | null;
}> = ({}) => {
  return (
    <footer className='main-footer'>
      <FooterDesktop />
      <FooterMobile />
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
