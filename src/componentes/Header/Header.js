import { Navbar, Container } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar expand="lg" bg="primary">
			<Container>
				<Navbar.Brand href="#">
					<h1>Completando tus Tareas</h1>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
