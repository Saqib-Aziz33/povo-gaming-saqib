import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

function Header() {
  return (
    <Navbar expand="lg" className="header fixed-top">
      <Container>
        <Navbar.Brand>
          <img src="assets/logo.png" width={40} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars color="#fff" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#staking">Staking</Nav.Link>
            <Nav.Link href="#governance">Governance</Nav.Link>
            <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#rugpul">Rugpul</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Button colorScheme="red">Connect Wallet</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
