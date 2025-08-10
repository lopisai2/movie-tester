"use client";
import CloseIcon from "@/_assets/common/shapes/CloseIcon";
import { Dispatch, FC, SetStateAction } from "react";
import ListMenuItems from "./ListMenuItems";
import CustomDrawer from "@/_UI/Basic/CustomBasicDrawer/CustomBasicDrawer";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import UserIcon from "@/_assets/common/avatar/UserIcon";
import { useModalStore } from "@/_store/modal/modal";
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";

export interface DrawerMenuI {  
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleRedirectTo: (url: string | -1, forceBack?: boolean) => void;
}

const DrawerMenu: FC<DrawerMenuI> = ({  
  isOpen,
  setIsOpen,
}) => {
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
      closeIcon={<CloseIcon fill='#FFF' />}
    >
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
      <CustomBasicButton
        onClick={() => handleOpenLoginDemoModal("loginDrawer")}
        style={{ margin: "24px 0" }}
        icon={<UserIcon fill='var(--white)' width='40px' height='40px' />}
        className='mobile-navbar-login-button'
      >
        HOLA
      </CustomBasicButton>
    </CustomDrawer>
  );
};

export default DrawerMenu;
