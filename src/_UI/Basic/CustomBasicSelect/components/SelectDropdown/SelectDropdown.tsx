import { useCustomBasicSelectContext } from "../../context/CustomBasicSelectContext";
import SelectItem from "./components/SelectItem";

const SelectDropdown = () => {
  const { isOpen, selectData } = useCustomBasicSelectContext();
  return (
    <ul
      className={` custom-basic-select-options ${
        isOpen ? "active" : ""
      }`}
    >
      {selectData.length ? (
        selectData.map((item, index) => (
          <SelectItem id={index} item={item} key={index} />
        ))
      ) : (
        <div className=' custom-basic-select-empty-text'>
          Sin resultados
        </div>
      )}
    </ul>
  );
};

export default SelectDropdown;
