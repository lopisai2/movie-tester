"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const AccordionContext = createContext<{
  selected: null | number;
  setSelected: Dispatch<SetStateAction<null | number>>;
}>({
  selected: null,
  setSelected: () => {},
});

export const AccordionProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<null | number>(null);
  return (
    <AccordionContext.Provider value={{ selected, setSelected }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => {
  return useContext(AccordionContext);
};
