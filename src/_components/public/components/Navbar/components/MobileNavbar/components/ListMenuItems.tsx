"use client";
import useRedirectTo from "@/_hooks/useRedirectTo";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";
import { Dispatch, SetStateAction, useState } from "react";
import SublistItem from "./ListMenuItems/components/SublistItem";

const ListMenuItems = ({
  setIsOpen,
  handleOpenLoginDemoModal,
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
    <>
      <ul className='mobile-menu-list-items-wrapper'>
        {[].map((item, index) => (
          <li key={index}>
            {[].length ? (
              <SublistItem
                index={index}
                item={item}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                handleSelectItem={handleSelectItem}
              />
            ) : (
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
                onClick={() => handleSelectItem("/")}
                className={`mobile-menu-list-items-item-button ${
                  "/" === pathWithoutLocale &&
                  pathWithoutLocale === selectedItem
                    ? "selected"
                    : ""
                }`}
              >
                HOLA MENU
              </CustomBasicButton>
            )}
          </li>
        ))}
        {[]?.map((item, index) => (
          <li key={index}>
            {[].length ? (
              <SublistItem
                index={index}
                item={item}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                handleSelectItem={handleSelectItem}
              />
            ) : (
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
                  "/" === pathWithoutLocale ? "selected" : ""
                }`}
              >
                HOLA MENU 2
              </CustomBasicButton>
            )}
          </li>
        ))}
      </ul>

      <CustomBasicButton
        onClick={() => handleOpenLoginDemoModal("demoDrawer")}
        style={{ marginTop: 10, marginBottom: 25 }}
      >
        DEMO
      </CustomBasicButton>
    </>
  );
};

export default ListMenuItems;
