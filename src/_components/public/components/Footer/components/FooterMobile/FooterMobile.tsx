/* eslint-disable @next/next/no-img-element */
"use client";
import CustomBasicAccordion from "@/_UI/Basic/CustomBasicAccordion/CustomBasicAccordion";
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";
import { ArrowDownIcon2 } from "@/_assets/common/arrows/ArrowDownIcon2";
import useRedirectTo from "@/_hooks/useRedirectTo";
import Link from "next/link";
import { FC } from "react";

const FooterMobile: FC = ({}) => {
  const { handleRedirectTo } = useRedirectTo();

  const handleFooterLinkClick = ({ url }: { url: string; code: string }) => {
    return handleRedirectTo(url);
  };

  const CloseIcon = () => <ArrowDownIcon2 className='rotate-180' />;

  const order = [0, 3, 1, 4, 2];

  const acccordionItems =
    []
      .map((item, index) => ({
        label: "item accordion",
        content: (
          <ul>
            {[]?.map((subitem, subindex) => (
              <li
                onClick={() =>
                  handleFooterLinkClick({
                    url: "/",
                    code: "",
                  })
                }
                key={subindex}
              >
                FOOTER ACCORDION ITEM
              </li>
            ))}
          </ul>
        ),
        originalIndex: index,
      }))
      .sort(
        (a, b) =>
          order.indexOf(a.originalIndex) - order.indexOf(b.originalIndex)
      )
      .map((item) => ({ label: item.label, content: item.content })) ?? [];

  return (
    <section className='footer-container footer-mobile'>
      <div className='footer-mobile-logo-social-container'>
        <img
          fetchPriority='low'
          decoding='async'
          className='mt-8 mb-1'
          src={""}
          alt='icon'
        />
        <div className='footer-mobile-main-list-social-networks'>
          {[]?.map((item, index) => (
            <div key={index} className='footer-main-list-social-networks-item'>
              <Link href={"#"} target='_blank'>
                <CustomRemoteSVG
                  fill='var(--white)'
                  stroke='var(--white)'
                  width='28px'
                  height='28px'
                  url={""}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='footer-mobile-main-list'>
        <CustomBasicAccordion
          CloseIcon={CloseIcon}
          Icon={ArrowDownIcon2}
          items={acccordionItems}
          className='footer-main-list-sublists-item'
        />
      </div>
      <div className='footer-mobile-main-list-sublists-item-contact-wrapper'>
        {[].map((item, index) => (
          <div key={index} className='footer-main-list-sublists-item-contact'>
            <CustomRemoteSVG
              fill='var(--white)'
              stroke='var(--white)'
              secondaryFill='var(--white)'
              width='22px'
              height='22px'
              url={""}
            />
            <Link href={"/"}>FOOTER CONTACT LINK</Link>
          </div>
        ))}
      </div>
      {/* <div style={{marginBottom: 200}}/> */}
      <div className='footer-mobile-final-list'>       
        <div className='footer-mobile-terms'>
          {[]?.map((item, index) => (
            <Link key={index} href={"/"}>
              <span className='footer-mail-link'>FOOTER TERMS LINK</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 30, textAlign: "center" }}>
          <Link href={"#"} target='_blank'>
            <CustomRemoteSVG
              defaultColors
              width='92.56px'
              height='24px'
              url={""}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterMobile;
