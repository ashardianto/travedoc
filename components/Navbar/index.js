import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const index = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Travedoc.</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#pricing">Portfolio</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#aboutus">About Us</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default index