import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	    <><Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
			<Container>

				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav className="ms-auto">
						<Nav.Link href="#features">Home</Nav.Link>
						<Nav.Link href="#pricing">About</Nav.Link>
						<Nav.Link href="#pricing">Services</Nav.Link>
						<Nav.Link href="#pricing">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>

		</Navbar>
		<Container>
		<div className = "mt-3 mb-3 p-5 bg-light"> 
		<h1 className="mt-4" style={{fontSize: "50px"}}>A warm welcome!</h1>
		<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
		<Button className="mb-4">Call to action!</Button></div>
    </Container>
    <Container>
    <Row className="mx-auto text-center" >
      <Col sm>  
		<Card className="mb-2">
      <Card.Img variant="top" src="https://placehold.it/500x280" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm>
	<Card className="mb-2">
      <Card.Img variant="top" src="https://placehold.it/500x280" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm>
	<Card className="mb-2">
      <Card.Img variant="top" src="https://placehold.it/500x280" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm>
	<Card className="mb-2">
      <Card.Img variant="top" src="https://placehold.it/500x280" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
			</Container>
      <Container fluid className="mt-4 pt-3 pb-2 text-center bg-dark text-white">Copyrigth © Your Website 2019</Container></>
	);
};

export default Home;
