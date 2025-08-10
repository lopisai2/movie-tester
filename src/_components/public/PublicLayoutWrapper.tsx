import { ReactNode } from "react";
import PublicClientLayout from "./PublicClientLayout";

export default async function PublicLayoutWrapper({
  children,
}: {
  children: ReactNode;
  params: { id: string; lang: string };
}) {
  const {
    navbarData,
    footerData,
    requestDemoDrawerData,
    requestVisitDrawerData,
    loginDrawerData,
  } = {
    navbarData: null,
    footerData: null,
    requestDemoDrawerData: null,
    requestVisitDrawerData: null,
    loginDrawerData: null,
  };

  return (
    <>
      <PublicClientLayout
        navbarData={navbarData}
        footerData={footerData}
        requestDemoDrawerData={requestDemoDrawerData}
        requestVisitDrawerData={requestVisitDrawerData}
        loginDrawerData={loginDrawerData}
      >
        {children}
      </PublicClientLayout>
    </>
  );
}
