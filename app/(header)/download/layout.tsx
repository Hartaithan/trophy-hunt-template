import type { FC, PropsWithChildren } from "react";
import { getServerSession } from "@/utils/session";
import SessionProvider from "../../../providers/SessionProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Template",
};

const DownloadLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default DownloadLayout;
