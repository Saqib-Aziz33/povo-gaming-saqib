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
            <Nav.Link href="#link">Staking</Nav.Link>
            <Nav.Link href="#link">Governance</Nav.Link>
            <Nav.Link href="#link">Tokenomics</Nav.Link>
            <Nav.Link href="#link">Roadmap</Nav.Link>
            <Nav.Link href="#link">Rugpul</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Button colorScheme="red">Connect Wallet</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
