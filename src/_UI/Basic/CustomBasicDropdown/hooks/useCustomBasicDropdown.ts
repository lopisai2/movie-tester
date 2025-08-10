import { useCallback, useEffect, useRef, useState } from "react";
import { useCustomBasicDropdownI } from "../interfaces/interface";

export const useCustomBasicDropdown = ({
  onOpenDropdown,
  showOnHover,
}: useCustomBasicDropdownI) => {
  const [showDropdownList, setShowDropdownList] = useState(false);
  const [persist, setPersist] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleShowDropdownTest = (isVisible: boolean, isPersist?: boolean) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (isVisible) {
      setShowDropdownList(true);
      if (onOpenDropdown) onOpenDropdown();
      if (isPersist) setPersist(true);
      return;
    }
    if (!persist) {
      hideTimeout.current = setTimeout(() => {
        setShowDropdownList(false);
      }, 125); // Retraso de 200ms
    }
  };

  const handleShowOnHover = ({
    isVisible,
    isPersist,
  }: {
    isVisible: boolean;
    isPersist?: boolean;
  }) => {
    if (!showOnHover) return;
    handleShowDropdownTest(isVisible, isPersist);
  };

  // Función para cerrar el dropdown si se hace clic fuera
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (persist) setPersist(false);
        setShowDropdownList(false);
      }
    },
    [persist]
  );

  // Agregar el evento al montar y limpiarlo al desmontar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return {
    dropdownRef,
    showDropdownList,
    handleShowDropdownTest,
    handleShowOnHover,
  };
};
