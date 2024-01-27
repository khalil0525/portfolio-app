"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import "./scrollbar.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { usePathname } from "next/navigation";
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Khalil Collins",
// 	description: "Generated by create next app",
// };
interface PageHeaders {
  [key: string]: [string, string];
}
const pageHeaders: PageHeaders = {
  home: ["Khalil", "Collins"],
  about: ["about", "me"],
  skills: ["my", "skills"],
  projects: ["my", "projects"],
  contact: ["contact", "me"],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  console.log(pathName);
  const isStartPage = pathName === "/";
  let page = pathName.slice(1);

  return (
    <>
      <html lang="en">
        <body className={sourceCodePro.className}>
          <CacheProvider>
            <ChakraProvider>
              <Box>
                <Flex
                  h="100vh"
                  w="100vw"
                  direction="column"
                  align="center"
                  justify="flex-start"
                  style={{
                    objectFit: "contain",
                    gap: "20px",
                  }}
                  bgColor="#000">
                  {!isStartPage && <NavBar />}
                  <TransitionGroup
                    component={null}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}>
                    <CSSTransition
                      classNames="page"
                      timeout={{ enter: 300, exit: 300 }}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}>
                      <Flex
                        direction="column"
                        overflowY={["auto", "auto", "auto", "auto"]}
                        w="100%"
                        h="100%"
                        align={
                          pathName === "/home"
                            ? ["center", "center", "center", "center"]
                            : ["center", "center", "center", "flex-start"]
                        }>
                        {!isStartPage && page !== "home" && (
                          <Flex
                            direction="column"
                            w="100%"
                            p={[
                              "12px",
                              "12px",
                              "0px 36px",
                              "6px 36px",
                              "6px 124px",
                            ]}
                            align={
                              pathName === "/home"
                                ? ["center", "center", "center", "center"]
                                : ["center", "center", "center", "flex-start"]
                            }>
                            {" "}
                            <Text
                              as="h1"
                              size="3xl"
                              color="#C1CED9"
                              fontSize={[
                                "24px",
                                "24px",
                                "32px",
                                "48px",
                                "64px",
                              ]}
                              fontWeight="bold"
                              letterSpacing="-4px"
                              mb="16px">
                              {pageHeaders[page][0]}.
                              <span style={{ color: "#1CFF25" }}>
                                {pageHeaders[page][1]}()
                              </span>
                            </Text>
                          </Flex>
                        )}
                        <Flex
                          direction="column"
                          overflowY={["auto", "auto", "auto", "auto"]}
                          w="100%"
                          h="100%"
                          p={[
                            "12px",
                            "12px",
                            "0px 36px",
                            "6px 36px",
                            "6px 16px",
                          ]}
                          align={
                            pathName === "/home"
                              ? ["center", "center", "center", "center"]
                              : ["center", "center", "center", "flex-start"]
                          }>
                          {children}
                        </Flex>
                      </Flex>
                    </CSSTransition>
                  </TransitionGroup>
                </Flex>
              </Box>
            </ChakraProvider>
          </CacheProvider>
        </body>
      </html>
    </>
  );
}
