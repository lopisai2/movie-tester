"use client";
/* eslint-disable @next/next/no-img-element */
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";
import useRedirectTo from "@/_hooks/useRedirectTo";
import Link from "next/link";
import { FC } from "react";

const FooterDesktop: FC = ({}) => {
  const { handleRedirectTo } = useRedirectTo();
  const handleFooterLinkClick = ({ url }: { url: string; code: string }) => {
    return handleRedirectTo(url);
  };

  return (
    <section className='footer-container footer-desktop'>
      <div className='footer-main-list'>
        <div className='footer-main-list-privacity-social-container'>
          <div className='footer-main-list-privacity'>
            <img
              fetchPriority='low'
              decoding='async'
              style={{ marginBottom: 16 }}
              src={""}
              alt='icon'
            />
          </div>
          <div className='footer-main-list-social-networks'>
            <p>FOOTER</p>
            <div className='footer-main-list-social-networks-items'>
              {[]?.map((item, index) => (
                <Link href={"#"} target='_blank' key={index}>
                  <div className='footer-main-list-social-networks-item'>
                    <CustomRemoteSVG
                      fill='var(--white)'
                      stroke='var(--white)'
                      width='34px'
                      height='34px'
                      url={""}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='footer-main-list-sublists'>
          {[]?.map((item, index) => (
            <div className='footer-main-list-sublists-item' key={index}>
              <span style={{ marginBottom: 17 }}>FOOTER SUBLIST</span>
              <ul
                style={{
                  gap: 6,
                }}
                className='footer-main-list-sublists-item-sublist-container'
              >
                {[]?.map((subitem, subindex) => (
                  <li key={subindex}>
                    {
                      <>
                        {
                          <CustomRemoteSVG
                            defaultColors
                            width='20px'
                            height='20px'
                            url={""}
                          />
                        }
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            handleFooterLinkClick({
                              url: "/",
                              code: "",
                            });
                          }}
                          href={"/"}
                        >
                          FOOTER SUBLIST LINK
                        </Link>
                      </>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='footer-final-list'>
        <div className='footer-final-list-container'>          
          <div className='footer-terms'>
            {[]?.map((item, index) => (
              <span
                style={{ borderRightWidth: index === 0 ? 0 : 1 }}
                key={index}
                className='footer-mail-link'
              >
                <Link
                  style={{
                    color: "var(--secondaryPlus4)",
                  }}
                  href={"#"}
                  target='_blank'
                >
                  FOOTER FINAL LINK
                </Link>
              </span>
            ))}
          </div>
          <div>
            <Link href={"#"} target='_blank'>
              <CustomRemoteSVG
                defaultColors
                width='101px'
                height='24px'
                url={""}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterDesktop;
