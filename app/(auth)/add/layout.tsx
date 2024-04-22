import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Adding Games",
};

const AddLayout: FC<PropsWithChildren> = ({ children }) => children;

export default AddLayout;
