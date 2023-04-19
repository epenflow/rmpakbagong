import { Navigate } from 'react-router-dom';

const useAuth = (token: string, key: string, to: string, navigate: string) => {
	const tokens = localStorage.getItem(JSON.parse(key));
	if (!token && token !== tokens) {
		<Navigate to={to} />;
	} else {
		<Navigate to={navigate} />;
	}
};
