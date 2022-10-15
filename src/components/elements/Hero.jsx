import { HeroCarousel } from "./index";
// ui
import { Container, Row } from "react-bootstrap";
import { Box, Button, HStack, Flex, Link, Text } from "@chakra-ui/react";
// icons
import { BsFacebook, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaMediumM, FaGithub, FaReddit } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero pt-5">
      <Container className="pt-5">
        <Box pt={32} pb={8}>
          <Row className="">
            <section className="col-md-6 mb-4">
              <h1 className="heading display-4 fw-normal">
                Play to win <br /> Reward on holding
              </h1>
              <h3 className="fs-3 my-4" style={{ color: "#ddd" }}>
                Frictionless yield & liquidity generation protocol for game
                lover. Povo is deflationary in it's nature
              </h3>
              <HStack justify="space-between">
                <Button
                  _hover={{ bgColor: "#E53E3E", color: "white" }}
                  px={{ base: 8, md: 16 }}
                  color="black"
                >
                  <img
                    src="assets/pancakeswap.png"
                    width="20px"
                    className="me-2"
                    alt=""
                  />
                  Trade on PancakeSwap
                </Button>
                <Button
                  px={8}
                  ml="auto"
                  bg="transparent"
                  border="1px solid white"
                  color="white"
                  _hover={{ bgColor: "#E53E3E", borderColor: "#E53E3E" }}
                >
                  Whitepaper
                </Button>
              </HStack>
              {/* icons */}
              <Flex my={8} direction="row" gap="6">
                <Link href="#">
                  <FaMediumM size={25} />
                </Link>
                <Link href="#">
                  <FaGithub size={25} />
                </Link>
                <Link href="#">
                  <BsTelegram size={25} />
                </Link>
                <Link href="#">
                  <BsTwitter size={25} />
                </Link>
                <Link href="#">
                  <BsYoutube size={25} />
                </Link>
                <Link href="#">
                  <FaReddit size={25} />
                </Link>
                <Link href="#">
                  <BsFacebook size={25} />
                </Link>
              </Flex>
              {/* lists */}
              <Flex
                fontWeight={500}
                gap={12}
                fontSize={{ base: "0.9rem", md: "1rem" }}
              >
                <Box>
                  <h5 className="fs-5 mb-2">Buying FEE is 5%</h5>
                  <ul className="ps-4">
                    <li>3% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>1% Reflection to holders</li>
                  </ul>
                </Box>
                <Box>
                  <h5 className="fs-5 mb-2">Selling FEE is 7%</h5>
                  <ul className="ps-4">
                    <li>3% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>1% Reflection to holders</li>
                  </ul>
                </Box>
              </Flex>
            </section>

            <section className="col-md-6 mb-4">
              <HeroCarousel />
              {/* token address */}
              <Flex
                justify="center"
                my={4}
                fontSize={{ base: "0.8rem", md: "1rem" }}
              >
                <Text bgColor="#E53E3E" p={2}>
                  Token Address
                </Text>
                <Text border="1px solid #E53E3E" bg="#2d061bFF" p={2}>
                  0x2a2d03a47ae6220312337d1f094badcd1ee948cc
                </Text>
              </Flex>

              {/* imgs */}
              <HStack gap={4} justify="space-between" mt={12}>
                <Link href="#">
                  <img src="assets/certik.png" width="120px" alt="" />
                </Link>
                <Link href="#">
                  <img src="assets/pcs.png" width="120px" alt="" />
                </Link>
                <Link href="#">
                  <img src="assets/xt.png" width="120px" alt="" />
                </Link>
              </HStack>
            </section>
          </Row>
        </Box>
      </Container>
    </div>
  );
};
export default Hero;
