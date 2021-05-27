import { useState } from "react";
import shortid from "short-id";

import { Button, Form } from "react-bootstrap";
const FormTask = ({ addTask }) => {
	const [verForm, setVerForm] = useState(false);
	const [texBoton, setTextBoton] = useState("Agrega una tarea 😁");

	const handleAddTask = (e) => {
		e.preventDefault();

		const [taskName, taskDescription] = e.target.elements;
		console.log(taskName.value);
		console.log(taskDescription.value);
		addTask({
			id: shortid.generate(),
			name: taskName.value.trim(),
			description: taskDescription.value.trim(),
		});
		e.target.reset();
	};

	const mostrarForm = () => {
		setVerForm(!verForm);
		verForm
			? setTextBoton("Agrega una tarea 😁")
			: setTextBoton("Dejar de agregar tareas🙄");
	};

	return (
		<div className="m-5 ">
			<h2>Agregar Tarea</h2>
			<p style={{ textAlign: "justify", textJustify: "inter-word" }}>
				En la siguiente página podrás agregar tareas y eliminarlas a medida que
				vayas cumpliendo con ellas para que así tengas tu propia agenda personal
			</p>
			<Button
				variant="success"
				style={{ float: "right", marginBottom: "30px" }}
				onClick={mostrarForm}
			>
				{texBoton}
			</Button>

			{verForm && (
				<div>
					<Form
						style={{
							marginTop: "80px",
							marginBottom: "30px",
							border: "1px solid black",
							borderRadius: "5px",
						}}
						className="p-3"
						onSubmit={handleAddTask}
					>
						<Form.Group>
							<Form.Label className="mb-3">Nombre de la tarea</Form.Label>
							<Form.Control
								type="text"
								name="taskName"
								placeholder="nombre tarea"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label className="mt-3 mb-3">
								Descripcion de la tarea
							</Form.Label>
							<Form.Control as="textarea" name="taskDescription" rows={3} />
						</Form.Group>

						<Button
							className="mt-5 mb-5"
							type="submit"
							style={{ marginRight: "10px", float: "right" }}
						>
							Guardar tarea
						</Button>
					</Form>
				</div>
			)}
		</div>
	);
};

export default FormTask;
