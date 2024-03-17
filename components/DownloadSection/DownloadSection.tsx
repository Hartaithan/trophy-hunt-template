"use client";

import { useSession } from "next-auth/react";
import type { FC } from "react";

const DownloadSection: FC = () => {
  const { data: session } = useSession();
  return <pre>session: {JSON.stringify(session, null, 2)}</pre>;
};

export default DownloadSection;
