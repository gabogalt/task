import { Alert, Table } from "react-bootstrap";
import { useState } from "react";
import swal from "sweetalert";

const VerTask = ({ task, deleteTask }) => {
	const [verAlert, setVerAlert] = useState(false);
	const deleteTas = deleteTask;
	const confirmarTask = (id, deleteTas) => {
		swal({
			title: "Estas Seguro?",
			text: "Si eliminas esta tarea no podrás recuperarla!",
			icon: "info",
			buttons: true,
			dangerMode: true,
		}).then((response) => {
			if (response) {
				{
					deleteTask(id);
					swal("Se ha borrado exitosamente!", {
						icon: "success",
					});
				}
			}
		});
	};

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
								<th className="text-center">#</th>
								<th className="text-center">Tarea</th>
								<th className="text-center">Descripcion</th>
								<th className="text-center">Eliminar</th>
							</tr>
						</thead>
						<tbody>
							{task.map((tas, index) => (
								<tr>
									<td className="text-center">{index + 1}</td>
									<td className="text-center">{tas.name}</td>
									<td className="text-center">{tas.description}</td>
									<td
										className="text-center"
										onClick={() => confirmarTask(tas.id)}
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
