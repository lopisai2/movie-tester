"use client";
import CustomBasicAccordion from "@/_UI/Basic/CustomBasicAccordion/CustomBasicAccordion";
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
      <ul role='list'>
        {item.links?.map((subitem, subindex) => (
          <li
            role='listitem'
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
      <article aria-label='Footer Menus' className='footer-mobile-main-list'>
        <CustomBasicAccordion
          CloseIcon={CloseIcon}
          Icon={ArrowDownIcon2}
          items={acccordionItems}
          className='footer-main-list-sublists-item'
        />
      </article>
      <div className='footer-mobile-main-list-sublists-item-contact-wrapper'>
        {[{}].map((item, index) => (
          <div key={index} className='footer-main-list-sublists-item-contact'>            
            <Link href={"/"}>MOVIE TESTER {new Date().getFullYear()}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterMobile;
