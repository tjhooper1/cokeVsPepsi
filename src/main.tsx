import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VoteProvider } from './context/VoteContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<VoteProvider>
			<App />
		</VoteProvider>
	</React.StrictMode>
);
