import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import LocalStorageProvider from './context/LocalStorageContext/index.tsx';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<LocalStorageProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</LocalStorageProvider>
);
