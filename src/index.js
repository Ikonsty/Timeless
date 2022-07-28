import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//fonts
import './fonts/chomsky/Chomsky.otf';
// import './fonts/chunkfive/Chunk.ttf';
import './fonts/knorke/Knorke.ttf';
import './fonts/lower-atmosphere/Lower atmosphere.ttf';
import './fonts/newsflash-bb/NewsflashBB.ttf';
import './fonts/volkszeitung-21/Volkszeitung 21.ttf';
import './fonts/Manuale/Manuale-Medium.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
