import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

	return (
		<>
			<Routes>
				<Route index element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
