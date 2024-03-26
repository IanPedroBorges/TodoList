import { useState } from 'react';
import { userContext } from './UserContext';
import { UserReturn } from '../../types/context/loginContextTypes';

export default function LocalStorageProvider({
	children,
}: {
  children: React.ReactNode;
}) {
	const [User, setUser] = useState<UserReturn>();
	const [token, setToken] = useState<string>('');

	const shared = {
		User,
		setUser,
		token,
		setToken,
	};
	return <userContext.Provider value={shared}>{children}</userContext.Provider>;
}
