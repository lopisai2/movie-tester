import { CloseIcon } from "@/_assets/common/errors/CloseIcon";
import { useCustomBasicSelectContext } from "../../context/CustomBasicSelectContext";
import ArrowDownIcon from "@/_assets/common/arrows/ArrowDownIcon";
import { FC, RefObject } from "react";

export interface SelectInputI {
  id: string;
  className?: string;
  placeholder?: string;
  name: string;
  allowClear?: boolean;
  onChange?: (value: string | number) => void;
  value?: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  form?: any;
}

const SelectInput: FC<SelectInputI> = ({
  id,
  allowClear,
  className,
  placeholder,
  name,
  form,
}) => {
  const {
    inputSearchRef,
    searchValue,
    inputValue,
    isOpen,
    handleSearch,
    handleOpenCloseSelect,
    handleClearSearch,
  } = useCustomBasicSelectContext();
  return (
    <div className={`custom-basic-select-input-container ${className ?? ""}`}>
      <input autoComplete='off' type='hidden' {...form?.getInputProps(name)} />
      <input
        id={id}
        ref={inputSearchRef as RefObject<HTMLInputElement>}
        autoComplete='off'
        autoCapitalize='off'
        autoCorrect='off'
        autoSave='off'
        type='text'
        value={inputValue}
        onClick={() => handleOpenCloseSelect(true)}
        onChange={handleSearch}
        placeholder={searchValue ? undefined : placeholder}
        className='custom-basic-select-input '
      />
      <span
        onClick={() => handleOpenCloseSelect(true)}
        className='custom-basic-select-input-text'
      >
        {searchValue}
      </span>
      {(searchValue || (inputValue && isOpen)) && allowClear ? (
        <CloseIcon
          className='cursor-pointer'
          masterFill='var(--blackPlus3)'
          onClick={handleClearSearch}
        />
      ) : (
        <ArrowDownIcon
          fill='black'
          className={`custom-basic-select-arrow ${isOpen ? "active" : ""}`}
        />
      )}
    </div>
  );
};

export default SelectInput;
