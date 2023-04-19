import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './utils/router/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Navigation />
	</React.StrictMode>
);
