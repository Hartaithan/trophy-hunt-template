import type { FC } from "react";
import PageContainer from "@/components/PageContainer/PageContainer";
import SearchSection from "@/sections/SearchSection/SearchSection";
import { getNotionToken } from "@/utils/config";
import LandingSection from "@/sections/LandingSection/LandingSection";

const Home: FC = () => {
  const token = getNotionToken();
  const isAuth = !!token;
  return (
    <PageContainer w="100%" justify="center" align="center">
      {isAuth ? <SearchSection /> : <LandingSection />}
    </PageContainer>
  );
};

export default Home;
