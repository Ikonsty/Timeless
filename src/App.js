import './App.css';
import { createTheme, ThemeProvider, colors } from '@mui/material';
import { MainHeader } from './components/MainHeader';
import { NewsNavbar } from './components/NewsNavbar';
import { NewsPaperBody } from './components/NewsPaperBody';

const theme = createTheme({
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'dashed' },
					style: {
						textTransform: 'none',
						border: `2px dashed ${colors.blue[500]}`,
					},
				},

				{
					props: { variant: 'dashed', color: 'secondary' },
					style: {
						border: `4px dashed ${colors.red[500]}`,
					},
				},
			],
			styleOverrides: {
				root: {
					fontSize: '2vw',
					fontFamily: 'Volkszeitung21',
				},
			},
		},
	},
	palette: {
		secondary: {
			main: '#DA6915',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<MainHeader />
				<NewsNavbar />
				<NewsPaperBody />
				{/* <div className='Nav-header'>Latest</div> */}
			</div>
		</ThemeProvider>
	);
}

export default App;
