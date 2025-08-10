"use client";
if (NODE_ENV === "development") {
  // Importar archivo solo en desarrollo
  import("./styles.css");
}
import { FC, useRef } from "react";
import { CustomBasicSelectI } from "./interfaces/interface";
import { CustomBasicSelectContextProvider } from "./context/CustomBasicSelectContext";
import React from "react";
import SelectInput from "./components/SelectInput/SelectInput";
import SelectDropdown from "./components/SelectDropdown/SelectDropdown";
import { NODE_ENV } from "@/_config";

const CustomBasicSelect: FC<CustomBasicSelectI> = ({
  id,
  className,
  items,
  form,
  label,
  placeholder = "Selecciona un elemento",
  name,
  value,
  defaultValue,
  onChange,
  allowClear = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <CustomBasicSelectContextProvider
      name={name}
      form={form}
      containerRef={containerRef}
      onChange={onChange}
      items={items}
      defaultValue={defaultValue}
    >
      <div className='custom-basic-select-wrapper' ref={containerRef}>
        <label htmlFor={name}>{label}</label>
        <SelectInput
          allowClear={allowClear}
          id={id}
          className={className}
          placeholder={placeholder}
          name={name}
          form={form}
          value={value}
        />
        {form?.errors[name] && (
          <div style={{ marginTop: 4 }} className='error-message'>
            {form.errors[name]}
          </div>
        )}
        <SelectDropdown />
      </div>
    </CustomBasicSelectContextProvider>
  );
};

export default CustomBasicSelect;
