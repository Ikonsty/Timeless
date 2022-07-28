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
					props: { variant: 'navigation' },
					style: {
						maxWidth: '30px',
						maxHeight: '30px',
						minWidth: '30px',
						minHeight: '30px',
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
		MuiDivider: {
			styleOverrides: {
				root: {
					'&.MuiDivider-root': {
						'&::before': {
							borderTop: '2px solid',
							marginRight: '4%',
						},
						'&::after': {
							borderTop: '2px solid',
							marginLeft: '4%',
						},
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				h1: {
					// main-title
					fontFamily: 'Chomsky',
					fontSize: '7vw',
				},
				h2: {
					// nav-header
					fontFamily: 'Volkszeitung21',
					fontSize: '3vw',
				},
				h3: {
					// header-info
					fontFamily: 'LowerAtmosphere',
					fontSize: '2.5vw',
				},
				h4: {
					// focus-new-title
					fontFamily: 'NewsflashBB',
					fontSize: '3vw',
					border: '3px solid #172c1c',
				},
				h5: {
					// side-new-title
					fontFamily: 'Knorke',
					fontSize: '2vw',
				},
				body1: {
					fontFamily: 'Manuale',
					fontSize: '1.5vw',
					margin: '2vh 0  2vh 0',
				},
			},
		},
	},
	palette: {
		secondary: {
			main: '#D78E50',
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
