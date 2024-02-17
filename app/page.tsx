"use client";

import { addGame } from "@/actions/add-game";
import { Button } from "@mantine/core";
import type { FC } from "react";

const Home: FC = () => {
  return <Button onClick={() => addGame()}>Click me!</Button>;
};

export default Home;
