import React from "react";
import styles from "./styles.module.css";
import CloseIcon from "@/_assets/common/shapes/CloseIcon";
import CustomBasicImage from "../CustomBasicImagePlaceholder/components/CustomBasicImage";

const CustomBasicModal = () => {
  return (
    <div className={styles["basic-modal-overlay"]}>
      <div className={styles["basic-modal-content"]}>
        <header className={styles["basic-modal-header"]}>
          <h2>Administración de Contratos</h2>
          <CloseIcon />
        </header>

        <div className="basic-modal-body">
          <CustomBasicImage
            url={"https://strapi.expresate.io/uploads/01_mall_modal_bf245d9574.png"}
            // className="public-topia-mall-special-modules-item-container-image"
            className="public-topia-mall-special-modules-item-container-image-modal"
            alt="tenantCommodityItem"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomBasicModal;
