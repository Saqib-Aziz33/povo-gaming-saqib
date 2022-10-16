import { Container, Row, Col } from "react-bootstrap";
import { Box, Button, Text } from "@chakra-ui/react";

const Staking = () => {
  return (
    <div className="staking">
      <Container>
        <Row>
          <Col sm={12} md={6} className="mb-4">
            <img src="assets/stake.png" className="img-fluid" alt="" />
          </Col>

          <Col sm={12} md={6} className="mb-4">
            <Box textAlign="center">
              <h2 className="fs-1 fw-bold">
                <span className="txt-red fw-normal">POVO</span> Staking Platform
              </h2>
              <Button colorScheme="red" mt={8} mb={4}>
                Launched, Povo Staking
              </Button>
            </Box>
            <Box px={8} pb={8}>
              <Text as="p" fontSize="1.3rem" fontWeight="bold">
                Key Features
              </Text>
              <ul className="mt-3">
                <li>
                  You can stake your POVO at any time you choose. You can stake
                  any amount of POVO you wish.
                </li>
                <li>
                  Once staked, the contract will deliver a reward continuously
                  for as long as tokens remain staked.
                </li>
                <li>
                  You can withdraw any amount of staked POVO tokens without any
                  locking period
                </li>
                <li>You are free to stake additional amounts at any time</li>
              </ul>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Staking;
