import type { FC } from "react";
import { Title } from "@mantine/core";
import PageContainer from "@/components/PageContainer/PageContainer";

const Home: FC = () => {
  return (
    <PageContainer>
      <Title>Hello World!</Title>
    </PageContainer>
  );
};

export default Home;
