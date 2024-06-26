import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import type { Metadata, Viewport } from "next";
import type { FC, PropsWithChildren } from "react";
import { ColorSchemeScript, Container } from "@mantine/core";
import AppProviders from "@/providers/AppProviders";
import { Montserrat } from "next/font/google";
import { BASE_URL } from "@/constants/variables";

const font = Montserrat({
  subsets: ["latin"],
  fallback: ["Arial"],
});

export const metadata: Metadata = {
  title: {
    default: "Trophy Hunt Template",
    template: "%s | Trophy Hunt Template",
  },
  description:
    "Trophy Hunting Backlog Template for Notion, Platinum Backlog, Trophy Backlog, Trophy Hunting",
  applicationName: "Trophy Hunt",
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "trophy",
    "trophies",
    "rare trophies",
    "backlog",
    "trophy backlog",
    "trophy tracking",
    "trophy hunting app",
    "gaming",
    "platinum",
    "platinum backlog",
    "playstation",
    "playstation games",
    "trophy guide",
    "trophy hunting",
    "game tracker",
    "trophy tracker",
    "backlog tracker",
    "notion template",
    "trophy manager",
    "trophies manager",
  ],
  robots: "all",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    images: "/opengraph-image.png",
    siteName: "Trophy Hunt Template",
    url: BASE_URL,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#132b2c",
  colorScheme: "dark",
};

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <AppProviders fontFamily={font.style.fontFamily}>
          <Container id="main">{children}</Container>
        </AppProviders>
      </body>
    </html>
  );
};

export default MainLayout;
