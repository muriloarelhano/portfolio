import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";
import BannerImage from "../../public/banner-image.png";

export const Banner = () => {
  return (
    <Container maxW={"full"} bg={useColorModeValue("gray.100", "gray.700")}>
      <Container
        maxW={"container.lg"}
        py={4}
        textAlign={{ base: "center", lg: "left" }}
      >
        <HStack
          gap={4}
          wrap={{
            base: "wrap",
            lg: "nowrap",
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <VStack gap={4} minW={"35%"} align={{ lg: "start" }}>
            <Heading fontSize={"4xl"} fontWeight={"bold"}>
              Hi There!👋 I’m Murilo Arelhano
            </Heading>
            <Text>
              I’m a Full-stack Web Developer, graduating in information system,
              I have experience and study constantly web development with
              NodeJs, ReactJs, Typescript, micro services, cloud infrastructure,
              DevOps and information security.
            </Text>
            <HStack
              gap={4}
              wrap={{
                base: "wrap",
                md: "nowrap",
              }}
              justify={"center"}
            >
              <Link href="https://github.com/muriloarelhano">
                <Button size={"lg"}>
                  Go To Github{" "}
                  <BsGithub fontSize={"25px"} style={{ marginLeft: "8px" }} />
                </Button>
              </Link>

              {/* <Button variant={"ghost"} size={"lg"}>
                Download | CV
              </Button> */}
            </HStack>
          </VStack>
          <Image src={BannerImage.src} alt="" transform={"translateY(50px)"} />
        </HStack>
      </Container>
    </Container>
  );
};
