import React from "react";
import { Box, Link, useColorModeValue, VStack } from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export const SocialMedia: React.FunctionComponent = () => {
  return (
    <Box position={"fixed"} left={20} bottom={0}>
      <VStack fontSize={30} gap={4}>
        <Link href="https://github.com/muriloarelhano">
          <BsGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/muriloarelhano/">
          <BsLinkedin />
        </Link>
        <Link href="https://www.facebook.com/murilo.arelhano">
          <BsFacebook />
        </Link>
        <Box
          position={"relative"}
          bgColor={useColorModeValue("black", "white")}
          height={"80"}
          width={1}
        />
      </VStack>
    </Box>
  );
};
