import type { FC, PropsWithChildren } from "react";
import Header from "@/components/Header/Header";

const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
