"use client";
import { FC } from "react";
if (NODE_ENV === "development") {
  // Importar archivo solo en desarrollo
  import("./styles.css");
}
import { CustomBasicDropdownI } from "./interfaces/interface";
import { useCustomBasicDropdown } from "./hooks/useCustomBasicDropdown";
import { NODE_ENV } from "@/_config";

const CustomBasicDropdown: FC<CustomBasicDropdownI> = ({
  children,
  triggerClassName,
  dropdownChildren,
  onOpenDropdown,
  className,
  wrapperClassName,
  showOnHover,
}) => {
  const {
    showDropdownList,
    dropdownRef,
    handleShowDropdownTest,
    handleShowOnHover,
  } = useCustomBasicDropdown({
    onOpenDropdown,
    showOnHover,
  });
  return (
    <>
      <div
        ref={dropdownRef}
        onMouseEnter={() => handleShowOnHover({ isVisible: true })}
        onMouseLeave={() => handleShowOnHover({ isVisible: false })}
        onClick={() => handleShowDropdownTest(true, true)}
        className={`${"dropdown-trigger-container"} ${triggerClassName || ""} ${
          showDropdownList ? "active" : ""
        }`}
      >
        {children}
      </div>
      <div
        onMouseEnter={() => handleShowOnHover({ isVisible: true })}
        onMouseLeave={() => handleShowOnHover({ isVisible: false })}
        className={`${"dropdown-menu-list-wrapper"} ${
          wrapperClassName ? wrapperClassName : ""
        } ${showDropdownList ? "active" : ""}`}
      >
        <div
          className={`${"dropdown-menu-list-container"} ${
            className ? className : ""
          }`}
        >
          {dropdownChildren}
        </div>
      </div>
    </>
  );
};

export default CustomBasicDropdown;
