"use client";
import CloseIcon from "@/_assets/common/shapes/CloseIcon";
import { Dispatch, FC, SetStateAction } from "react";
import ListMenuItems from "./ListMenuItems";
import CustomDrawer from "@/_UI/Basic/CustomBasicDrawer/CustomBasicDrawer";
import { useModalStore } from "@/_store/modal/modal";
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";
import { ThemeToggle } from "@/_components/ThemeToggle";
import Image from "next/image";
import movieTesterLight from "@/_assets/logos/movieTesterLight.png";

export interface DrawerMenuI {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleRedirectTo: (url: string | -1, forceBack?: boolean) => void;
}

const DrawerMenu: FC<DrawerMenuI> = ({ isOpen, setIsOpen }) => {
  const toggleModal = useModalStore((state) => state.toggleModal);

  const handleOpenLoginDemoModal = (
    modalCode: "loginDrawer" | "demoDrawer"
  ) => {
    setIsOpen(false);
    toggleModal(modalCode, true);
  };

  return (
    <CustomDrawer
      className='navbar-mobile-drawer'
      placement='left'
      open={isOpen}
      onClose={() => setIsOpen(false)}
      width={275}
      closeIcon={<CloseIcon />}
    >
      <Image
        src={movieTesterLight.src}
        alt='logo'
        width={65}
        height={65}
        style={{
          borderRadius: "50%",
        }}
        className='navbar-mobile-logo-container'
      />
      <ListMenuItems
        handleOpenLoginDemoModal={handleOpenLoginDemoModal}
        setIsOpen={setIsOpen}
      />
      <div className='mobile-navbar-social-networks-container'>
        {[]?.map((item, index) => (
          <div key={index}>
            <CustomRemoteSVG
              className='mobile-navbar-social-networks-item'
              fill='#FFF'
              stroke='#FFF'
              width='24px'
              height='24px'
              url={""}
            />
          </div>
        ))}
      </div>
      <div className='mobile-drawer-separator' />
      <div className='flex flex-row gap-4 items-center'>
        <span
          style={{
            color: "#fff",
          }}
        >
          Tema:
        </span>
        <ThemeToggle />
      </div>
    </CustomDrawer>
  );
};

export default DrawerMenu;
