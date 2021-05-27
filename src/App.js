import Header from "./componentes/Header";
import FormTask from "./componentes/FormTask";
import VerTask from "./componentes/VerTask";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
function App() {
	const [tasks, setTask] = useState([]);

	const addTask = (task) => {
		setTask([...tasks, task]);
	};

	const deleteTask = (id) => {
		const finalTasks = tasks.filter((task) => task.id !== id);
		setTask(finalTasks);
	};

	return (
		<>
			<Header />
			<Container
				className="mt-5 mb-5"
				style={{ border: "6px solid black", borderRadius: "10px" }}
			>
				<Row>
					<Col sm={12} md={6}>
						<FormTask addTask={addTask} />
					</Col>
					<Col sm={12} md={6}>
						<VerTask task={tasks} deleteTask={deleteTask} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
