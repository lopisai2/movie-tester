import { ReactNode } from "react";
import PublicClientLayout from "./PublicClientLayout";

export default async function PublicLayoutWrapper({
  children,
}: {
  children: ReactNode;
  params: { id: string; lang: string };
}) {
  return <PublicClientLayout>{children}</PublicClientLayout>;
}
