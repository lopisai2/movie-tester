"use client";
import CustomBasicAccordion from "@/_UI/Basic/CustomBasicAccordion/CustomBasicAccordion";
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";
import { ArrowDownIcon2 } from "@/_assets/common/arrows/ArrowDownIcon2";
import useRedirectTo from "@/_hooks/useRedirectTo";
import Link from "next/link";
import { FC } from "react";
import { footerData } from "../../contants/footerData";

const FooterMobile: FC = ({}) => {
  const { handleRedirectTo } = useRedirectTo();

  const handleFooterLinkClick = ({ url }: { url: string; code: string }) => {
    return handleRedirectTo(url);
  };

  const CloseIcon = () => <ArrowDownIcon2 className='rotate-180' />;

  const acccordionItems = footerData.map((item) => ({
    label: item.title,
    content: (
      <ul>
        {item.links?.map((subitem, subindex) => (
          <li
            onClick={() =>
              handleFooterLinkClick({
                url: "/",
                code: "",
              })
            }
            key={subindex}
          >
            {subitem.label}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <section className='footer-container footer-mobile'>
      <div className='footer-mobile-main-list'>
        <CustomBasicAccordion
          CloseIcon={CloseIcon}
          Icon={ArrowDownIcon2}
          items={acccordionItems}
          className='footer-main-list-sublists-item'
        />
      </div>
      <div className='footer-mobile-main-list-sublists-item-contact-wrapper'>
        {[{}].map((item, index) => (
          <div key={index} className='footer-main-list-sublists-item-contact'>
            <CustomRemoteSVG
              fill='var(--white)'
              stroke='var(--white)'
              secondaryFill='var(--white)'
              width='22px'
              height='22px'
              url={""}
            />
            <Link href={"/"}>MOVIE TESTER {new Date().getFullYear()}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterMobile;
