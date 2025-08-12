// Importar archivo solo en desarrollo
import "./styles.css";
import { FC } from "react";
import { CustomBasicAccordionI } from "./interfaces/interface";
import AccordionItem from "./components/AccordionItem";
import { AccordionProvider } from "./context/AccordionContext";

const CustomBasicAccordion: FC<CustomBasicAccordionI> = ({
  className,
  items,
  Icon,
  CloseIcon,
}) => {
  return (
    <AccordionProvider>
      <section aria-label='accordion'>
        {items.map((item, index) => (
          <AccordionItem
            Icon={Icon}
            CloseIcon={CloseIcon}
            id={index}
            item={item}
            key={index}
            className={className}
          />
        ))}
      </section>
    </AccordionProvider>
  );
};

export default CustomBasicAccordion;
