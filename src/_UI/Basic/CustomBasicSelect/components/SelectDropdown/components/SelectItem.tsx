"use client";
import { FC } from "react";
import { useCustomBasicSelectContext } from "../../../context/CustomBasicSelectContext";
import { SelectItemI } from "../../../interfaces/interface";

const SelectItem: FC<SelectItemI> = ({ item }) => {
  const { handleSelectOption, selectValue } = useCustomBasicSelectContext();
  
  return (
    <li
      onClick={() => handleSelectOption({ id: item.id, selectName: item.name })}
      className={`custom-basic-select-options-item ${
        selectValue === item.id ? "selected" : ""
      }`}
    >
      {item.name}
    </li>
  );
};

export default SelectItem;
