"use client";
import useRedirectTo from "@/_hooks/useRedirectTo";
import Link from "next/link";
import { FC } from "react";
import { footerData } from "../../contants/footerData";

const FooterDesktop: FC = ({}) => {
  const { handleRedirectTo } = useRedirectTo();
  const handleFooterLinkClick = ({ url }: { url: string; code: string }) => {
    return handleRedirectTo(url);
  };

  return (
    <section className='footer-container footer-desktop'>
      <div className='footer-main-list'>
        <div className='footer-main-list-sublists'>
          {footerData?.map((item, index) => (
            <div className='footer-main-list-sublists-item' key={index}>
              <span style={{ marginBottom: 17 }}>{item.title}</span>
              <ul
                style={{
                  gap: 6,
                }}
                className='footer-main-list-sublists-item-sublist-container'
              >
                {item.links?.map((subitem, subindex) => (
                  <li key={subindex}>
                    {
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
                        {subitem.label}
                      </Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterDesktop;
