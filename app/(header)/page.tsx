import type { FC } from "react";
import PageContainer from "@/components/PageContainer/PageContainer";
import HomeSection from "@/sections/HomeSection/HomeSection";
import { getNotionToken } from "@/utils/config";
import LandingSection from "@/sections/LandingSection/LandingSection";

const Home: FC = () => {
  const token = getNotionToken();
  const isAuth = !!token;
  return (
    <PageContainer w="100%" justify="center" align="center">
      {isAuth ? <HomeSection /> : <LandingSection />}
      {!isAuth && <div id="hide-header" />}
    </PageContainer>
  );
};

export default Home;
