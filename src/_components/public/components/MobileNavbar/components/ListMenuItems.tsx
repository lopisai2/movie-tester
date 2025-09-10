"use client";
import useRedirectTo from "@/_hooks/useRedirectTo";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { Dispatch, SetStateAction } from "react";
import { menuItems, secondMenuItems } from "../constants/mobileMenuData";

const ListMenuItems = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenLoginDemoModal: (modalCode: "loginDrawer" | "demoDrawer") => void;
}) => {
  const { handleRedirectTo, pathWithoutLocale } = useRedirectTo();
  const handleSelectItem = (redirectTo: string) => {
    handleRedirectTo(redirectTo);
    setIsOpen(false);
  };

  return (
    <ul
      aria-label='mobile navbar'
      role='list'
      className='mobile-menu-list-items-wrapper'
    >
      {menuItems?.map((item, index) => (
        <li role='listitem' key={index}>
          {
            <CustomBasicButton
              icon={item.icon}
              onClick={() => handleSelectItem(item.url)}
              className={`mobile-menu-list-items-item-button ${
                item.url === pathWithoutLocale ? "selected" : ""
              }`}
            >
              {item.label}
            </CustomBasicButton>
          }
        </li>
      ))}
      {secondMenuItems?.map((item, index) => (
        <li role='listitem' key={index}>
          {
            <CustomBasicButton
              icon={item.icon}
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
