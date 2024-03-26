import { useLocalStorage } from '../../hooks/useLocalStorage';
import { LocalStorageContext } from './LocalStorageContext';

export default function LocalStorageProvider({
	children,
}: {
  children: React.ReactNode;
}) {
	const [login, setLogin] = useLocalStorage('login', {
		email: '',
		password: '',
	});
	const shared = { login, setLogin };
	return (
		<LocalStorageContext.Provider value={shared}>
			{children}
		</LocalStorageContext.Provider>
	);
}
