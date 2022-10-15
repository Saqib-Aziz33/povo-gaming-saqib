import { Container } from "react-bootstrap";
import { Stack, Text, Box, Flex, Heading, Link } from "@chakra-ui/react";
import { BsFacebook, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaMediumM, FaGithub, FaReddit } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer p-2">
      <Container>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={8}
          justify="space-between"
          py={8}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            maxW="500px"
            gap={4}
            align="center"
          >
            <Box>
              <img
                style={{ width: "100%", maxWidth: "100px" }}
                src="assets/logo.png"
                alt=""
              />
            </Box>
            <Box>
              <Heading size="sm" pb="2" textTransform="uppercase">
                play to win rewards on holding
              </Heading>
              <Text textAlign="justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                quos iusto recusandae quasi reiciendis nostrum.
              </Text>
            </Box>
          </Flex>

          {/* icons */}
          <Flex
            alignSelf={{ base: "center", md: "flex-end" }}
            direction="row"
            gap="4"
          >
            <Link href="#">
              <FaMediumM size={30} />
            </Link>
            <Link href="#">
              <FaGithub size={30} />
            </Link>
            <Link href="#">
              <BsTelegram size={30} />
            </Link>
            <Link href="#">
              <BsTwitter size={30} />
            </Link>
            <Link href="#">
              <BsYoutube size={30} />
            </Link>
            <Link href="#">
              <FaReddit size={30} />
            </Link>
            <Link href="#">
              <BsFacebook size={30} />
            </Link>
          </Flex>
        </Stack>

        <hr />

        <Text as="p" mt={4} textAlign="center">
          &copy;2022 Povo Production Limited
        </Text>
      </Container>
    </footer>
  );
}
export default Footer;
