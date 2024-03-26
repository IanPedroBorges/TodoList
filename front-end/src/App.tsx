import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Todo from './pages/Todo';


function App() {

	return (
		<>
			<Routes>
				<Route index element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/home' element={<Todo />} />
			</Routes>
		</>
	);
}

export default App;
