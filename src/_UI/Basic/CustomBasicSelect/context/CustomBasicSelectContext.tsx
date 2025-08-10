"use client";
import {
  ChangeEvent,
  Children,
  createContext,
  isValidElement,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CustomBasicSelectContext = createContext<{
  inputSearchRef: RefObject<HTMLInputElement | null> | null;
  selectData: { id: string; name: string | ReactNode }[];
  searchValue: string | ReactNode;
  inputValue: string;
  selectValue: string;
  isOpen: boolean;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectOption: ({
    id,
    selectName,
  }: {
    id: string;
    selectName: string | ReactNode;
  }) => void;
  handleOpenCloseSelect: (open: boolean) => void;
  handleClearSearch: () => void;
}>({
  inputSearchRef: null,
  selectData: [],
  searchValue: "",
  inputValue: "",
  selectValue: "",
  isOpen: false,
  handleSearch: () => {},
  handleSelectOption: () => {},
  handleOpenCloseSelect: () => {},
  handleClearSearch: () => {},
});

export const CustomBasicSelectContextProvider = ({
  name,
  items,
  form,
  children,
  defaultValue,
  containerRef,
  onChange,
}: {
  name: string;
  defaultValue?: string;
  items: { id: string; name: ReactNode | string }[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  form?: any;
  children: ReactNode;
  value?: string;
  onChange?: (value: string | number) => void;
  containerRef: RefObject<HTMLDivElement | null>;
}) => {
  const [selectData, setSelectData] =
    useState<{ id: string; name: string | ReactNode }[]>(items);
  const [searchValue, setSearchValue] = useState<string | ReactNode>("");
  const [inputValue, setInputValue] = useState(defaultValue ?? "");
  const [selectValue, setSelectValue] = useState(defaultValue ?? "");
  const [isOpen, setIsOpen] = useState(false);

  const firstSelectData =
    useRef<{ id: string; name: string | ReactNode }[]>(items);
  const lastSearchData = useRef<{ id: string; name: string | ReactNode }>({
    id: "",
    name: "",
  });
  const inputSearchRef = useRef<HTMLInputElement>(null);

  // Convierte ReactNode a texto para buscar
  const getTextFromReactNode = (node: ReactNode): string => {
    if (isValidElement(node)) {
      return Children.toArray(node).map(getTextFromReactNode).join("");
    }
    return node?.toString() || "";
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchValue("");
    setInputValue(searchValue);

    if (!searchValue) {
      return setSelectData(firstSelectData.current);
    }

    const filteredData = firstSelectData.current.filter((item) =>
      getTextFromReactNode(item.name)
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setSelectData(filteredData);
  };

  const handleSelectOption = ({
    id,
    selectName,
  }: {
    id: string;
    selectName: string | ReactNode;
  }) => {
    form?.setFieldValue(name, id);
    setSearchValue(selectName);
    lastSearchData.current = {
      id,
      name: selectName,
    };
    setInputValue("");
    handleOpenCloseSelect(false);
    if (onChange) onChange(id);
  };

  const handleOpenCloseSelect = (open: boolean) => {
    const drawerElement = document.getElementById("custom-basic-drawer");
    setIsOpen(open);
    if (open && drawerElement) {
    }
    if (!open && drawerElement) {
    }
  };

  const handleClearSearch = () => {
    form?.setFieldValue(name, "");
    setSearchValue("");
    setSelectValue("");
    setInputValue("");
    setSelectData(firstSelectData.current);
    lastSearchData.current = {
      id: "",
      name: "",
    };
  };

  // Cierra el select al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setInputValue((prev) => (defaultValue === prev ? defaultValue : ""));
        setSearchValue(lastSearchData.current.name);
        setSelectData(firstSelectData.current);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, defaultValue]);
  return (
    <CustomBasicSelectContext.Provider
      value={{
        inputSearchRef,
        selectData,
        searchValue,
        inputValue,
        selectValue,
        isOpen,
        handleSearch,
        handleSelectOption,
        handleOpenCloseSelect,
        handleClearSearch,
      }}
    >
      {children}
    </CustomBasicSelectContext.Provider>
  );
};

export const useCustomBasicSelectContext = () => {
  return useContext(CustomBasicSelectContext);
};
