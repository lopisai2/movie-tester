import ArrowDownIcon from "@/_assets/common/arrows/ArrowDownIcon";
import useRedirectTo from "@/_hooks/useRedirectTo";
import { StrapiFinalDataPageItem } from "@/_interfaces/StrapiData.interface";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import CustomRemoteSVG from "@/_UI/Basic/CustomRemoteSVG/CustomRemoteSVG";
import { Dispatch, FC, SetStateAction, useRef } from "react";

const SublistItem: FC<{
  item: StrapiFinalDataPageItem;
  index: number;
  selectedItem: string | null;
  setSelectedItem: Dispatch<SetStateAction<string | null>>;
  handleSelectItem: (redirectTo: string) => void;
}> = ({ item, selectedItem, setSelectedItem, handleSelectItem }) => {
  const detailContentRef = useRef<HTMLUListElement>(null);
  const { pathWithoutLocale } = useRedirectTo();

  const isSelected =
    selectedItem === item.code ||
    item.children?.some((i) => selectedItem === i.redirectTo);

  return (
    <>
      <CustomBasicButton
        onClick={() =>
          setSelectedItem(
            selectedItem === (item?.code ?? "") ? null : item?.code ?? ""
          )
        }
        icon={
          <CustomRemoteSVG
            fill='var(--white)'
            stroke='var(--white)'
            secondaryFill='var(--white)'
            width='24px'
            height='24px'
            url={item.extraImages?.[0]?.srcSet.mobile.url}
          />
        }
        rightIcon={
          <ArrowDownIcon
            className={`mobile-menu-list-items-item-button-icon ${
              isSelected ? "selected" : ""
            }`}
          />
        }
        className={`mobile-menu-list-items-item-button ${
          isSelected ? "selected" : ""
        }`}
      >
        {item.value.toLowerCase() === "+productos"
          ? item.value.replace("+", "Más ")
          : item.value}
      </CustomBasicButton>
      <div
        className='mobile-menu-list-items-item-sublist'
        style={{
          height: isSelected ? detailContentRef.current?.scrollHeight : 0,
          marginBottom: selectedItem ? 8 : 0,
        }}
      >
        <ul
          className='mobile-menu-list-items-item-sublist-list'
          ref={detailContentRef}
        >
          {item.children?.map((subitem) => (
            <li
              key={subitem.code}
              onClick={() => handleSelectItem(subitem.redirectTo ?? "/")}
            >
              <CustomBasicButton
                className={`mobile-menu-list-items-item-button ${
                  subitem.redirectTo === pathWithoutLocale ? "selected" : ""
                }`}
                style={{ height: 40 }}
              >
                {subitem.value}
              </CustomBasicButton>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SublistItem;
