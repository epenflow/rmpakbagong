import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './utils/router/router';
import { DomProvider } from './utils/contexts/dom-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<DomProvider>
			<Navigation />
		</DomProvider>
	</React.StrictMode>
);
