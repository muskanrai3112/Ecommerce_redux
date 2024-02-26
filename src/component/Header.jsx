import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge, IconButton } from "@mui/material";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="header">
          <Navbar.Brand href="#home">Home</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">Add to cart</Nav.Link>
            <Nav.Link href="#pricing">
              <IconButton color="inherit">
                <Badge badgeContent={10} color="primary">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
