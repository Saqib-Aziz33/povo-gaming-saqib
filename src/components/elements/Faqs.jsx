import { Container } from "react-bootstrap";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

const faqStyles = {
  bg: "black",
  border: "none",
  py: 3,
  my: 6,
  borderRadius: "10px",
  boxShadow: "1px 1px 20px 0 rgba(0,0,0,0.05)",
};

const Faqs = () => {
  return (
    <div className="faqs">
      <Container>
        <Box as="section" maxWidth="800px" mx="auto" py={16}>
          <h1 className="fs-1 mb-5 fw-bold text-center">FAQ</h1>
          <Accordion allowToggle>
            <AccordionItem {...faqStyles}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="1.2rem">
                    HOW TRANSACTIONS CAN BE PERFORMED?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Transactions in Povo can be made with a variety of digital
                funds. This include your crypto currencies, NFT tokens. You can
                purchase Povo tokens with fiat currency or swap with other
                crypto assets, as well.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem {...faqStyles}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="1.2rem">
                    HOW CROSS CHAIN FUNCTIONALITIES WORK?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                It works by allowing exchange of different cryptocurrencies
                between different pairs. It basically works as a currency
                exchange to facilitate your transfer/swap of crypto assets.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem {...faqStyles}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="1.2rem">
                    WHAT IS MULTIVERSE USE CASE IN BLOCKCHAIN GAME?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Multiverses can be used in gaming as an advanced feature to
                enter in parallel universes to explore new area and levels
                within the game.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem {...faqStyles}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="1.2rem">
                    HOW TRANSACTIONS CAN BE PERFORMED?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Transactions in Povo can be made with a variety of digital
                funds. This include your crypto currencies, NFT tokens. You can
                purchase Povo tokens with fiat currency or swap with other
                crypto assets, as well.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem {...faqStyles}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="1.2rem">
                    HOW CROSS CHAIN FUNCTIONALITIES WORK?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                It works by allowing exchange of different cryptocurrencies
                between different pairs. It basically works as a currency
                exchange to facilitate your transfer/swap of crypto assets.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem {...faqStyles}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="1.2rem">
                    WHAT IS MULTIVERSE USE CASE IN BLOCKCHAIN GAME?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Multiverses can be used in gaming as an advanced feature to
                enter in parallel universes to explore new area and levels
                within the game.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
};
export default Faqs;
