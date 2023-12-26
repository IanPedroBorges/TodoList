import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import LocalStorageProvider from './context/LocalStorageContext/index.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<LocalStorageProvider>
		<App />
	</LocalStorageProvider>
);
