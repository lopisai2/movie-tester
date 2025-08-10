"use client"
// import "./styles.css";
import { AppleIcon } from "@/_assets/common/social/AppleIcon";
import { GooglePlayIcon } from "@/_assets/common/social/GooglePlayIcon";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { FC, useEffect } from "react";
// import { getPublicStrapiData } from "../../services/GET/getPublicStrapiData";
// import { useLocaleStore } from "@/_store/locale/locale";

const SocialApps: FC<{
  width?: string;
  justifyContent?: string;
  flexDirection?: "row" | "column";
  buttonWidth?: string;
  alignSelf?: "flex-start" | "flex-end" | "center";
  marginTop?: string;
}> = ({
  width,
  justifyContent,
  flexDirection,
  buttonWidth,
  alignSelf,
  marginTop,
}) => {
// const {locale} = useLocaleStore()
// const [appStoresData, setAppStoresData] = useState<any>(null);

useEffect(() => {
  // getAppStoresDataHandler();
}, []);


// const getAppStoresDataHandler = async () => {
//   const data = await getPublicStrapiData({ locale });
//   setAppStoresData(data.appStoresData);
// }

  return (
    <div
      className='social-apps-button-container'
      style={{ width, justifyContent, flexDirection, alignSelf, marginTop }}
    >
      <CustomBasicButton
        className='social-apps-button social-apps-apple-button'
        style={{ width: buttonWidth }}
        icon={<AppleIcon />}
        onClick={() => window.open("https://apps.apple.com/sv/app/topia/id1561189564?l=en-GB")}
      >
        <div className='flex-col-div'>
          <small>Consíguelo en</small>
          App Store
        </div>
      </CustomBasicButton>
      <CustomBasicButton
        className='social-apps-button social-apps-apple-button'
        style={{ width: buttonWidth }}
        icon={<GooglePlayIcon />}
        onClick={() => window.open("https://play.google.com/store/apps/details?id=com.topia.app&hl=es_SV&pli=1")}
      >
        <div className='flex-col-div'>
          <small>Disponible en</small>
          Google Play
        </div>
      </CustomBasicButton>
    </div>
  );
};

export default SocialApps;
