import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import LocalStorageProvider from './context/LocalStorageContext/index.tsx';
import UserContext from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<LocalStorageProvider>
		<UserContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UserContext>
	</LocalStorageProvider>
);
