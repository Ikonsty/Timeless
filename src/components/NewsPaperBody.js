import { Grid } from '@mui/material';
import React from 'react';

export const NewsPaperBody = () => {
	return (
		<Grid
			container
			sx={{
				margin: '2vh 0  2vh 0',
			}}
		>
			<Grid item xs={2.5}>
				<div className='side-new-title'>Alcatraz</div>
			</Grid>
			<Grid
				item
				xs={7}
				sx={{
					borderRight: '2px dashed',
					borderLeft: '2px dashed',
					borderColor: '#172c1c',
					padding: '0 20px 0 20px',
				}}
			>
				<div className='focus-new-title'>President</div>

				<p className='content' sx={{ width: 'fit-content' }}>
					Lorem Ipsum is simply <b>dummy</b> text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s, when an unknown printer took a galley
					of type and scrambled it to make a type specimen book. It has survived
					not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in
					the 1960s with the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software like
					Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</Grid>
			<Grid item xs={2.5}>
				<p className='content'>Some more text</p>
			</Grid>
		</Grid>
	);
};
