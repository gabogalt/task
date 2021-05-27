import { Alert, Table } from "react-bootstrap";
import { useState } from "react";
const VerTask = ({ task, deleteTask }) => {
	const [verAlert, setVerAlert] = useState(false);

	return (
		<>
			{!(task.length > 0) ? (
				<Alert className="mt-3" variant="success">
					<Alert.Heading className="text-center">
						No hay tareas registradas
					</Alert.Heading>
				</Alert>
			) : (
				<>
					<h2 className="mt-5 mb-3">Listado de Tareas</h2>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th className="text-center">ID</th>
								<th className="text-center">Tarea</th>
								<th className="text-center">Descripcion</th>
								<th className="text-center"></th>
							</tr>
						</thead>
						<tbody>
							{task.map((tas) => (
								<tr>
									<td className="text-center">{tas.id}</td>
									<td className="text-center">{tas.name}</td>
									<td className="text-center">{tas.description}</td>
									<td
										className="text-center"
										onClick={() => deleteTask(tas.id)}
									>
										<i class="far fa-trash-alt"></i>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			)}
		</>
	);
};

export default VerTask;
