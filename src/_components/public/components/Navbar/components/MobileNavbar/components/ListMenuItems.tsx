"use client";
import useRedirectTo from "@/_hooks/useRedirectTo";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";
import { Dispatch, SetStateAction, useState } from "react";
import { menuItems, secondMenuItems } from "../constants/mobileMenuData";

const ListMenuItems = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenLoginDemoModal: (modalCode: "loginDrawer" | "demoDrawer") => void;
}) => {
  const { handleRedirectTo, pathWithoutLocale } = useRedirectTo();
  const [selectedItem, setSelectedItem] = useState<string | null>(
    pathWithoutLocale
  );

  const handleSelectItem = (redirectTo: string) => {
    handleRedirectTo(redirectTo);
    setIsOpen(false);
  };

  return (
    <ul className='mobile-menu-list-items-wrapper'>
      {menuItems?.map((item, index) => (
        <li key={index}>
          {
            <CustomBasicButton
              icon={
                <CustomRemoteSVG
                  width='24px'
                  height='24px'
                  fill='var(--white)'
                  stroke='var(--white)'
                  url={""}
                />
              }
              onClick={() => handleSelectItem(item.url)}
              className={`mobile-menu-list-items-item-button ${
                item.url === pathWithoutLocale &&
                pathWithoutLocale === selectedItem
                  ? "selected"
                  : ""
              }`}
            >
              {item.label}
            </CustomBasicButton>
          }
        </li>
      ))}
      {secondMenuItems?.map((item, index) => (
        <li key={index}>
          {
            <CustomBasicButton
              icon={
                <CustomRemoteSVG
                  width='24px'
                  height='24px'
                  fill='var(--white)'
                  stroke='var(--white)'
                  secondaryFill='none'
                  url={""}
                />
              }
              onClick={() => handleSelectItem("/")}
              className={`mobile-menu-list-items-item-button ${
                item.url === pathWithoutLocale ? "selected" : ""
              }`}
            >
              {item.label}
            </CustomBasicButton>
          }
        </li>
      ))}
    </ul>
  );
};

export default ListMenuItems;
