"use client";
import ArrowDownIcon from "@/_assets/common/arrows/ArrowDownIcon";
import { FC, useRef } from "react";
import { useAccordionContext } from "../context/AccordionContext";
import { AccordionItemI } from "../interfaces/interface";

const AccordionItem: FC<AccordionItemI> = ({
  id,
  item,
  className,
  Icon,
  CloseIcon,
}) => {
  const currentId = id + 1;
  const { selected, setSelected } = useAccordionContext();
  const detailContentRef = useRef<HTMLDivElement>(null);
  const currentSelectedId = selected && selected === currentId;

  const ArrowIcon =
    currentSelectedId && CloseIcon ? CloseIcon : Icon ? Icon : ArrowDownIcon;

    

  return (
    <article className={`custom-basic-accordion-item ${className ?? ""}`}>
      <summary
        onClick={() => setSelected(selected === currentId ? null : currentId)}
      >
        {item.label}
        <ArrowIcon
          className={`transition-transform ${
            currentSelectedId ? "rotate-180" : ""
          }`}
        />
      </summary>
      <div
        className={`custom-basic-accordion-item-content`}
        style={{
          height: currentSelectedId
            ? detailContentRef.current?.scrollHeight || 0
            : 0,
          marginBottom: currentSelectedId ? 16 : 0,
        }}
      >
        <div ref={detailContentRef}>{item.content}</div>
      </div>
    </article>
  );
};

export default AccordionItem;
