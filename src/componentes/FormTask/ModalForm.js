import { Modal, Button, Form } from "react-bootstrap";
const MyVerticallyCenteredModal = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Listado de Tareas
				</Modal.Title>
			</Modal.Header>
			<Modal.Body></Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
};

export default MyVerticallyCenteredModal;
// style={{ position: "absolute", top: "20px", right: "40px" }}
