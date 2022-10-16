import { Container } from "react-bootstrap";
import { Box, Button } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const carouselItems = ["en1", "en2", "en3", "hc1", "hc2", "hc3"];

const ExclusiveNFTS = () => {
  return (
    <div className="exclusive-nfts">
      <Container>
        <h1 className="fs-1 text-center fw-bold">
          <span className="txt-red fw-normal">POVO</span> Exclusive NFT's
        </h1>

        <Box py={16}>
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
          >
            {carouselItems.map((item) => (
              <div key={item} className="text-center mx-4">
                <img
                  src={`assets/${item}.png`}
                  style={{ width: "100%" }}
                  alt=""
                />
                <Button
                  colorScheme="red"
                  px={8}
                  py={4}
                  fontSize="1.3rem"
                  mt={8}
                >
                  Buy
                </Button>
              </div>
            ))}
          </Carousel>
        </Box>
      </Container>
    </div>
  );
};
export default ExclusiveNFTS;
